import {buscarUsuario} from "/controller/ControllerUsers.js"

let presionarBotonIniciarSesion = document.querySelector("#btnIniciar")
let intentos = 3
if (presionarBotonIniciarSesion){

    presionarBotonIniciarSesion.addEventListener("click", IniciarSesion)
    function IniciarSesion() {
        intentos--
        if (buscarUsuario()) {
            window.location.href = "/view/public/pages/home.html"

        } else {
            alert("Error de credenciales, te quedan: " +intentos+" intentos")
            if(intentos===0){
                window.location.href = "/view/public/pages/sistemacerrado.html"
            }
        }
    }
}
