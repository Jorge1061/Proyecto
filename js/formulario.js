/*Scrip vista formulario*/

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

/*Scrip nivel de ducación academica*/

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

/*Scrip calcular edad*/

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
        /*console.log("La edad es: " + document.querySelector("#age").value);*/
}
$('#BornDate').blur(getEdad);