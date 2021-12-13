// instanciacion de clase
const carro = new Carrito();
const btnComprar = new CompraIndividual();
// declaracion de variables
const carrito = document.getElementById("carrito");
const productos = document.getElementById("lista-productos");
// tbody se encuentra abajo de todo en la tabla donde esta el carrito es decir ahi se va a mostrar el contanido
const listaProductos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

//lista-productos se encuentra al final del main
const productos2 = document.getElementById("lista-productos");
// LLAMADO A METODOS
const procesarPedidoBtn = document.getElementById("procesar-pedido");
const confirmarCompra = document.getElementById("btnConfirmarCompraIndex");


cargarEventos()

function cargarEventos() {
    productos2.addEventListener("click", (e)=>{btnComprar.compra(e)});

    confirmarCompra.addEventListener('click', procesarCompraIndex);


    productos.addEventListener("click", (e)=>{carro.comprarProducto(e)});

    carrito.addEventListener("click", (e)=>{carro.eliminarProducto(e)});

    vaciarCarritoBtn.addEventListener("click", (e)=>{carro.vaciarCarrito(e)});

    document.addEventListener("DOMContentLoaded", carro.leerLocalStorage());

    procesarPedidoBtn.addEventListener("click", (e)=>{carro.procesarPedido(e)})
}




function procesarCompraIndex() {
    
        let emailIndex = document.getElementById("emailIndex"); 
        let clienteIndex = document.getElementById("clienteIndex");
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let warnings= "";
        let entrar = false;

        //*VALIDAR REGISTRO
    
        if( clienteIndex.value === '' || emailIndex.value === ''){
            warnings += " Ingrese todos los campos requeridos <br>"
            entrar = true;
        }

        if (clienteIndex.length < 4 ) {
            warnings += ` El nombre de usuario es demasiado corto <br>`;
            entrar = true;
        }

        if (!regexEmail.test(emailIndex.value)){
            warnings += ` El email no es valido <br>`;
            entrar = true; 
        }

        if (entrar) {
            $("#warnings").html(warnings);
        }

        else{

            alert(clienteIndex.value + " hemos enviado un email a: "+ emailIndex.value +" \n confirma que eres tu.");
            
            window.location = "index.html";

            // el envio al email es una simulacion, no hay ningun envio
        }
    
}

