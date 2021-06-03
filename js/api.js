$(document).ready(function(){
    

    // ------------------ Funciones ---------------------

    const get_all = () => {
        $.ajax({
            url: 'https://rickandmortyapi.com/api/character/' + parseInt(Math.random() * (150 - 1) + 1),

            success: function(respuesta) {
                /* Trayendo datos al frontal desde la API */
                $("#img1").attr("src", respuesta.image);
                $("#name1").html(respuesta.name);
                $("#genero1").html(respuesta.gender);
                $("#status1").html(respuesta.status);
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            }
        });

        $.ajax({
            url: 'https://rickandmortyapi.com/api/character/' + parseInt(Math.random() * (150 - 1) + 1),

            success: function(respuesta) {
                /* Trayendo datos al frontal desde la API */
                $("#img2").attr("src", respuesta.image);
                $("#name2").html(respuesta.name);
                $("#genero2").html(respuesta.gender);
                $("#status2").html(respuesta.status);
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            }
        });

        $.ajax({
            url: 'https://rickandmortyapi.com/api/character/' + parseInt(Math.random() * (150 - 1) + 1),

            success: function(respuesta) {
                /* Trayendo datos al frontal desde la API */
                $("#img3").attr("src", respuesta.image);
                $("#name3").html(respuesta.name);
                $("#genero3").html(respuesta.gender);
                $("#status3").html(respuesta.status);
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            }
        });

        $.ajax({
            url: 'https://rickandmortyapi.com/api/character/' + parseInt(Math.random() * (150 - 1) + 1),

            success: function(respuesta) {
                /* Trayendo datos al frontal desde la API */
                $("#img4").attr("src", respuesta.image);
                $("#name4").html(respuesta.name);
                $("#genero4").html(respuesta.gender);
                $("#status4").html(respuesta.status);
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            }
        });

        $.ajax({
            url: 'https://rickandmortyapi.com/api/character/' + parseInt(Math.random() * (150 - 1) + 1),

            success: function(respuesta) {
                /* Trayendo datos al frontal desde la API */
                $("#img5").attr("src", respuesta.image);
                $("#name5").html(respuesta.name);
                $("#genero5").html(respuesta.gender);
                $("#status5").html(respuesta.status);
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            }
        });

        $.ajax({
            url: 'https://rickandmortyapi.com/api/character/' + parseInt(Math.random() * (150 - 1) + 1),

            success: function(respuesta) {
                /* Trayendo datos al frontal desde la API */
                $("#img6").attr("src", respuesta.image);
                $("#name6").html(respuesta.name);
                $("#genero6").html(respuesta.gender);
                $("#status6").html(respuesta.status);
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            }
        });
    }
    
    get_all();    
});