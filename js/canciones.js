var cP = 0;
var cV = 0;
var lP = 0;
var lV = 0;

function consejos(url, i, c) {
    $.ajax({
        url: url,
        success: function(response) {
            if (lV == 0 && lV != lP)
                for (lV = 0; response[lV + 1] != undefined; lV++);
            if (lP == 0)
                for (lP = 0; response[lP + 1] != undefined; lP++);
            var content = $(".posts")[i];
            content.innerHTML = "<img class='galeria' src='" + response[c].img_src + "' alt='Imagen no encontrada'>";

        },
        error: function(response) {
            alert(response);
        }
    });
}

function back(element) {
    if (element == "piano") {
        if (cP == 0)
            cP = lP;
        else
            cP--;
        consejos('https://jorge1061.github.io/Proyecto/json/consejosPiano.json', 0, cP);
    } else {
        if (cV == 0)
            cV = lV;
        else
            cV--;
        consejos('https://jorge1061.github.io/Proyecto/json/consejosCanto.json', 1, cV);
    }
}

function foward(element) {
    if (element == "piano") {
        if (cP == lP)
            cP = 0;
        else
            cP++;
        consejos('https://jorge1061.github.io/Proyecto/json/consejosPiano.json', 0, cP);
    } else {
        if (cV == lV)
            cV = 0;
        else
            cV++;
        consejos('https://jorge1061.github.io/Proyecto/json/consejosCanto.json', 1, cV);
    }
}

$(function() {
    consejos('https://jorge1061.github.io/Proyecto/json/consejosPiano.json', 0, cP);
    consejos('https://jorge1061.github.io/Proyecto/json/consejosCanto.json', 1, cV);
    $(".back").click(function() {
        back($(this).attr("id"));
    });
    $(".foward").click(function() {
        foward($(this).attr("id"));
    });
})