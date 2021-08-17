$(function() {
    var content = $("#contenedor")[0];
    $.ajax({
        url: 'https://jorge1061.github.io/Proyecto/json/canciones.json',
        success: function(response) {
            alert(response[0].imagenPortada);
            for (var i = 0; response[i] != undefined; i++)
                content.innerHTML += "<div class='item'><img src='" + response[i].imagenPortada + "' alt='Portada del álbum " + response[i].titulo + "' class='GImagen'><div class='GImagen-text'><h3>" + response[i].titulo + "</h3><p>Canción producida por" + response[i].banda + "</p><audio controls><source src='" + response[i].enlaceAudio + "' type='audio/mp3'>Tu navegador no soporta audio HTML5.</audio><a href='" + response[i].acordes + "'><strong>Acordes</strong></a>/<a href='" + response[i].enlaceVideo + "'><strong>Video</strong></a></div></div>";
        },
        error: function(response) {
            alert(response);
        }
    });


})