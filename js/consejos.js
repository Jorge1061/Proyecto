var c = 0;
var length = 0;

function consejos(url) {
    $.ajax({
        url: url,
        success: function(response) {
            if (length == 0)
                for (length = 0; response[length + 1] != undefined; length++);
            var content = $(".posts")[0];
            content.innerHTML = "<img class='galeria' src='" + response[c].img_src + "' alt='Imagen no encontrada'>";

        },
        error: function(response) {
            alert(response);
        }
    });
}

$(function() {
    consejos('https://jorge1061.github.io/Proyecto/json/consejosPiano.json');
    $("#back").click(function() {
        if (c == 0)
            c = length;
        else
            c--;
        consejos('https://jorge1061.github.io/Proyecto/json/consejosPiano.json');
    });
    $("#foward").click(function() {
        if (c == length)
            c = 0;
        else
            c++;
        consejos('https://jorge1061.github.io/Proyecto/json/consejosPiano.json');
    });
})