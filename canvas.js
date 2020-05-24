function forma1() {
    var elemento1 = document.getElementById("lienzo1")
    var dibujo1 = elemento1.getContext("2d")

    dibujo1.beginPath()
    dibujo1.arc(200, 300, 80, 0, Math.PI*2, true)
    dibujo1.closePath()

    dibujo1.fillStyle="#87e6a0"
    dibujo1.fill()

    dibujo1.strokeRect(220, 300, 120, 120)
}

var mov, circ, pos_x=0
function animacion() {
    circ.clearRect(0,0,500,200)
    circ.beginPath()
    circ.arc(pos_x, 100, 50, 0, Math.PI*2, false)
    circ.fillStyle ="rgba(135, 230, 160,0.3"
    circ.fill()
    pos_x ++
    setTimeout(animacion, 50)
}

window.addEventListener("load", forma1, false)

window.onload = function() {
    mov= document.querySelector("#lienzo1")
    circ = mov.getContext("2d")
    animacion()
}



