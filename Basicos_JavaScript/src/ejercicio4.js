//usos de los arrays en javascript
/*
//declaración 
const edades = [];
const frutas = ["pera", "manzana", "fresa"];

//con constructor
const cp = new Array();
const cc = new Array("3esdcfvgt", "9ijhgfrt", "2wsdfghj");

//añadir elementos
edades.unshift(23); //añadir al inicio
edades.push(30); //añadir al final

//eliminar elementos
edades.pop(); //elimina el ultimo elemento y devuelve el valor eliminado

// metodo slice: extrae trozos de un array y no mmuta el array original


// *************edades.slice();
edades.slice(0,1);
// ************** map 
edades.map((edad)=> edad*2);

// ************** filter
edades.filter((edad)=> edad>=18);

*/

/*
Dado un array de nombres crear una funcion llamada mayusculas
que devuelva un nuevo array con los nombres en mayusculas.

Crear una funcion llamada preciosConIVA que al pasarle un array de precios
me los devuelva con el iva incluido (21%).

Crear una funcion llamada imparesCuadrado que le pase un array de numeros
y me devuelva un array con el cuadrado de los numeros impares.

Crear una funcion llamada normalizarEmail que le pase un array de emails que pueden llevar
espacios al principio o al final y que lo devuelva sin espacios al principio ni al final

Crear una funcion llamada filtrarLongitud que le pase como parámetro nombres, un tamaño y me devuelva un array con los nombres cuya longitud
es mayor o igual al parámetro colocado

Normalizar nombres propios que le pase como parámetro un array de nombres y me los devuelva con la letra capital (la primera letra) en mayúscula
*/
/**
 * Esta función recorre un array y crea otro array con los nombres del primero en mayúsculas. 
 * En ningún momento muta el primer array pasado como parámetro
 * @param {string} nombres 
 * @returns Los nombres del array en mayúsculas.
 */
function mayusculas(nombres) {
    return nombres.map(nombre => nombre.toUpperCase());
}
/**
 * Esta función crea un nuevo array y se llena con los elementos del array pasado como parámetro y no muta el parámetro.
 * @param {number} precios 
 * @returns 
 */
function preciosConIVA(precios) {
    return precios.map(precio => precio * 1.21);
}

