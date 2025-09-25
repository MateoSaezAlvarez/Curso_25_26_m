//crear un juego de un dado que usando una funcion llamada tirarDado permita tirar un dado de 6 caras con valores 1-6.
//crear una funcion llamada simular que pase como parametro el numero de tiradas y devuelva el numero que mas veces ha salido en las tiradas


//Declarar variables


function tirarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function simular(numTiradas){
    let contador = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < numTiradas; i++) {
        contador[tirarDado() - 1]++;
    
        for (let i = 0; i < 6; i++) {
            if (contador[i] > numtirada) {
                numtirada = contador[i];
                resultado = i + 1;
            }
        }
        return resultado;
    }
}
console.log(simular(12));