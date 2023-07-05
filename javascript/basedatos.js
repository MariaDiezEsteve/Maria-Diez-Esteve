// Lista de usuarios

let listUsers = [
    {
        idUser: 0,
        id: "12345678B",
        name: "maria",
        lastname: "diez",
        email: "m@m.com",
        password: "12ma12ma.",
    }
]

// Inluir en formato json la lista de usuarios

let listUsersStringfied = JSON.stringify(listUsers);
console.log("Esto son datos", listUsersStringfied )

//Conseguir la lista de usuarios

let lsUsers = localStorage.getItem("UsersLS")
         if (lsUsers==null){
            localStorage.setItem("UsersLS", listUsersStringfied);
        }