const numeros = [1,2,3,4,5];
//Generar un objeto resumen del array que tenga estos campos:
/*
{

valor:numero_correspondiente,
posicion:posicion_dentro_del_array,
esUltimo:array_que_me_diga_si_es_el_ultimo (true/false)

}
*/

const resumenNumeros = numeros.map((numero,index,array)=>{
    return {
        valor: numero,
        position: index,
        esUltimo: index===array.length-1,
    };
})

//console.log(resumenNumeros); //array de objetos mapeados a una estructura dada.

const productos = [
    {
        name: "laptop", price: 1000, stock: 5, active: true
    },
    {
        name: "mouse logitech", price: 28.56, stock: 0, active: false
    },
    {
        name: "laptop MSI 24", price: 35, stock: 2, active:false
    }
]

//Tiene que devolver el siguiente mapeado
/*
nombre
precioOriginal
precioConIVA
hayStock
*/

const productsWithVat = productos.map((producto)=>{
    return {
        name: producto.name,
        originalPrice: producto.price,
        priceWithVat: producto.price*1.21,
        available: producto.stock>0,
    }
});

//Filtrar los productos que tienen stock y están activos
const productFilter=productos.filter(producto=>producto.stock>0 && producto.active);

//buscar todos los datos del laptop de tipo case_insensitive (da igual las mayusculas)

const laptopData = productos.filter(producto=>producto.name.toLowerCase().includes("laptop"))
//console.log(laptopData);

//Crear una funcion que pase como parametro un array de objetos y como segundo parametro, el nombre de un objeto

/**
 * 
 * @param {object} objects 
 * @param {string} name 
 * @returns El objeto que tiene la palabra buscada
 */
const encontrarObjeto = (objects, name) => objects
    .filter(object=>object.name.toLowerCase()
        .includes(name.toLowerCase())
    );

//console.log(encontrarObjeto(productos,"LAPtOp"))

//Crear una funcion que pase como parametro un array de productos, precioInicial, precioFinal
//y devuelva los productos cuyo precio está en ese rango de valores(sin incluirlos)

/**
 * Esta función busca los productos que están dentro del conjunto abierto formado por los parámetros initPrice y endPrice
 * @param {object} products 
 * @param {number} initPrice 
 * @param {number} endPrice 
 * @returns Los productos que se encuentran dentro del rango establecido, sin incluir los parámetros
 */
const filterPrice = (products, initPrice, endPrice) => products
    .filter(product => product.price>initPrice && product.price<endPrice);

const carrito = [
    {
        name: "laptop", price: 1000, count: 5, category: "Electronica"
    },
    {
        name: "mouse logitech", price: 28.56, count: 0, category: "Electronica"
    },
    {
        name: "laptop MSI 24", price: 35, count: 2, category: "Electronica"
    },
    {
        name: "monitor MSI 24", price: 210.6, count: 10, category: "Electronica"
    },
    {
        name: "Teclado mecánico", price: 150, count: 2, category: "Electronica"
    },
    {
        name: "Polo Scalper", price: 150, count: 2, category: "Ropa"
    },
    {
        name: "Pantalon Stradivarius", price: 45, count: 3, category: "Ropa"
    }
]

//funcion que le pase como parametro un carrito y me devuelva el precio total con iva 21%
/**
 * @autor MateoSáez
 * @param {object[]} carrito 
 * @param {number} vat 
 * @returns {number} Total del carrito con el IVA incluido
 */
const totalCarrito = (carrito=[], vat=1.21)=> carrito
    .reduce((total, product)=>product.count > 5
        ? ((total + product.price *vat)*0.95)
        : total + product.price *vat
,0);

//Agrupar el carrito por categorias

/*
{
    Electronica[
        {
    
        },
        {
        }
    ],
    Ropa[
        {
    
        },
        {

        }
    ]
}
*/

const carritoAgrupado = (carrito=[]) => carrito
    .reduce((groups, product)=>{
        const categoryFilter=product.category;
        if(!groups[categoryFilter])
            groups[categoryFilter]=[];
        groups[categoryFilter].push(product);
        return groups;
    },{}
)

const votos = ["Ana", "Carlos", "Ana", "Beatriz","Carlos","Ana"]

//Crear una funcion que cuente cuantos votos tiene cada usuario. {Ana:3, Carlos:2,Beatriz:1}

const totalVotes=(votos=[]) => votos
    .reduce((acc,voto)=>{
        //acc[voto] ? acc[voto]++ : acc[voto]=1;
        acc[voto] = (acc[voto] || 0) + 1; //hace lo mismo que arriba sin ternaria
        return acc;
    },{}
)

const usuarios = [
    {id:1, name:"Ana",rol: "admin"},
    {id:2, name:"Carlos",rol: "user"},
    {id:3, name:"Beatriz",rol: "admin"},
]

//Crear una funcion que le pase como parametro un array de usuarios, como segundo parametro el id. Tiene que devolver el rol que tiene
//function (arrayUsuarios, idBusqueda)

const findUsers=(users=[],id=1) => {
    return users.find((user)=>{
        Number(user.id)===Number(id) ? user.rol : `Usuario con id ${id} no encontrado`;
    })
}

//Buscar el indice del array donde se encuentra el usuario id buscado. Método .findIndex(), el método devuelve -1 si no encuentra nada

const findUsersIndex=(users=[],id=1)=>{
    return users.findIndex((user)=> Number(user.id)===Number(id))
}

//some() devuelve true si al menos un elemento cumple la condición *****

const numerosPares =[4,5,6,7,8]

//¿hay numeros pares en ese array?

const hayPares = (numerosPares=[])=>numerosPares.some(numero=>numero%2===0) //devuelve true o false si hay ALGÚN número par