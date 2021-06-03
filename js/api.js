$(document).ready(function(){
    // ------------------ Funciones ---------------------
    const get_all = () => {
        for(let i = 0; i<=6; i++){
            $.ajax({
                url: 'https://rickandmortyapi.com/api/character/' + parseInt(Math.random() * (150 - 1) + 1),
    
                success: function(respuesta) {
                    /* Trayendo datos al frontal desde la API */
                    $("#img"+i).attr("src", respuesta.image);
                    $("#name"+i).html(respuesta.name);
                    $("#genero"+i).html(respuesta.gender);
                    $("#status"+i).html(respuesta.status);
                },
                error: function() {
                    console.log("No se ha podido obtener la información");
                }
            });
        }
    }
    get_all();    
});