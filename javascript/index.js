//Escribir la fecha en #date

let cajaFecha=document.getElementById("date");
let fecha= new Date();

/* Darle formato a la fecha */

// Incluir el día de la semana
let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
let dia = dias[fecha.getDay()]

//Incluir el mes 
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
let mes = meses[fecha.getMonth() -1]

// Incluir el número del día 
let numero = fecha.getDate()

// Incluir el año 
let ano = fecha.getFullYear()

cajaFecha.innerText=`${dia}, ${numero} de ${mes} de ${ano}`;