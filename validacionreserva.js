var nombre = document.querySelector("#nombre");
var apellido = document.querySelector("#apellido");
var telefono = document.querySelector("#telefono");
var email = document.querySelector("#email");
var fecha1=document.querySelector('#fecha1');
var fecha2=document.querySelector('#fecha2');
var categoria=document.querySelector('#categoria')
var boton = document.querySelector("button");

function validarDatos() {
	nombre.addEventListener("input", validarNombre)
	apellido.addEventListener("input", validarApellido)
	telefono.addEventListener("input", validarTelefono)
	email.addEventListener("input", validarEmail)
	fecha1.addEventListener("input", validarIngreso)
	fecha2.addEventListener("input", validarEgreso)
	categoria.addEventListener("input", validarCategoria)

	
	validarNombre()
	validarApellido()
	validarTelefono()
	validarEmail()
	validarIngreso()
	validarEgreso()
	validarCategoria()

}

function validarCategoria(){
	if(categoria.value == '0'){
		alert('Ingrese su categoria')
		categoria.style.backgroundColor = "#f75959"
	}else {
		categoria.style.backgroundColor = "white"
	}
}

function validarNombre(){
	if(nombre.value == ''){
		nombre.setCustomValidity('Ingrese su nombre')
		nombre.style.backgroundColor = "#f75959"
		nombre.placeholder = "Nombre"
	}else {
		nombre.style.backgroundColor = "white"
		nombre.setCustomValidity('')
	}
}

function validarApellido(){
	if(apellido.value == ''){
		apellido.setCustomValidity('Ingrese su apellido')
		apellido.style.backgroundColor = "#f75959"
		apellido.placeholder = "Apellido"
	}else {
		apellido.style.backgroundColor = "white"
		apellido.setCustomValidity('')
	}
}

function validarTelefono(){
	if(telefono.value == ''){
		telefono.setCustomValidity('Ingrese su telefono')
		telefono.style.backgroundColor = "#f75959"
		telefono.placeholder = "Telefono"
	}else {
		telefono.style.backgroundColor = "white"
		telefono.setCustomValidity('')
	}
}

function validarEmail(){
	if(email.value == ''){
		email.setCustomValidity('Ingrese su email')
		email.style.backgroundColor = "#f75959"
		email.placeholder = "E-mail"
	}else {
		email.style.backgroundColor = "white"
		email.setCustomValidity('')
	}
}

function validarIngreso(){
	if(fecha1.value == ''){
		alert('Ingrese su fecha de checkin')
		fecha1.style.backgroundColor = "#f75959"
	}else {
		fecha1.style.backgroundColor = "white"
	}
}

function validarEgreso(){
	if(fecha2.value == ''){
		alert('Ingrese su fecha de checkout')
		fecha2.style.backgroundColor = "#f75959"
	}else {
		fecha2.style.backgroundColor = "white"
		fecha2.setCustomValidity('')
	}
}


boton.addEventListener("load", validarDatos);