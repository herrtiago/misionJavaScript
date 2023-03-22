import Persona from "./PersonaMision.js";
const tabla = document.getElementById("table");
const inputBusqueda = document.getElementById("busquedaNombre");
const btnRegistro = document.getElementById("btnRegistro");
const listaPersonas = JSON.parse(localStorage.getItem('listaPersonas')) || [];
cargarTabla()
console.log(listaPersonas);
function cargarTabla() {
    listaPersonas.forEach(i => {
        const personaTemp = new Persona(i.nombres, i.apellidos, i.area, i.usuario, i.edad, i.direccion, i.email);
        const fila = document.createElement("tr");
        const casillaArea = document.createElement("td");
        const casillaNombres = document.createElement("td");
        const casillaEdad = document.createElement("td");
        const casillaUsuario = document.createElement("td");
        const casillaEmail = document.createElement("td");

        casillaArea.innerText = personaTemp.area;
        casillaNombres.innerText = personaTemp.nombreCompleto();
        casillaEdad.innerText = personaTemp.edad;
        casillaUsuario.innerText = personaTemp.usuario;
        casillaEmail.innerText = personaTemp.email;

        fila.append(casillaArea);
        fila.append(casillaNombres);
        fila.append(casillaUsuario);
        fila.append(casillaEmail);
        fila.append(casillaEdad);
        tabla.append(fila);
    });
}

btnRegistro.addEventListener("click", () => {
    location.href = "./registro.html";
});

