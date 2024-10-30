import {usuarios} from "/model/ModelUsers.js"
export function buscarUsuario(){
    let respuesta = usuarios.some(usuario => {
        username = document.querySelector("#usuario").value
        password = document.querySelector("#contrasena").value

        if(username === usuario.usuario && password === usuario.contrasena){
            return true
        }else{
            return false
        }
    })
    return respuesta
}