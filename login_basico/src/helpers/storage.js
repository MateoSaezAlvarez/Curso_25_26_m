import { ENV } from "../config/env";

//Crear una función initialStorage que reciba un array de usuarios y los guarde en el localStorage
/**
 * 
 * @param {*} arrayUsers 
 */
export function initialStorage(arrayUsers){
    localStorage.setItem(ENV.VITE_STORAGE_KEY, JSON.stringify(arrayUsers));
    console.info(`${ENV.VITE_APP_TITLE}: Usuarios guardados correctamente: `);
}

//Crear una funcion llamada getUsuarios() que traiga todos los usuarios
/**
 * 
 * @returns 
 */
export const getUsers = () => {
    return JSON.parse(localStorage.getItem(ENV.VITE_STORAGE_KEY)) || [];
}

//Crear una función llamada setUsuario(user) y lo guarde en el localStorage en la key del .env
/**
 * 
 * @param {*} user 
 */
export const setUsers = (user) =>{
    //const users = getUsers();
    //users.push(user);
    //initialStorage(users);
    initialStorage([...getUsers(),user]); //te devuelve el array nuevo. Es un push más eficiente
}