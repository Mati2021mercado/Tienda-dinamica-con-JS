class CompraIndividual{
    compra(e){
        e.preventDefault();
        
        if (e.target.classList.contains("main__producto__botones__comprar")) {
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);

        }
    }
    leerDatosProducto(producto){
        const infoProducto = {
            imagen : producto.querySelector("img").src,
            titulo : producto.querySelector("h6").textContent,
            precio : producto.querySelector(".main__producto__bitcoin__precio").textContent,
            id : producto.querySelector(".main__producto__botones__carrito").getAttribute("data-id"),
            cantidad : 1
        }
        this.insertarCompra(infoProducto);
       
    }
    insertarCompra(producto){

        $("#div__compra").addClass("activate");
        $(".div__compra__conenedor__imagen img").attr("src", producto.imagen);
        $(".div__compra__titulo").html(producto.titulo);
        $(".div__compra__parrafo1").html("precio: $" + producto.precio);
        
        this.sumarImpuestos(producto);
    }
    sumarImpuestos(producto){
        const iva = Math.round(0.21 * producto.precio);
        console.log(iva);

        $(".div__compra__parrafo2").html("IVA: $" + iva);
    }
}    
