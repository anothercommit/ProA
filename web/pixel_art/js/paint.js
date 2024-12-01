const url = new URLSearchParams(window.location.search);
const dibujoElegido = url.get("img");

const Dibujos = {
  Banana: {
    // Plegar `lienzo` por favor
    lienzo: [
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#5d4037",
      "#5d4037",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#ffd600",
      "#5d4037",
      "#00b8d4",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#ffd600",
      "#ffd600",
      "#ffeb3b",
      "#ffeb3b",
      "#00b8d4",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#ffd600",
      "#ffd600",
      "#ffeb3b",
      "#ffeb3b",
      "#ffeb3b",
      "#00b8d4",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#ffd600",
      "#ffd600",
      "#ffeb3b",
      "#ffeb3b",
      "#ffeb3b",
      "#00b8d4",
      "#00b8d4",
      "#00e5ff",
      "#00e5ff",
      "#ffd600",
      "#ffd600",
      "#ffeb3b",
      "#ffeb3b",
      "#ffeb3b",
      "#ffeb3b",
      "#00b8d4",
      "#00e5ff",
      "#00e5ff",
      "#5d4037",
      "#ffeb3b",
      "#ffeb3b",
      "#ffeb3b",
      "#ffeb3b",
      "#ffeb3b",
      "#00b8d4",
      "#00b8d4",
      "#00e5ff",
      "#00e5ff",
      "#795548",
      "#ffeb3b",
      "#ffeb3b",
      "#ffeb3b",
      "#00b8d4",
      "#00b8d4",
      "#00b8d4",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00b8d4",
      "#00b8d4",
      "#00b8d4",
      "#00b8d4",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
      "#00e5ff",
    ],
    paleta: ["#ffeb3b", "#ffd600", "#00e5ff", "#00b8d4", "#795548", "#5d4037"],
  },
  Mario: {
    lienzo: [
      "#00bcd4",
      "#00bcd4",
      "#d50000",
      "#d50000",
      "#d50000",
      "#d50000",
      "#d50000",
      "#00bcd4",
      "#00bcd4",
      "#00bcd4",
      "#00bcd4",
      "#d50000",
      "#d50000",
      "#d50000",
      "#d50000",
      "#d50000",
      "#d50000",
      "#d50000",
      "#d50000",
      "#d50000",
      "#00bcd4",
      "#000000",
      "#000000",
      "#000000",
      "#ffe082",
      "#ffe082",
      "#000000",
      "#ffe082",
      "#00bcd4",
      "#00bcd4",
      "#000000",
      "#ffe082",
      "#000000",
      "#ffe082",
      "#ffe082",
      "#ffe082",
      "#000000",
      "#ffe082",
      "#ffe082",
      "#ffe082",
      "#000000",
      "#ffe082",
      "#000000",
      "#000000",
      "#ffe082",
      "#ffe082",
      "#ffe082",
      "#000000",
      "#ffe082",
      "#ffe082",
      "#000000",
      "#000000",
      "#ffe082",
      "#ffe082",
      "#ffe082",
      "#ffe082",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#00bcd4",
      "#00bcd4",
      "#ffe082",
      "#ffe082",
      "#ffe082",
      "#ffe082",
      "#ffe082",
      "#ffe082",
      "#ffe082",
      "#00bcd4",
      "#00bcd4",
      "#d50000",
      "#d50000",
      "#3f51b5",
      "#d50000",
      "#d50000",
      "#d50000",
      "#00bcd4",
      "#00bcd4",
      "#00bcd4",
      "#d50000",
      "#d50000",
      "#d50000",
      "#3f51b5",
      "#d50000",
      "#d50000",
      "#3f51b5",
      "#d50000",
      "#d50000",
      "#d50000",
      "#d50000",
      "#d50000",
      "#d50000",
      "#3f51b5",
      "#3f51b5",
      "#3f51b5",
      "#3f51b5",
      "#d50000",
      "#d50000",
      "#d50000",
    ],
    paleta: ["#3f51b5", "#d50000", "#ffe082", "#000000", "#00bcd4"],
  },
};

const LIENZO = Dibujos[dibujoElegido].lienzo;
const PALETA = Dibujos[dibujoElegido].paleta;

let lienzoUsuario = new Array(100).fill("white");
let color_seleccionado = "black";

crearLienzo();
crearDibujo(LIENZO);
crearColores(PALETA);

const mostrar_grilla = document.getElementById("checkbox-grilla");
const casillas = document.querySelectorAll(".item");

mostrar_grilla.addEventListener("change", () =>
  this.checked
    ? casillas.forEach((i) => i.classList.add("mostrar-grilla"))
    : casillas.forEach((i) => i.classList.remove("mostrar-grilla")),
);

function crearLienzo() {
  const container = document.getElementById("lienzo-usuario");

  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");

    div.className = "item";
    div.id = i;

    div.addEventListener("click", () => {
      pintar(div, color_seleccionado);
      comparar();
    });

    container.appendChild(div);
  }
}

function crearDibujo(dibujo) {
  const container = document.getElementById("lienzo-original");

  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");

    div.style.backgroundColor = dibujo[i];
    container.appendChild(div);
  }
}

function crearColores(paleta) {
  const container = document.getElementById("container-colores");

  paleta.forEach((color) => {
    const div = document.createElement("div");

    div.className = "color";
    div.style.backgroundColor = color;
    container.appendChild(div);

    div.addEventListener("click", () => {
      color_seleccionado = color;
    });
  });
}

function pintar(casilla, colorNuevo) {
  const colorViejo = casilla.style.backgroundColor;

  if (colorViejo != colorNuevo) {
    casilla.style.backgroundColor = colorNuevo;
    lienzoUsuario[Number(casilla.id)] = colorNuevo;

    console.log(lienzoUsuario);
  }
}

function borrarTodo() {
  const casillas = document.querySelectorAll(".item");

  casillas.forEach((item, index) => {
    item.style.backgroundColor = "white";
    lienzoUsuario[index] = "white";
  });
}

function comparar() {
  if (JSON.stringify(lienzoUsuario) === JSON.stringify(LIENZO)) {
    alert("Buena esa!\nAhora podés volver al inicio y elegir otro dibujo.");

    crearCookie(dibujoElegido, dibujoElegido);
  }
}

function crearCookie(nombre, valor) {
  document.cookie = `${nombre}=${encodeURIComponent(valor)}; path=/`;
}
