import uuid from 'uuid';
import bcrypt from 'bcryptjs';

/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @param {Map} usersMap 
 */
export const registrarUsuario = (username, password, usersMap) => {
    if (!username || !password) {
        console.error("El nombre de usuario y la contraseña no pueden estar vacíos");
        return false;
    }

    if (usersMap.has(username)) {
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

    usersMap.set(username, newUser);
    localStorage.setItem('users', JSON.stringify(Array.from(usersMap.entries())));
    console.info("Usuario registrado con éxito");
    return true;
};

export const loginUsuario = (username, password, usersMap) => {
    const user = usersMap.get(username);
    if (!user) {
        console.error("El usuario no existe");
        return false;
    }

    if (!bcrypt.compareSync(password, user.password)) {
        console.error("Contraseña incorrecta");
        return false;
    }

    console.info("Usuario logueado con éxito");
    return true;
};

export const cambiarPassword = (username, passwordActual, passwordNueva, usersMap) => {
    const user = usersMap.get(username);
    if (!user) {
        console.error("El usuario no existe");
        return false;
    }

    if (!bcrypt.compareSync(passwordActual, user.password)) {
        console.error("Contraseña actual incorrecta");
        return false;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(passwordNueva, salt);
    user.password = hashedPassword;
    localStorage.setItem('users', JSON.stringify(Array.from(usersMap.entries())));
    console.info("Contraseña cambiada con éxito");
    return true;
};