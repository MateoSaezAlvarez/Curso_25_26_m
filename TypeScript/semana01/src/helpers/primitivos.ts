//primitivos en TypeScript
//string
let nombre: string = "mateo";
let cp : string = "18003";
let mensaje : string = `bienvenido D/Dña ${nombre} ---> cp: ${cp}`;

function procesarTexto(texto : string) : string{
    return texto.trim().toUpperCase();
}

//console.log(procesarTexto(mensaje));

let saludo = "qué tal todo"; //declaración con inferencia de tipos.

procesarTexto(saludo);

//number
function calcularPrecioFinal(precio :number, impuesto:number, descuento:number):number{
    return (precio*(  (1+(impuesto/100) ) * (1-(descuento/100) )  ))  //impuesto 21
}

console.log(calcularPrecioFinal(80,21,3));

//cualquier tipo any (no usar salvo que no quede de otra)
//funcion que verifique que lo que pase como parametro es un numero
//no vale infinito y !isNaN
function esNumero(numero:any):boolean{
    return typeof numero === "number" && isFinite(numero) && !isNaN(numero);
}

//calcular el promedio de los elementos de un array de números
let numeros = [1,2,3,4,5,6,7,8,9,10];

function calcularPromedio(numeros:number[]):number {
    if (numeros.length===0){
        throw new Error("No se puede calcular el promedio de un array vacio");
    }
    const suma:number = numeros.reduce((acc,numero) => acc + numero,0);
    return suma/numeros.length;
}

function calcularExtremos(numeros:number[]): {min:number, max:number} {
    if (numeros.length===0){
        throw new Error("No se puede calcular el promedio de un array vacio");
    }
    
    const min:number = Math.min(...numeros);
    const max:number = Math.max(...numeros);

    return {min,max};

}

//booleanos 
//comprobar si un email es correcto o no

//el punto y el espacio son caracteres especiales, hay que escaparlos con \. y \s
function esEmailValido(email:string):boolean{
    const emailRegex : RegExp = /^[^\s@ ]+@[^\s@ ]+\.[^\s@]+$/;
    return emailRegex.test("email");
}

//interface construccion de un tipo de dato generado por el usuario para una situacion determinada
interface permisosUsuario {
    leer: boolean,
    escribir: boolean,
    borrar:boolean
}

//crear una funcion llamada obtenerPermisos que dependiendo de si el usuario es administrador, invitado o usuario, 
//cambie los permisos de la interfaz

type usuario = "admin" | "invitado" | "usuario";
//type permite crear un tipo de dato entre unos valores dados
function obtenerPermisos(usuario:usuario):permisosUsuario{
    switch (usuario) {
        case "admin":
            return {leer:true, escribir:true, borrar:true};            
        case "invitado":
            return {leer:true, escribir:false, borrar:false};            
        case "usuario":
            return {leer:true, escribir:true, borrar:false};
        default:
            return {leer:false, escribir:false, borrar:false};
    }
}

obtenerPermisos("usuario");

//null undefined permiten ser asignados como posibles valores
let posibleNombre : string | null = "invitado";
let posibleNombreIndefinido : string | undefined = undefined;

//arrow function

const duplicar = (numero:number):number=>{
    return numero * 2;
};

//funcion que le pase como parametro un array de objetos y devuelva los usuarios que son mayores de edad

const usuarios = [
    {nombre:"mateo", edad:18},
    {nombre:"jose", edad:20},
    {nombre:"ana", edad:16},
    {nombre:"pedro", edad:19},
    {nombre:"luis", edad:14},
    {nombre:"maria", edad:17},
]

const mayoresdeEdad = (usuarios:{nombre:string,edad:number}[]):{nombre:string,edad:number}[]=>{
    return usuarios.filter((usuario) => usuario.edad >= 18);
} 

mayoresdeEdad(usuarios);

//funcion procesarNumeros que cree y devuelva un array de numeros solo positivos, multiplicados por 2 y ordenados de mayor a menor

const misNumeros : number[]=[1,-3,4,54,2,4,9,-23,64,12,-76,32];

const procesarNumeros = (numeros:number[]):number[]=>{
    return numeros
    .filter((numero)=>numero>0)
    .map((numero)=>numero*2)
    .sort((a,b)=>b-a);
}

//Ejercicio
//tengo una interfaz de clientes. Se pide crear una función que genere un MAP con la siguiente estructura.
/**
 * {
 *  idUsuario: {
 *    id: number,
 *    nombre: string,
 *    email: string,
 *    telefono: string
 *  },
 * 
 * }
 */

interface Cliente {
    id:number;
    nombre:string;
    email:string;
    telefono:string;
}

const clientes : Cliente[] = [
    {id:1, nombre:"mateo", email:"mateo@mateo", telefono:"123456789"},
    {id:2, nombre:"jose", email:"jose@jose", telefono:"987654321"},
    {id:3, nombre:"ana", email:"ana@ana", telefono:"123456789"},
    {id:4, nombre:"pedro", email:"pedro@pedro", telefono:"987654321"},
    {id:5, nombre:"luis", email:"luis@luis", telefono:"123456789"},
    {id:6, nombre:"maria", email:"maria@maria", telefono:"987654321"},    
]

const crearMapClientes = (clientes:Cliente[]):Map<number,{nombre:string,email:string,telefono:string}> => {
    return new Map(clientes.map((cliente) => [cliente.id,{nombre:cliente.nombre,email:cliente.email,telefono:cliente.telefono}]))
}

crearMapClientes(clientes);

//Ejercicio. Calculadora simple.
//Crear una calculadora tipada que realice operaciones básicas. Partimos de una interfaz llamada operación,
// formada por tipo con 4 opciones: sumar, restar, multiplicar y dividir,
// segundo elemento llamado operando1 y tercer elemento llamado operando2.
//Crearemos una función llamada calculadora que le pasamos como parámetro una operación de tipo operación
//y devolverá según el tipo el cálculo de los dos operandos. 
//Probar con 10,5   y 10,0. ¿Se podría ampliar a otras operaciones? (raiz cuadrada, potencia, etc...)

interface Operacion {
    operacion:"sumar" | "restar" | "multiplicar" | "dividir";
    operando1:number;
    operando2:number;
}

const calculadora = (operacion:Operacion):number=>{
    switch (operacion.operacion) {
        case "sumar":
            return operacion.operando1 + operacion.operando2;
        case "restar":
            return operacion.operando1 - operacion.operando2;
        case "multiplicar":
            return operacion.operando1 * operacion.operando2;
        case "dividir":
            return operacion.operando1 / operacion.operando2;
        default:
            return 0;
    }
}