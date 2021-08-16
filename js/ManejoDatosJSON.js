function AsignarID(id) {
    sessionStorage.setItem("ID", id);
}

/*Funciones carga canción*/

function cargarCancion() {
    var ID = sessionStorage.getItem("ID");
    var Canciones;
    var cancionID;
    try {
        fetch('JSON/Canciones.json')
            .then(response => response.json())
            .then(CancionesJSON => {
                Canciones = CancionesJSON;
                Canciones.forEach(cancion => {
                    if (cancion.id == ID) {
                        cancionID = cancion;
                        llenarHTMLCancion(cancionID);
                    }
                });
            });

    } catch (error) {
        alert(error);
    }
}


function llenarHTMLCancion(cancionID) {
    if (document.getElementById("TituloCancion")) {
        document.getElementById("ImagenAlbum").src = cancionID.imagenPortada;
        document.getElementById("TituloCancion").innerHTML = cancionID.tituloOriginal;
        document.getElementById("NombreBanda").innerHTML = cancionID.banda;
        document.getElementById("TituloCancionOriginal").innerHTML = cancionID.tituloOriginal;
        document.getElementById("TituloCancioNTraducida").innerHTML = cancionID.tituloTraducido;
        document.getElementById("LetraOriginal").innerHTML = cancionID.letraOriginal;
        document.getElementById("LetraTraducida").innerHTML = cancionID.letraTraducida;
        document.getElementById("videoCancion").src = cancionID.enlaceVideo;
        document.getElementById("audioCancion").src = cancionID.enlaceAudio;
    }

}

/*Funciones carga noticia*/

function cargarNota() {
    var ID = sessionStorage.getItem("ID");
    var Noticias;
    var NoticiaID;
    try {
        fetch('JSON/Noticias.json')
            .then(response => response.json())
            .then(NoticiasJSON => {
                Noticias = NoticiasJSON;
                Noticias.forEach(nota => {
                    if (nota.id == ID) {
                        NoticiaID = nota;
                        llenarHTMLNota(NoticiaID);
                    }
                });
            });

    } catch (error) {
        alert(error);
    }
}


function llenarHTMLNota(NoticiaID) {
    if (document.getElementById("TituloNota")) {
        document.getElementById("TituloNota").innerHTML = NoticiaID.Titulo;
        document.getElementById("TextoNota").innerHTML = NoticiaID.Nota;
        document.getElementById("ImgNota").src = NoticiaID.imagenNota;
    }

}