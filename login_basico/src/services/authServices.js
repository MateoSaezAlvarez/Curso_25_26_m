 //crear funcion que valide que username y password son correctos usando estas restricciones. 
//No pueden estar vacías, password > 8 caracteres, username y password están en el localStorage
//La funcion devuelve true/false

import { ENV } from "../config/env";
import { getUsers } from "../helpers/storage";
import  bcrypt  from "bcryptjs";

export default function validarCredenciales(username,password){
    //existe username y password
    //password tiene longitud mayor que 8
    //existe username y password en localStorage
    //nota: siempre, SIEMPRE, trimear la data de los formularios

    if(!username.trim() || !password.trim() || password.length < 3 ) return false;

    const users= getUsers();
        const user = users.find((user)=> user.username === username )
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const ok = bcrypt.compareSync(user.passwordhash, hash); // true
        
        return ok;
}       