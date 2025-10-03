//OBJETOS EN JS

const usuario = {
    name : "Mateo",
    email : "pepeperez@gmail.com",
    active : true,
}

//para obtener las claves
const claves = Object.keys(usuario); //array asi: [name, email, active]

// utilidad verificar si las claves están todas sigueindo un objeto de partida
//1.- Como compruebo que las claves existen
function validarCamposRequeridos(objeto,camposRequeridos){
    const clavesObjeto=Object.keys(objeto);
    //devuelve verdadero o falso
    return camposRequeridos.every((campo)=>clavesObjeto.includes(campo)
    )
}

//data
const datosFormulario = {name: "Carla", active:false}

//para los valores

const producto = {
    nombre:"laptop",
    stock:100,
    precio:1000,
    destacad:true
}

//aray de valores
const valores = Object.values(producto); //[laptop,100,1000,true]
//verificar si algún valor cumple alguna condición

const precipitaciones = {
    enero:110,
    febrero:98,
    marzo:120,
    abril:50,
}
//algun mes la precipitacion fue superior a 100 litros

const mesSuperiorCien = Object.values(precipitaciones)
    .some(precipitacion=>precipitacion>100)

//cuantos litros totales han caido en los meses enero-abril

const precipitacionTotal = Object.values(precipitaciones)
.reduce((acc,precipitacion)=>acc+precipitacion,0)

//calcular la precipitacion maxima
const precipitacionMax = Math.max(...Object.values(precipitaciones))

//Obtener pares [clave,valor] ----- entries() devuelve una matriz [[clave1,valor1],[clave2,valor2],...,[claveN,valorN]]
const configuracion = {
    tema:"oscuro",
    idioma:"es",
    notificaciones:true,
    volumen:75
}

//obtener array de pares
const entradas = Object.entries(configuracion); 
/*
    [
        ["tema","oscuro"],
        ["idioma","es"],
        ["notificaciones",true]
        ["volumen",75]
    ]
*/

const usuarioBD = {
    name : "Mateo",
    password:"xfst20012",
    email : "pepeperez@gmail.com",
    active : true,
}
//filtrar. Eliminar los campos sensibles de este objeto ("password")
//Object.entries(usuarioBD).filter([])

//destructuring
const{nombre,email}=usuario; //const nombre=usuarioBD.nombre
                            // const email= usuarioBD.email

const data = [1,2,3,4,5];
const [a,b,c] = data;

function vData (array) {
    const [v1,...v2]=array; // los 3 puntos significa que todo lo demas del array apunte a v2
    console.log("v1",v1);
    console.log("v2",v2);
}

//vData([1,2,3,4,5])

//crear funcion llamada mostrarPersona. Obtener username y las dos primeras redes sociales que el usuario tenga
const usuario3 = {
    id:1,
    info: {
        username:"pepesl",
        redes: ["twitter","github","linkedin"]
    }
}

const {info:{username,redes:[red1,red2]}} = usuario3; 
/*
username ---> isaiasfl
r1 ---> twitter
r2 ---> github 
*/
//Obtener nombre y edad del siguiente objeto
const data4 = {
    id:101,
    usuario:{
        perfil:{
            nombre2:"Lucía",
            edad:28,
            direccion:{
                ciudad:"Granada",
                pais:"España"
            }
        }
    }
}
//si no existe edad, que guarde el valor 0
const {usuario:{perfil:{nombre2,edad=0}}} = data4;
/*
    nombre2 ---> "Lucia"
    edad ---> 28, si no hubiera nada, había un 0 por defecto
*/

const producto1 = [{
    id:1,
    nombre:"laptop",
    precio:1000,
    fabricante:{
        nombre:"HP",
        pais:"USA",
        contacto:{
            email:"info@hp.com",
            telefono:"+1-555-0123",
        },
    },
    especificaciones:{
        ram:"16GB",
        cpu:"Intel i7"
    }
},
{
    id:2,
    nombre:"pc",
    precio:50,
    fabricante:{
        nombre:"Acer",
        pais:"USA",
        contacto:{
            email:"info@logitech.com",
            telefono:"+1-555-4567",
        },
    },
    especificaciones:{
        ram:"8GB",
        cpu:"Intel i5"
    }
},
{
    id:3,
    nombre:"portatil2",
    precio:200,
    fabricante:{
        nombre:"Lenovo",
        pais:"China",
        contacto:{
            email:"info@lenovo.com",
            telefono:"+1-555-7890",
        },
    },
    especificaciones:{
        ram:"4GB",
        cpu:"Intel i3"
    }
}
]


//Crear una función que extraiga los datos del objeto y me devuelva la siguiente estructura:
/*
    nombre,fabricante {nombre,contacto},especificaciones {RAM}
*/
//Imagina un array de productos, usando la nueva especificación, obtener el nombre del producto con más ram

const extraerData = (productos)=>{
    const {
        nombre,
        fabricante:{
            nombre:nombreFabricante,
            contacto //si no hay llaves, significa que coge todo lo que hay
        },
        especificaciones:{ ram }
    }=productos;

    return{
        nombre, //si la clave valor tienen el mismo nombre, se puede quitar el valor y va implícito en la clave
        fabricante,
        especificaciones
    }
}

const newDataArray = (arrayProductos)=>arrayProductos
    .map((producto)=> extraerData(producto));