var nombre = document.querySelector("#nombre");
var apellido = document.querySelector("#apellido");
var telefono = document.querySelector("#telefono");
var email = document.querySelector("#email");
var boton = document.querySelector("button");

function validarDatos() {
	nombre.addEventListener("input", validarNombre)
	apellido.addEventListener("input", validarApellido)
	telefono.addEventListener("input", validarTelefono)
	email.addEventListener("input", validarEmail)
	
	validarNombre()
	validarApellido()
	validarTelefono()
	validarEmail()
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


boton.addEventListener("load", validarDatos);