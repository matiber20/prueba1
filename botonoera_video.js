var video = document.querySelector('#videoPrincipal');
var boton = document.querySelector('#reproducir');



function reproducir() {
   if(video.paused){
    video.play()
    boton.innerHTML = '<span class="icon-pause2"></span>'
   } else {
       video.pause()
       boton.innerHTML = '<span class="icon-play3"></span>'
   }
}

function frenar() {
    video.currentTime = 0
    video.pause()
    boton.innerHTML = '<span class="icon-play3"></span>'
}

function saltar(valor) {
    video.currentTime += valor
}


