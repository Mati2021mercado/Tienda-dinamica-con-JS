

$("#div-contenedor").css(
    "display" , "none"
)

$("#btn").click( ()=> {

    $("#div-contenedor").toggle("fast", function() {
        $("#titulo").css("color" , "red");
        
    })
    .css(
        { 
            "background-color" : "black",
            "color" : "#fff"
        });

})

$("#titulo").css({
    "font-size" : "25px",
    "color" : "#fff"
})
