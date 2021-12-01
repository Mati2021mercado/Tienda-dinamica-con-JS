// instanciacion de clase
const carro = new Carrito();
// declaracion de variables
const carrito = document.getElementById("carrito");
const productos = document.getElementById("lista-productos");
// tbody se encuentra abajo de todo en la tabla donde esta el carrito es decir ahi se va a mostrar el contanido
const listaProductos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
// LLAMADO A METODOS
const procesarPedidoBtn = document.getElementById("procesar-pedido");



cargarEventos()

function cargarEventos() {
    productos.addEventListener("click", (e)=>{carro.comprarProducto(e)});

    carrito.addEventListener("click", (e)=>{carro.eliminarProducto(e)});

    vaciarCarritoBtn.addEventListener("click", (e)=>{carro.vaciarCarrito(e)});

    document.addEventListener("DOMContentLoaded", carro.leerLocalStorage());

    procesarPedidoBtn.addEventListener("click", (e)=>{carro.procesarPedido(e)})
}

