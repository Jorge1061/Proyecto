function consejos(url) {
    $.ajax({
        url: url,
        success: function(response) {
            var obj = jQuery.parseJSON(response);
            $.each(obj, function(key, value) {
                alert(value.img_src);
            });
        },
        error: function(response) {
            alert(response);
        }
    });
}

$(function() {
    alert("hola");
    consejos('json/consejosPiano.json');
})