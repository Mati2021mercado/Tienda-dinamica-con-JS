
const products = [];

const URLGET = "./data.json";


                // --------------------------------------------//
                // ------------- MOSTRAR PRODUCTOS  -----------//
                // --------------- EN PANTALLA ----------------//
                // --------------------------------------------//


$( () => {
    $.get(URLGET, function (respuesta) {

        let datos = respuesta;

        for (let dato of datos) {


            $("#lista-productos").append(`
                <div class="card mb-4 shadow-sm main__producto">
                    <div class="card-header">
                        <h6 class="my-0 font-weight-bold product__name">${dato.name}</h6>
                    </div>
                    <div class="card-body">
                        
                        <a name="${dato.name}"class="btn btn-primary main__producto__botones__comprar" type="submit">Comprar
                            
                        </a>
                        <a href="" class=" main__producto__botones__carrito" data-id="${dato.id}">
                           Agregar
                        </a>
                        <img src="${dato.img}" class="card-img-top">

                        
                        <div class="main__producto__bitcoin">
                            <i class='bx bx-bitcoin main__producto__bitcoin__icono'></i>
                            <p class="main__producto__bitcoin__precio">${dato.price}</p>
                        </div>

                    </div>
                </div>
            `);  
            
        }     
    });
})


$("#div__compra").append(`
    <div id="div__compra__contenedor">
        <div class="compra__datos__producto">
            <div class="div__compra__conenedor__imagen">  <img src="">  </div>
            <div class="">  <img class="div__compra__imagen" src="">  </div>
            <h2 class="div__compra__titulo"></h2>
            <p class="div__compra__parrafo div__compra__parrafo1"></p>
            <p class="div__compra__parrafo div__compra__parrafo2"></p>
            
        </div>

        <div class="index_datos_cliente-producto">

            <div class="informacion_privada">
                <div>
                    <label for="cliente" >Nombre:</label>
                    <div class="col-12 col-md-12">
                        <input type="text" class="form-control" id="clienteIndex"
                            placeholder="Ingrese su nombre" name="destinatario">
                    </div>
                </div>

                <div >
                    <label for="email" >Correo:</label>
                    <div class="col-12 col-md-12">
                        <input type="email" class="form-control" id="emailIndex" placeholder="Ingrese su correo" name="cc_to">
                    </div>
                </div>

                <button type="submit" id="btnConfirmarCompraIndex" class="btn btn-primary">Confirmar Compra</button>
                
            </div>

            <div id="warnings" class="warningsIndex"> </div>


        </div>
    </div>






    
        
`);