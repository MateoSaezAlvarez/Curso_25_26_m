/*
GESTION BANCARIA REVOLUT

Se pretende llevar la gestion de un pequeño sistema bancario en JavaScript.
Se pide para ello;
1.- Crear una cuenta con un titular (string) y un saldo (number).
2.- Depositar dinero en la cuenta.
3.- Retirar dinero de la cuenta (siempre que tenga saldo).
4.- Consultar el saldo de la cuenta.
5.- Transferir dinero entre dos cuentas, validando si hay saldo suficiente.
6.- Mantener un listado de cuentas y buscar cuentas por titular.

Cuando creemos una cuenta, se debe generar un numero de cuenta de 24 digitos de forma aleatoria.
Documentar funciones.
Crear la funcion test que pruebe todas las funciones creadas.
*/

let cuentas = [];
// generador de numero de cuenta
function generarNumeroCuenta() {
    let numeroCuenta = '';
    for (let i = 0; i < 24; i++) {
        numeroCuenta += Math.floor(Math.random() * 10);
    }
    return numeroCuenta;
}

function crearCuenta(titular, saldo) {
    const cuenta = {
        numeroCuenta: generarNumeroCuenta(),
        titular: titular,
        saldo: saldo,
    };
    cuentas.push(cuenta);
    return cuenta;
}

function depositarDinero(numeroCuenta, cantidad) {
    const cuenta = cuentas.find(c => c.numeroCuenta === numeroCuenta);
    if (cuenta) {
        cuenta.saldo += cantidad;
        return cuenta.saldo;
    }
    return null;
}

function retirarDinero(numeroCuenta, cantidad) {
    const cuenta = cuentas.find(c => c.numeroCuenta === numeroCuenta);
    if (cuenta && cuenta.saldo >= cantidad) {
        cuenta.saldo -= cantidad;
        return cuenta.saldo;
    }
}

function consultarSaldo(numeroCuenta) {
    const cuenta = cuentas.find(c => c.numeroCuenta === numeroCuenta);
    return cuenta ? cuenta.saldo : null;
}

function transferirDinero(numeroCuentaOrigen, numeroCuentaDestino, cantidad) {
    const cuentaOrigen = cuentas.find(c => c.numeroCuenta === numeroCuentaOrigen);
    const cuentaDestino = cuentas.find(c => c.numeroCuenta === numeroCuentaDestino);
    if (cuentaOrigen && cuentaDestino && cuentaOrigen.saldo >= cantidad) {
        cuentaOrigen.saldo -= cantidad;
        cuentaDestino.saldo += cantidad;
        return true;
    }
}