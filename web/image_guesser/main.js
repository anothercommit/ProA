"use strict";

let cantidad = 8;
let pasosX = 800 / cantidad;
let pasosY = 400 / cantidad;


for (let i = 0, x = 0; i < cantidad; i++, x += pasosX) {
    for (let y = 400; y > 0; y -= pasosY) {
        console.log(y);
        const container = document.getElementById("container");

        const img = document.createElement("img");
        img.className = "imgGrid";
        img.src = "img/better_call_morty.jpg";
        img.style.clipPath = `inset(0px 0px ${y}px ${x}px)`;

        img.addEventListener("click", () => {
            removeBlur(img);
        });
        container.appendChild(img);
    }
}

function removeBlur(el) {
    el.style.filter = "blur(0px)";
}