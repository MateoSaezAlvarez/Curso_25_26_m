/*
Métodos interesantes: Arrays

.at - acceso con índices negativos
const frutas = ["manzana", "plátano", "naranja", "uva"];
console.log(frutas.at(-x)) devuelve la posición x empezando por el último elemento del array si x es negativa

.splice - Se usa para modificar un array y muta el original (elimina partes de un array)
frutas.splice(1,2,"pera") === Elimina dos (segundo parámetro) elementos empezando por la posición 1 (primer parámetro) 
y sustituye el tercer parámetro en la posición de los elementos eliminados

.concat - Se usa para concatenar dos o más arrays al final como con push. MUTA el array original

frutas.concat([otro array])

const array = [...frutas, ...edades] los 3 puntos separan los elementos del array (spread operator)

SET -- otro tipo de datos (que sean únicos, no mete duplicados)
const pesos = [4,5,3,2,4,2,4,4,4,4,7,6,5]

const sinDobles = new Set(pesos) (no es un array)
[...new Set[pesos]] (lo vuelve un array)

.reduce - reducir un array a un unico valor
pesos.reduce((acumulador, elemento, indice, array)=> aqui va la logica, valor inicial)
acumulador, elemento NO SON OPCIONALES, el resto si
.reduce no muta el array
El valor inicial también indica el tipo que quiero que me devuelva el método reduce
pesos.reduce((suma, peso)=> suma+peso ,0)

EJERCICIOS
1.- Realizar la multiplicacion de todos los elementos de un array
2.- Encontrar el máximo y el mínimo
3.- Dado un array que sea ["manzana","platano","naranja","manzana","manzana","platano","pera","pera"], devolver un objeto clave valor que diga
    nombre de la fruta:numero de veces que aparece esa fruta
4.- Dado la siguiente matriz: [[1,2],[3,4],[5,6]], se pide aplanar la matriz en un array del formato [1,2,3,4,5,6]
*/

const numeros=[1,2,3,4,5,6,7,8,9,10];
numeros.reduce((multiplicatoria, numero) => multiplicatoria*numero, 1)


const pesos = [4,5,3,2,4,2,4,4,4,4,7,6,5];
pesos.reduce((max,peso)=>
    peso > max ? peso : max, pesos[0])

pesos.reduce((min,peso)=>
    peso < min ? peso : min, pesos[0])

const frutas=["manzana","platano","naranja","manzana","manzana","platano","pera","pera"];
/*
{
    manzana:3
    platano:2
    naranja:1
    pera:2
}
*/
frutas.reduce((acc,fruta)=>{
    acc[fruta] ? acc[fruta]++ : acc[fruta]=1;
    return acc;
 } , {})

 //array de objetos
 const usuarios = [
    {id:1, name:"Ana",age:25,data:{books:100}},
    {id:2, name:"Juan",age:30, data:{books:50}},
    {id:3, name:"María",age:28, data:{books:20}},
    {id:4, name:"Sara",age:28, data:{books:20}},
    {id:5, name:"Carlos",edad:20, data:{books:10}},
    {id:6,name:"Mario",edad:38, data:{books:0}}
 ]

 //dame la información del usuario cuyo nombre es juan

 //usuarios.find(usuario=>usuario.name.toLowerCase==="juan")
 //dame todos los usuarios cuya edad es mayor o igual a 28

//usuarios.find(usuario=>usuario.age.toNumber>=28)

//let resultado = usuarios.find(usuario => Number(usuario.edad) >30)??{}

//dado el siguiente array de usuario, devolver un array con solo los nombres que tienen mas de 20 libros, estrictamente. 
//Obtener el promedio total de todos los libros si suponemos un precio medio de 28€
//Decir qué usuarios no tienen libros

/*
console.log(usuarios.reduce((acc,usuario)=>
    usuario.data.books>20 ? acc.concat(usuario.name) : acc
,[]))

console.log(usuarios.reduce((total,usuario) =>
total+usuario.data.books*28,0))

console.log(usuarios.reduce((acc,usuario)=>
    usuario.data.books==0 ? usuario.name:acc),
"")
*/

const productos = [
    {id:1, nombre: "Laptop", precio: 1200, stock: 5, categoria: "Tecnología"},
    {id:2, nombre: "Camiseta", precio: 35, stock: 15, categoria: "Ropa"},
    {id:3, nombre: "Monitor", precio: 50, stock: 0, categoria: "Tecnología"},
    {id: 4, nombre: "Libro", precio: 20, stock: 50, categoria: "Literatura"},
    {id: 5, nombre: "Móvil", precio: 800, stock: 10, categoria: "Tecnología"},
    {id: 6, nombre: "Pantalón", precio: 60, stock: 5, categoria: "Ropa"},
]

//Obtener un array con los nombres de todos los productos agotados
const productoAgotado = productos.filter(producto => producto.stock === 0);
console.log(productoAgotado);

// Calcular el valor total del inventario (precio * stock) de todos los productos
const dineroInvertido = productos.reduce((total, producto) => total + producto.precio * producto.stock, 0);
console.log(dineroInvertido)

//Filtrar los productos que pertenecen a la categoría llamada "Tecnología y tienen un precio mayor a 500"
const filterTech = productos.filter(producto => producto.categoria === "Tecnología" && producto.precio > 500);
console.log(filterTech)

//Crear un nuevo array de productos aplicando un descuento del 10% a todos los productos de la categoria ropa
const ropaDescuento = productos.map(producto => 
    producto.categoria === "Ropa" ? {...producto, precio:producto.precio*0.9} : producto
);
console.log(ropaDescuento);