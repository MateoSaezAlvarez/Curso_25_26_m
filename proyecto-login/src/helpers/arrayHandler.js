import uuid from 'uuid';
import bcrypt from 'bcryptjs';


/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @param {Array} usersArray 
 */
export const registrarUsuario = (username, password, usersArray) => {
    //Creo un usuario nuevo al array de usuarios y que se vaya guardando en localStorage, asignando un id unico y hash a la contraseña. 
    // También debe haber comprobaciones para que no se repitan usuarios y que los campos no estén vacíos.
    if(!username || !password) {
        console.error("El nombre de usuario y la contraseña no pueden estar vacíos");
        return false;
    }
    if(usersArray.some(user => user.username === username)) {
        console.error("El nombre de usuario ya existe");
        return false;
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = {
        id: uuid.v4(),
        username,
        password: hashedPassword
    };
    usersArray.push(newUser);
    localStorage.setItem('users', JSON.stringify(usersArray));
    console.info("Usuario registrado con éxito");
    return true;
}

/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @param {Array} usersArray 
 * @returns 
 */
export const loginUsuario = (username, password, usersArray) => {
    //compruebo que el usuario existe y que la contraseña es correcta y uso localstorage
    const user = usersArray.find(user => user.username === username);
    if(!user) {
        console.error("El usuario no existe");
        return false;
    }
    if(!bcrypt.compareSync(password, user.password)) {
        console.error("Contraseña incorrecta");
        return false;
    }
    console.info("Usuario logueado con éxito");
    return true;
}

export const cambiarPassword = (username, passwordActual, passwordNueva, usersArray) => {
    //cambio la contraseña de un usuario, comprobando que la contraseña actual es correcta y que el usuario existe
    const user = usersArray.find(user => user.username === username);
    if(!user) {
        console.error("El usuario no existe");
        return false;
    }
    if(!bcrypt.compareSync(passwordActual, user.password)) {
        console.error("Contraseña actual incorrecta");
        return false;
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(passwordNueva, salt);
    user.password = hashedPassword;
    localStorage.setItem('users', JSON.stringify(usersArray));
    console.info("Contraseña cambiada con éxito");
    return true;
}