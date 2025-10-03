/**
 * 
 * @param {Object} productos - Objeto Data 
 * @returns {Object} Object Products - Objeto con información extraída
 */
export const extraerData = (productos)=>{
    const {
        nombre,
        fabricante:{
            nombre:nombreFabricante,
            contacto //si no hay llaves, significa que coge todo lo que hay
        },
        especificaciones:{ ram }
    }=productos;
   
    return {
        nombre, //si la clave valor tienen el mismo nombre, se puede quitar el valor y va implícito en la clave
        nombreFabricante,
        contacto,
        ram
    };
};