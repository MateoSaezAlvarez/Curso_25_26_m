//importaciones 
const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;
import { dbTareas } from "./db/db";
import { buscarTareasNoCompletadas, rellenarLocalStorage } from "./helpers/tareas";


//inicio de la aplicacion


rellenarLocalStorage(dbTareas, TEXT_KEY);

//mostrarTareas();

console.table(buscarTareasNoCompletadas());