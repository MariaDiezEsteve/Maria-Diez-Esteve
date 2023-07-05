# Blog de Noticias de Innovación

## Autora:
María Diez Esteve

## Contenido
Este respositorio representa a una web que contiene las últimas noticias sobre innovación. 
Esta realizado con HTML, CSS y Boostrap.
Contiene:

* Home
* Barra de navageación: con acceso a las home, rrss, login y registro.
* Login
* Registro
* Footer: Con enlaces a las redes sociales de la autora.

## Funcionalidades
 * Login de acceso: Existe una base de datos(javascript/basedatos.js) en la que existe un usuario. Si en el login.html se incluye  email: "m@m.com", password: "12ma12ma.", aparece un mensaje de alerta: Los datos introduccidos son CORRECTOS.
 En el caso de introducir cualquier otro dato, aparecerá un mensaje de alerta: Los datos introducidos No son CORRECTOS.


 * Registro.html: Validación de campos de registro.
 Los inputs del formulario de registro tienen que seguir una requisitos para ser completados. Por ejemplo, en el caso de la contraseña tiene que al menos contener un número 0-9, una mayúscula, una minúscula, un carácter especial (.,*!?¿¡/#$%&) con longitud mínima de 8 caracteres y no acepta espacios.
 En el caso de que no se cumpla está regla, aparecerá un x en rojo, y solo cuando se cumplan aparecerá un check verde.