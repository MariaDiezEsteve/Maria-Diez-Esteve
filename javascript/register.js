/* Aceptar la política de privacidad */
let checkBox = document.getElementById("politica");
let boton = document.getElementById('register')
checkBox.addEventListener("change", clicado);

function clicado() {
  if (checkBox.checked) {
        boton.disabled = false;
  } else {
        boton.disabled = true;
  }
}

/* Declarando variables para recoger los datos del HTML */
let formulario_register = document.querySelector(".formulario__register");

//Requerimientos de formulario

 const formularioValidacion = document.getElementById("formulario-validacion")
 const inputs = document.querySelectorAll("#formulario-validacion input")
 const expresiones = {
     dni: /^\d{8}[A-Z]$/, // Incluye 8 números y una letra
     name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
     lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
   	 email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
     password:/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/, // Al menos un número 0-9. Al menos una mayúscula. Al menos una minúscula. Al menos un carácter especial (.,*!?¿¡/#$%&). Longitud mínima de 8 caracteres, 64 máxima. No acepta espacios.
}

 const campos = {
    dni: false, 
 	name: false, 
    lastname: false, 
 	email: false,
 	password: false,
 }

//Validar formulario

 const validarFormulario = (e) => {
 	switch (e.target.name) {
         case "dni":
             validarCampo(expresiones.dni, e.target, 'dni');
         break;
 		case "name":
             validarCampo(expresiones.name, e.target, 'name');
         break;
         case "lastname":
             validarCampo(expresiones.lastname, e.target, 'lastname');
         break;
         case "email":
             validarCampo(expresiones.email, e.target, 'email');
         break;
         case "password":
             validarCampo(expresiones.password, e.target, 'password');			
         break;
           
 	}
 }

// Validar cada uno de los campos del input

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

 inputs.forEach((input) => {
 	input.addEventListener('keyup', validarFormulario);
 	input.addEventListener('blur', validarFormulario);
 });

