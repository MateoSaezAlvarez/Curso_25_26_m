//Ejercicio destructuring profundo

import { producto1 } from "./data/data";
import { extraerData } from "./helpers/myFunction";

/// -------- INICIO DE LA APLICACIÓN

const newDataArray = arrayProductos=>arrayProductos
    .map(extraerData); //Si el parámetro del map y lo que se le mete a la función es lo mismo "product" en este caso, 
                       // se puede quitar la arrow function por completo y solo se queda el nombre de la funcion

console.log(newDataArray(producto1));