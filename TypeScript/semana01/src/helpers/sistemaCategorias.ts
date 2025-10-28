//vamos a crear un sistema de categorías:
//crear una variable llamada catálogo que contenga un set de productos. 
//crear estas funciones. agregarProducto, devuelve true o false.
//crear mostrarCatálogo, que muestra el catalogo completo.
//Adicionalmente, crear una función llamada buscarProducto que busque por el nombre del producto.
//nota, cuidado con el get porque devuelve undefined si no encuentra el producto.

const catalogo = new Map<string,Set<string>>();

function addProduct(category:string,product:string):boolean{
    if(!catalogo.has(category)){
        catalogo.set(category,new Set<string>());
    }
    catalogo.get(category)?.add(product);
    return true;
}

addProduct("Electrónica", "portátil HP");
addProduct("Electrónica", "portátil HP");
addProduct("Electrónica", "Mouse");
addProduct("Electrónica", "Teclado");
addProduct("Deportes","Raqueta de tenis");
addProduct("Deportes","Zapatillas Nike");

function mostrarCatálogo():void{
    console.log("-------- CATALOGO DISPONIBLE --------");
    //recorrer el catalogo y recorrer cada producto con flechas
    for(const[category,product] of catalogo){
        console.log(`💾 Categoria: ${category} -- Numero de productos: ${product.size}`);
        for(const prod of product){
            console.log(`-  ${prod}`);
        }
    }
}

mostrarCatálogo();

function searchProduct(nameProduct:string):string[]{
    const categoryFound:string[] = [];
    for(const[category,product] of catalogo){
        if(product.has(nameProduct)){
            categoryFound.push(category);
        }
    }
    return categoryFound;
}

console.log(`Las categorias del producto Teclado son: ${searchProduct("Teclado")}`);