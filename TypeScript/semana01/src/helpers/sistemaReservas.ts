//crear un sistema de reservas en un restaurante.
//tiene un map con clave la fecha de la reserva con formato YYYY-MM-DD
//el valor es un set con los nombres de los clientes(DNI) que han reservado ese dia
//funciones: agregarReservas, cancelarReserva, mostrarReservas, estadísticas reservas por dia, reservas totales y media de reservas.


const reservas = new Map<string,Set<string>>();

const agregarReservas = (cliente:string):boolean =>{
    const fechaActual = new Date();
    const fechaFormateada = `${fechaActual.getFullYear()}-${fechaActual.getMonth() + 1}-${fechaActual.getDate()}`;
    if(!reservas.has(fechaFormateada)){
        reservas.set(fechaFormateada,new Set<string>());
        return false;
    }
    reservas.get(fechaFormateada)?.add(cliente);
    return true;
}


const cancelarReserva = (fecha:string,cliente:string) =>{
    if(reservas.has(fecha)){
        reservas.get(fecha)?.delete(cliente);
    }
}

const mostrarReservas = ():void =>{
    for(const[fecha,clientes] of reservas){
        console.log(`Fecha: ${fecha} - Clientes: ${Array.from(clientes)}`);
    }
}


const estadisticasReservas = ():void =>{
    //hay que tener las reservas hechas en un dia, las reservas totales y la media de las reservas hechas en un dia
    let totalReservas = 0;
    for(const[fecha,clientes] of reservas){
        totalReservas += clientes.size;
    }
    console.log(`Reservas totales: ${totalReservas}`);
    console.log(`Media de reservas por dia: ${totalReservas/reservas.size}`);

    let reservasDia = 0;
    for(const clientes of reservas.values()){
        reservasDia += clientes.size;
    }
    console.log(`Reservas hechas en un dia: ${reservasDia}`);
    }

    