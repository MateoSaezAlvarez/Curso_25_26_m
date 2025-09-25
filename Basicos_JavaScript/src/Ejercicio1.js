//Primer ejercicio de JavaScript

//Declarar variables



//declarar funcion

/**
 * Suma dos numeros y devuelve el resultado
 * @param {number} [a=0] primer numero con valor por defecto 0
 * @param {number} [b=0] segundo numero con valor por defecto 0
 * @returns {number} la suma de a y b
 */
function suma(a=0, b=0) {
    return a + b;
}

//iniciar la aplicacion
function saludar(nombreUsuario){
    //return `Bienvenid@, ${nombreUsuario}`
    return `Bienvenid@, ${nombreUsuario??"Usuario"}`
}

let nombreUsuario = "Mateo";
console.log(saludar(nombreUsuario));

/*
Funcion llamada aprobados que pase un numero como parámetro y 
diga si estoy aprobado o no. Crear una versión 2.0 que si le paso
un numero mayor o igual a 9 me diga sobresaliente. Si está entre
5 y 9 me diga aprobado y si es menor que 5 me diga suspenso.
*/

/*function aprobados(nota) {
    nota>=5 ? console.log("Aprobado") : console.log("Suspenso");
}*/

// const aprobados = (nota=0) => {
//     return nota>=5 ? "aprobado" : "suspenso";
// }

const aprobados = (nota=0) => nota>=5 ? "aprobado" : "suspenso";

aprobados(5);

const aprobados2 = (nota=0) => nota>=9 ? "sobresaliente" : nota>=5 ? "aprobado" : "suspenso";