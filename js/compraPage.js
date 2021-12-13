
const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const email = document.getElementById('email');


cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    //Eliminar productos del carrito
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    compra.calcularTotal();

    //cuando se selecciona procesar Compra
    procesarCompraBtn.addEventListener('click', procesarCompra);

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });

}

function procesarCompra() {
    if (compra.obtenerProductosLocalStorage().lenght === 0) {
        alert("El carrito esta vacio");
                    
    }
    else{

        let email = document.getElementById("email"); 
        let cliente = document.getElementById("cliente");
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let warnings= "";
        let entrar = false;

        //*VALIDAR REGISTRO
    
        if( cliente.value === '' || email.value === ''){
            warnings += " Ingrese todos los campos requeridos <br>"
            entrar = true;
        }

        if (cliente.length < 4 ) {
            warnings += ` El nombre de usuario es demasiado corto <br>`;
            entrar = true;
        }

        if (!regexEmail.test(email.value)){
            warnings += ` El email no es valido <br>`;
            entrar = true; 
        }

        if (entrar) {
            $("#warnings").html(warnings);
        }

        else{

            alert(cliente.value + " hemos enviado un email a: "+ email.value +" \n confirma que eres tu.");
            compra.vaciarLocalStorage();
            window.location = "../index.html";

            // el envio al email es una simulacion, no hay ningun envio
        }
    }  
}


