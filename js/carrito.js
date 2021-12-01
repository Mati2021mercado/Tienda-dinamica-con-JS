
class Carrito{
    comprarProducto(e){
        e.preventDefault();
        // verifico si hago click en el boton comprar de nuestro carrito entonces ese valor lo vamos a guardar
        if (e.target.classList.contains("main__producto__botones__carrito")) {
            
            const producto = e.target.parentElement.parentElement;
            
            this.leerDatosProducto(producto);
            console.log(producto);
            
        }
    }
    leerDatosProducto(producto){
        // recibo como parametro el producto y creo un objeto donde vamos a pasar la informacion
        const infoProducto = {
            imagen : producto.querySelector("img").src,
            titulo : producto.querySelector("h6").textContent,
            precio : producto.querySelector(".main__producto__bitcoin__precio").textContent,
            id : producto.querySelector(".main__producto__botones__carrito").getAttribute("data-id"),
            cantidad : 1
        }
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        // si coincide el producto que hemos seleccionado con el producto que ya tenemos en el localStorage lo almacenamos en productosLS
        productosLS.forEach(function(productoLS){
            if (productoLS.id === infoProducto.id) {
                productosLS = productoLS.id;
            }
        });
        if (productosLS === infoProducto.id) {
            alert("producto ya agregado");

        }
         else {
            
            this.insertarCarrito(infoProducto);
        }
       
    }

    insertarCarrito(producto){
        //creo una tabla dentro del TBODY con todos los valores anteriores
        const row = document.createElement("tr");
        row.innerHTML = `
            <td> 
                <img src="${producto.imagen}" width=100> 
            </td> 
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
            </td>
            `;
        listaProductos.appendChild(row);
        // GUARDO al momento de INSERTAR en el carrito
        this.guardarProductosLocalStorage(producto);
    }
    eliminarProducto(e){
        e.preventDefault();
        let producto;
        let productoID;
        // lo vamos a remover si se da click en la clase borrar producto 
        if (e.target.classList.contains("borrar-producto")) {
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            // esto de abajo es para cuando almacenemos nuestro valor en el LOCALSTORAGE
            productoID = producto.querySelector("a").getAttribute("data-id");
            

        }
        
        this.eliminarProductoLocalStorage(productoID);
        this.calcularTotal();
    }
    vaciarCarrito(e){
        e.preventDefault();
        //mientras exista un primer elemento (firstChild) en nuestra listaProductos vamos a removerlo
        while (listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.vaciarLocalStorage();
        return false;
    }

    guardarProductosLocalStorage(producto){
        let productos;
        
        productos = this.obtenerProductosLocalStorage();
        
        productos.push(producto);
        //creamos el localStorage
        localStorage.setItem("productos", JSON.stringify(productos));

    }
    // metodo para saber si hay o no hay productos en nuestro LocalStorage
    obtenerProductosLocalStorage(){
        let productoLS;
        // si no hay nada creamos un array vacio
        if (localStorage.getItem("productos") === null) {
            productoLS = [];

        }
        // si hay algo lo parseamos para que en guardarProductosLocalStorage() agregara el producto al carrito
        else{
            productoLS = JSON.parse(localStorage.getItem("productos"));
        }
        return productoLS;
    }
   
    eliminarProductoLocalStorage(productoID){
        let productosLS;
        //obtengo los elementos que ya estan en el localStorage
        productosLS = this.obtenerProductosLocalStorage();
        //recorro el localStorage cuando elimino un elemento en el carrito
        // comparo que el elemento que elimine en el carrito de compras sea igual (a travez de la ID) que uno de los elementos guardados en el localStorage. de esta manero elimino ambos a la vez.
        productosLS.forEach(function(productoLS, index) {
            if (productoLS.id === productoID) {
                //productosLS va a borrar un elemento en la posicion index
                //vamos a borrar el producto en localStorage
                productosLS.splice(index, 1);
            }

        });
        //actualizo el LocalStorage
        localStorage.setItem("productos", JSON.stringify(productosLS));

    }
    
    leerLocalStorage(){
        let productosLS;
        
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(producto){
            const row = document.createElement("tr");
            row.innerHTML = `
                <td> 
                    <img src="${producto.imagen}" width=100> 
                </td> 
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
                </td>
                `;
            
            listaProductos.appendChild(row);
        });
    }
    leerLocalStorageCompra(){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(producto){
            const row = document.createElement("tr");
            row.innerHTML = `
                <td> 
                    <img src="${producto.imagen}" width=100> 
                </td> 
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <input type="number" class="form-control cantidad" min="1" value=${producto.cantidad} >
                </td>
                <td id='subtotales'> ${producto.precio * producto.cantidad}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
                </td>
                `;
            listaCompra.appendChild(row);
        });
    }
    vaciarLocalStorage(){
        localStorage.clear();
    }

    procesarPedido(e){
        e.preventDefault();
        if (this.obtenerProductosLocalStorage().length === 0) {
            alert("El carrito esta vacio");
        }
        else{
            location.href = "html/compra.html";
        }
    }

    calcularTotal(){
        let productosLS;
        let total = 0;
        let subtotal = 0;
        let impuestos = 0;
        productosLS = this.obtenerProductosLocalStorage();
        for (let i = 0; i < productosLS.length; i++) {
            // vamos  multiplicar el precio por la cantidad y lo guardamos en element
            let element = Number(productosLS[i].precio * productosLS[i].cantidad);
            total = total + element;
        }
        // la propiedad toFixed me muestra la cantidad de decimales que le diga
        impuestos = parseFloat(total * 0.21).toFixed(2);
        subtotal =  parseFloat(total - impuestos).toFixed(2);

        document.getElementById("subtotal").innerHTML = '$ ' + subtotal;
        document.getElementById("impuestos").innerHTML = '$ ' + impuestos;
        document.getElementById("total").innerHTML = '$ ' + total.toFixed(2);

    }
    
    obtenerEvento(e) {
        e.preventDefault();
        let id, cantidad, producto, productosLS;
        if (e.target.classList.contains('cantidad')) {
            producto = e.target.parentElement.parentElement;
            id = producto.querySelector('a').getAttribute('data-id');

            cantidad = producto.querySelector('input').value;
            //llamo al TD que cree "leerLocalStorageCompra" 
            let actualizarMontos = document.querySelectorAll('#subtotales');
            productosLS = this.obtenerProductosLocalStorage();

            productosLS.forEach(function (productoLS, index) {
                if (productoLS.id === id) {
                    productoLS.cantidad = cantidad;                    
                    actualizarMontos[index].innerHTML = Number(cantidad * productosLS[index].precio);
                }    
            });
            localStorage.setItem('productos', JSON.stringify(productosLS));
            
        }
        else {
            console.log("click afuera");
        }
    }
}

