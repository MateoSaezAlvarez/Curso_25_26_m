import { uid } from 'uid';
const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;

export const rellenarLocalStorage = (arrayTareas, tareas="Tareas") => {
    //Guardar en localStorage en la clave
    localStorage.setItem(tareas, JSON.stringify(arrayTareas));
}

//Crear una función mostrarTareas que pase como parametro una clave 
//y me pinte en consola las tareas que hay en esa clave. Se pintan con console.table y usar consola.info

/*export const mostrarTareas = (clave = "Tareas") => {
    console.info("Tareas en localStorage:");
    console.table(JSON.parse(localStorage.getItem(clave)));
}
*/





//getTareas. Devuelve un array con todas las tareas almacenadas en localStorage. Si no hay tareas, devuelve un array vacío
const getTareas = ()=>{
    const dataSinParsear = localStorage.getItem(TEXT_KEY);
    const dataParseada = safeJSONParse(dataSinParsear);
    if(!Array.isArray(dataParseada)){
        console.error("Error en la data");
        return [];
    }
    return dataParseada;
}
//addTarea. Crea una nueva tarea con el nombre recibido por parametro, genera un id unico. 
// completada a false y la fecha de creacion a la actual. La añade a las tareas y actuliza el localStorage
export const addTarea = (nombreTarea) => {
    const nombre = String(nombreTarea ?? "").trim();
    try {
    const tareas = JSON.parse(localStorage.getItem("Tareas"));
    const nuevaTarea = {
        id: uid(2),
        nombre,
        fechaCreacion: new Date().toISOString(),
        completada: false
    }
    tareas.push(nuevaTarea);
    }
    catch (error) {
        console.error("Error al añadir la tarea");
    }
}

//saveTareas. Recibe un array de tareas y las guarda en localStorage, bajo la clave "Tareas" y serializando en json
//export const saveTareas = (tareas) => localStorage.setItem("Tareas", JSON.stringify(tareas));

export function saveTareas(arrayTareas=[]){
    try {
        if(!Array.isArray(arrayTareas)){
            throw new Error("El parametro no es un array");
        }
        //serializar: convertir a string /// deserializar: convertir a objeto
        const tareasJSON = JSON.stringify(arrayTareas);
        localStorage.setItem(TEXT_KEY, tareasJSON);
        console.info("💾Tareas guardadas en localStorage");
    } catch (error) {
        console.error("Error al guardar las tareas en localStorage");
    }
}

//deleteTarea. Recibe un id de tarea y elimina la tarea cuyo id coincida con el recibido. Actualiza el localStorage
export const deleteTarea = (id) => {
    const tareas = JSON.parse(localStorage.getItem("Tareas"));
    const tareasActualizadas = tareas.filter(tarea => tarea.id == id);
    saveTareas(tareasActualizadas);
}

const buscarTareasCompletadas = () => {
    if(localStorage.hasOwnProperty("Tareas")){
        returnJSON.parse(localStorage.getItem("Tareas"))
            .filter(tarea => tarea.completada);
    }
}

//buscarTareasNoCompletadas. Devuelve un nuevo array con las tareas que no están completadas, las que tienen completada a false
export const buscarTareasNoCompletadas = () => {
    if(localStorage.hasOwnProperty("Tareas"))
        return (JSON.parse(localStorage.getItem("Tareas"))
            .filter(tarea => !tarea.completada));
} //la tengo que exponer



const buscarTareaPorNombre = (nombre) => {
    if(localStorage.hasOwnProperty("Tareas")){
        return JSON.parse(localStorage.getItem("Tareas"))
            .filter(tarea => tarea.nombre.toLowerCase().includes(nombre.toLowerCase()));
    }
}

function safeJSONParse(text) {
    try {
        if (typeof text !== 'string') { 
            throw new Error(`La data ${text} no es un string`);
        };
        return JSON.parse(text);
    } catch (error) {
        throw new Error("Error al parsear JSON");
    }
}