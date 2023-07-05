/* Inicio de sesión del Usuario */

//Recoger los datos de las data base
let listaUsers = JSON.parse(localStorage.getItem("UsersLS"))
console.log("Esto es lista de usuarios", listaUsers)
   
 function obtenerListaUsuarios(){
   
    if (listaUsers === null){
       return "Usuario no encontrado, por favor registrate para seguir con la compra"
    }
    else{
      return listaUsers
    }
   }

//Validar que los datos incluidos en el input están en la base de datos.
function validarCredenciales(pemail, cpassword){
    listaUsers_login = obtenerListaUsuarios(); 
    console.log("lista usuario", listaUsers_login)
    
    var acceso = false;
    
    console.log("lista de usuarios nuevo",listaUsers_login)
    
    for(let i =  0; i < listaUsers_login.length; i++){
        console.log("ESto es password",cpassword);
        console.log("ESto es password data base",listaUsers_login[i].password);
        console.log((pemail == listaUsers_login[i].email) && (cpassword == listaUsers_login[i].password));
        if((pemail == listaUsers_login[i].email) && (cpassword == listaUsers_login[i].password)){          
            acceso = true
            sessionStorage.setItem("cliente", JSON.stringify(listaUsers_login[i]))               
        } 
    }
    return acceso
}

// Envío de datos

let botonSession = document.getElementById("btnLogin")
botonSession.addEventListener("click" , iniciarSessionUsuario)


    function iniciarSessionUsuario(){
        var emailSession  = "";
        var passwordSession = ""; 
        var acceso = false;

        emailSession = document.querySelector("#email").value
        passwordSession = document.querySelector("#password").value

        console.log(emailSession)
        console.log(passwordSession)

        acceso = validarCredenciales(emailSession, passwordSession);
        console.log("acceso validación", acceso)

        if(acceso === true){
        // return window.location.href="profile.html" 
        // return document.location.assign("https:http://127.0.0.1:5500/profile.html")
        alert("Los datos introduccidos son CORRECTOS.")
        } else {
        alert("Los datos introducidos No son CORRECTOS.")
        }
    }