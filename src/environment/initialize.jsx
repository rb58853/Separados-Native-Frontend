import { GetUserInformationById } from "../api/information"
import users from "../data/users";
import { SetProfile } from "../store/profile/functions"

import { LoadUsers } from "../api/loadUsers";
import { SetUsers } from "../store/users/functions";
import env from "./environment"

function InitializeAppData() {
    console.log("Paso por la funcion InitializeAppData")
    LoadFromStorage();
    SetProfile(GetUserInformationById(env.profile));
    const usersJson = LoadUsers()
    SetUsers(usersJson)
}

function LoadFromStorage() {

    //El id del perfil
    //Los datos offline del perfil
    //Modo de la aplicacion (dark o light)
    //otros

    //Lo primero que se hace es cargar el environment con estos datos

    //Cargar el nombre del perfil y los datos del usuario, si hay datos guardados lo carga vacio, posteriormente se carga desde internet
    env.profile = env.profile //Aqui hay que cargar el profile desde el storage
    SetProfile(users[env.profile]); // Aqui hay que hacer set a to los datos desde el storage
}

export default InitializeAppData