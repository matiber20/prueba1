window.onload = videoFoto;

function videoFoto(){
    var lienzo2 = document.getElementById("lienzo2");
    if (lienzo2 && lienzo2.getContext("2d"))
    {
        var context = lienzo2.getContext("2d");
        var videoSecundario = document.getElementById("videoPrincipal");
        videoPrincipal.play();
    setInterval(function(){
        var lienzo2 = document.getElementById("lienzo2");
        var context = lienzo2.getContext("2d");

        var videoSecundario = document.getElementById("videoPrincipal");
        context.drawImage(videoSecundario, 0, 0, 300, 300, 0, 0, 500, 300);
    }, 3000);
    }
}
