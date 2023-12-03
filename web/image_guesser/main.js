"use strict";

const slider = document.getElementById("cantidad");
const textoPuntos = document.getElementById("puntos");
const cambiarGrid = document.getElementById("cambiarGrid");

let puntos = 0;
let cantidad = slider.value;

const container = document.getElementById("container");

crearGrilla(container, cantidad);

textoPuntos.innerText = slider.value;

slider.addEventListener("input", () => {
    textoPuntos.innerText = slider.value;
    cantidad = slider.value;
});

cambiarGrid.onclick = () => {
    container.querySelectorAll("*").forEach((child) => child.remove());
    crearGrilla(container, cantidad);
};

function crearGrilla(container, cantidad) {
    container.style.gridTemplateColumns = `repeat(${cantidad}, ${cantidad}fr)`;
    const cantidadY = cantidad / 2;
    container.style.gridTemplateRows = `repeat(${cantidadY}, ${cantidadY}fr)`;

    for (let i = 0, total = cantidad * cantidadY; i < total; i++) {
        const div = document.createElement("div");
        div.className = "grid";
        div.style.backdropFilter = `blur(20px)`;

        div.addEventListener("click", () => {
            removeBlur(div);
        });

        container.appendChild(div);
    }
}

function removeBlur(el) {
    el.style.backdropFilter = "blur(0)";
}
