import { DB } from "./db/db";
import { initialStorage } from "./helpers/storage";
import validarCredenciales from "./services/authServices";
import { renderLoginForm } from "./view/loginView";

export function initialApp(){
    //iniciamos guardando los usuarios en localStorage
    initialStorage(DB);

    //Pintamos/renderizamos mi formulario en app
    const app = document.getElementById("app");
    app.innerHTML = renderLoginForm();
    const form = document.querySelector("#loginForm")
    const message = document.querySelector("#message");
    //pongo un escuchador de eventos al formulario
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        //comprobar si username y password son correctos
        const { username, password } = Object.entries(new FormData(form));
        //crear funcion que valide que username y password son correctos usando estas restricciones. 
        //No pueden estar vacías, password > 3 caracteres, username y password están en el localStorage
        //La funcion devuelve true/false
        // const ok=validarCredenciales(username,password);
        //hay que hacer tambien un registrar usuario

        console.log(username, password);
        // message.innerHTML=ok 
        // ?`<span style="green"> Bienvenido ${username}</span>` 
        // : `<span style="red"> Credenciales erróneas </span>`;
        form.reset();
    ;
    })
}

//EJERCICIO
/*
mostrar en verde login correcto, en rojo login incorrecto. Debajo añadir otro formulario llamado register que permita 
registrarse con un usuario y un password hasheado y almacenarlo en el localStorage
*/