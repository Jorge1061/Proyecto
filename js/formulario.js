var inputs = document.getElementsByClassName('formulario_input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}


var elementoacademico = document.getElementById('academico')
var academicoElegidos = []

function elegirAcademico(element) {
    if (element.checked) {
        academicoElegidos.push(element.value)
    } else {
        academicoElegidos.splice(academicoElegidos.indexOf(element.value), 1)
    }
    elementoacademico.innerHTML = academicoElegidos.join(', ')
}


function getEdad() {
    const cadenaFecha = document.querySelector("#BornDate").value
    let hoy = new Date()
    let fechaNacimiento = new Date(cadenaFecha)
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
        edad--
    }
    document.querySelector("#age").value = edad
}


var nombreValidado = false;
var correoValidado = false;
var edadValidada = false;
var mensajeValidado = false;

$('#name').blur(function() {
    try {
        console.log("Estoy activado")
        var nombreCompleto = document.querySelector("#name").value;
        nombreCompleto = nombreCompleto.replace(/\r?\n/g, " ");
        nombreCompleto = nombreCompleto.replace(/[ ]+/g, " ");
        nombreCompleto = nombreCompleto.replace(/^ /, "");
        nombreCompleto = nombreCompleto.replace(/ $/, "");
        var cantidadPalabras = nombreCompleto.split(" ");
        if (cantidadPalabras.length >= 3) {
            nombreValidado = true;
        } else {
            alert("Datos invalidos.\n\nSe requiere la inserción mínima del primer nombre y los dos apellidos.\n\Se recomienda verificar los espacios vacios entre palabras.")
            nombreValidado = false;
            this.blur();
        }
    } catch (error) {
        alert(error);
    }
});

$('#mail').blur(function() {
    try {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regex.test(document.querySelector("#mail").value)) {
            correoValidado = true;
        } else {
            alert("Datos invalidos en correo.\n\nSe requiere una estructura de correo válida.\n\Se recomienda verificar espacios, signos especiales y datos del servicio.")
            correoValidado = false;
            this.blur();
        }
    } catch (error) {
        alert(error);
    }
});

$('#BornDate').blur(function() {
    try {
        getEdad();
        if (document.querySelector("#age").value != 0) {
            edadValidada = true;
        } else {
            alert("Datos invalidos en fecha de nacimiento.\n\nSe requiere el registro de la fecha de nacimiento exacta.\n")
            edadValidada = false;
            this.blur();
        }
    } catch (error) {
        alert(error);
    }
});

$('#message').blur(function() {
    try {
        if (document.querySelector("#message").value.length != 0) {
            mensajeValidado = true;
        } else {
            alert("Datos invalidos en mensaje.\n\nSe requiere que el contenido sea diferente de vacio.\n")
            mensajeValidado = false;
            this.blur();
        }
    } catch (error) {
        alert(error);
    }
});


function updateTextInput(val) {
    var num = val.replace(/\./g, '');
    if (!isNaN(num)) {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/, '');
        document.getElementById('textInput').value = num;
    } else {
        alert('Solo se permiten numeros');
        input.value = input.value.replace(/[^\d\.]*/g, '');
    }
}


function sendEmail() {
    try {
        if (nombreValidado == true && correoValidado == true && edadValidada == true && mensajeValidado == true) {
            var CuerpoMensaje;
            CuerpoMensaje = "Nombre: " + document.querySelector("#name").value + " \r\n";
            CuerpoMensaje += "Email: " + document.querySelector("#mail").value + " \r\n";
            CuerpoMensaje += "Género: " + document.querySelector("#gender").value + " \r\n";
            CuerpoMensaje += "Edad: " + document.querySelector("#age").value + " años.\r\n";
            CuerpoMensaje += "Formación académica: " + document.querySelector("#academico").innerHTML + ". \r\n";
            CuerpoMensaje += "Ingresos: " + document.querySelector("#textInput").value + " colones.\r\n";
            CuerpoMensaje += "Mensaje: " + document.querySelector("#message").value + " \r\n";


            Email.send({
                Host: "smtp.gmail.com",
                Username: "proyecto1061jduran@gmail.com",
                Password: "JORGEPROYECTO",
                To: document.querySelector("#mail").value,
                From: "proyecto1061jduran@gmail.com",
                Subject: "Información Tus Clases Musicales - No responder",
                Body: "Su solicitud está siendo procesada con los datos:\r\n" + CuerpoMensaje + ".\r\n Si hay alguna anomalía en los datos porfavor reportarlo",
            })

            .then(function(message) {
                alert("Correo enviado exitósamente")
                location.reload();
            });
            console.log(nombreValidado, edadValidada, correoValidado, mensajeValidado);
        } else {
            alert("Datos errones, favor revisar.")
            console.log(nombreValidado, edadValidada, correoValidado, mensajeValidado);
        }
    } catch (error) {
        alert(error);
    }

}