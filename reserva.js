function base () {
    var boton=document.querySelector('#grabar')
    boton.addEventListener('click', nuevoItem, false)
}

function nuevoItem() {
    var clave=document.querySelector('#categoria').value
    var consulta=document.querySelector('#referencia').value
    var fechaIngreso=document.querySelector('#fecha1').value
    var fechaEgreso=document.querySelector('#fecha2').value
    var nombre=document.querySelector('#nombre').value
    var apellido=document.querySelector('#apellido').value
    var telefono=document.querySelector('#telefono').value
    var email=document.querySelector('#email').value
    var valores=[fechaIngreso, fechaEgreso, nombre, apellido, telefono, email, consulta]
    
    if(fechaEgreso == "" || fechaIngreso == "" || nombre == "" || apellido == "" || telefono == "") {
        const myError = new Error('Error en reserva')
        alert(myError)
        location.reload()
    }else{
        
        localStorage.setItem(clave, valores)
        alert('Reserva guardada con exito!')
        }
    
}



window.addEventListener('load',base, false)