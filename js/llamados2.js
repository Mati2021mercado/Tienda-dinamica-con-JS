
const btnComprar = new CompraIndividual();
const productos2 = document.getElementById("lista-productos");
const confirmarCompra = document.getElementById("btnConfirmarCompraIndex");


cargarEventos2()

function cargarEventos2() {

    productos2.addEventListener("click", (e)=>{btnComprar.compra(e)});
    confirmarCompra.addEventListener('click', procesarCompraIndex);

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


