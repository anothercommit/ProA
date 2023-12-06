"use strict";

const slider = document.getElementById("cantidad");
const labelCantidad = document.getElementById("labelCantidad");
const inputGuess = document.getElementById("guess");
const textoPuntos = document.getElementById("puntos");
const textoPuntajeTotal = document.getElementById("puntajeTotal");
const buttonGrid = document.getElementById("cambiarGrid");
const buttonAdivinar = document.getElementById("submitGuess");

const imagenes = ["cocodrilo", "gato", "morty", "zorro"];
let imagenActual = imagenes[Math.floor(Math.random() * imagenes.length)];

let puntos = 50;
let puntajeTotal = 0;
let cantidad = slider.value;
// cantidad = 0; // Para que ande fluido durante las pruebas

textoPuntos.innerText = `Puntos: ${puntos}`;
textoPuntajeTotal.innerText = `Puntaje total: ${puntajeTotal}`;
labelCantidad.innerText = slider.value;

const container = document.getElementById("container");
container.style.backgroundImage = `url(./img/${imagenActual}.jpg)`;

crearGrilla();

buttonAdivinar.onclick = () => {
    if (adivinar()) {
        alert("¡Correcto! +" + puntos + " puntos");
        siguienteImagen();
    } else {
        alert("Incorrecto. Siguiente imagen");
        siguienteImagen();
    }
};

slider.addEventListener("input", () => {
    labelCantidad.innerHTML = slider.value;
    cantidad = slider.value;
});

buttonGrid.onclick = () => {
    container.querySelectorAll("*").forEach((child) => child.remove());
    puntos = 50;
    textoPuntos.innerText = "Puntaje: " + puntos.toFixed(1);
    crearGrilla();
};

function crearGrilla() {
    container.querySelectorAll("*").forEach((child) => child.remove());

    container.style.gridTemplateColumns = `repeat(${cantidad}, ${cantidad}fr)`;

    const cantidadY = cantidad / 2;
    container.style.gridTemplateRows = `repeat(${cantidadY}, ${cantidadY}fr)`;

    for (let i = 0, total = cantidad * cantidadY; i < total; i++) {
        const div = document.createElement("div");
        div.className = "grid";
        div.style.backdropFilter = `blur(15px)`;

        div.addEventListener("click", () => {
            removeBlur(div);
            if (puntos > 0) puntos -= 50 / cantidad;
            else puntos = 0;
            textoPuntos.innerText = "Puntaje: " + puntos.toFixed(1);
        });

        container.appendChild(div);
    }
}

function removeBlur(el) {
    el.style.backdropFilter = "blur(0)";
}

function adivinar() {
    if (inputGuess.value.toLowerCase() == imagenActual) return true;
    else return false;
}

function siguienteImagen() {
    puntajeTotal += puntos;
    textoPuntajeTotal.innerText = "Puntaje total: " + puntajeTotal.toFixed(1);
    puntos = 50;
    textoPuntos.innerText = puntos;

    let nuevaImagen = Math.floor(Math.random() * imagenes.length);

    while (imagenActual == imagenes[nuevaImagen])
        nuevaImagen = Math.floor(Math.random() * imagenes.length);

    imagenActual = imagenes[nuevaImagen];

    container.style.backgroundImage = `url(./img/${imagenActual}.jpg)`;
    crearGrilla();
}
