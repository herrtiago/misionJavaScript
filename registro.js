import Persona from "./PersonaMision.js";
const btnEnviar = document.getElementById("btnEnviar");
const listaPersonas = JSON.parse(localStorage.getItem('listaPersonas')) || [];

btnEnviar.addEventListener("click", () => {
    console.log("entra al boton!")
    const nuevaPersona = new Persona(inputNombres.value, inputApellidos.value, inputArea.value, inputUsuario.value, inputEdad.value, inputDireccion.value, inputEmail.value);
    listaPersonas.push(nuevaPersona);
    localStorage.setItem('listaPersonas', JSON.stringify(listaPersonas));
    if(ValidateEmail)
    location.href = "./index.html";
});

function ValidateEmail() {
    let input = inputEmail.value;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
        return true;
    } else {
        alert("Invalid email address!");
        return false;
    }
}


atras.addEventListener("click", () => {
    location.href = "./index.html";
}
);


