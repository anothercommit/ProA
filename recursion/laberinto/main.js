const tamaño = 15; // tamaño del laberinto
let maze = Array(tamaño);
for (let i = 0; i < tamaño; i++) {
	maze[i] = Array(tamaño).fill("#");
}

crearLaberinto();

// `crearLaberinto()` no pone ni S ni G.
maze[1][1] = "S";
maze[tamaño - 2][tamaño - 2] = "G";

resolver(1, 1);
maze[1][1] = "S"; // Pongo el S de nuevo porque `resolver()` lo sobre escribe
mostrarLaberinto(maze);

document.getElementById(
	"aclaracion"
).innerHTML = `El tamaño por defecto del laberinto es de ${tamaño} * ${tamaño}. Lo puede cambiar en la primera variable global.`;

function resolver(y, x) {
	if (y >= maze.length || y < 0) return false;
	if (x >= maze[y].length || x < 0) return false;
	if (maze[y][x] === "G") return true;
	if (maze[y][x] !== "." && maze[y][x] !== "S") return false;

	maze[y][x] = "+";

	if (resolver(y - 1, x) === true) return true;
	if (resolver(y, x - 1) === true) return true;
	if (resolver(y + 1, x) === true) return true;
	if (resolver(y, x + 1) === true) return true;

	maze[y][x] = "-";
	return false;
}

function encontrarStart(laberinto) {
	for (let y = 0; y < laberinto.length; y++) {
		for (let x = 0; x < laberinto[y].length; x++) {
			if (laberinto[y][x] === "S")
				return {
					y: y,
					x: x,
				};
		}
	}
}

function crearLaberinto(y = 1, x = 1, midY = 1, midX = 1) {
	if (y >= maze.length || y < 0) return;
	if (x >= maze[y].length || x < 0) return;
	if (maze[y][x] === ".") {
		if (Math.floor(Math.random() * 5) == 4) {
			maze[midY][midX] = ".";
			return;
		} else return;
	}

	maze[y][x] = ".";
	maze[midY][midX] = ".";

	let direcciones = [
		{ y: y - 2, x: x, midY: y - 1, midX: x }, //arriba
		{ y: y, x: x + 2, midY: y, midX: x + 1 }, //derecha
		{ y: y + 2, x: x, midY: y + 1, midX: x }, //abajo
		{ y: y, x: x - 2, midY: y, midX: x - 1 }, //izquierda
	];

	while (direcciones.length > 0) {
		const index = Math.floor(Math.random() * direcciones.length);
		let direccion = direcciones[index];

		crearLaberinto(
			direccion.y,
			direccion.x,
			direccion.midY,
			direccion.midX
		);

		direcciones.splice(index, 1);
	}

	return;
}

function mostrarLaberinto(laberinto) {
	const container = document.getElementById("laberinto");
	container.style.gridTemplateColumns = `repeat(${laberinto[0].length}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${laberinto.length}, 1fr)`;

	for (let y = 0, lengthY = laberinto.length; y < lengthY; y++) {
		for (let x = 0, lengthX = laberinto[y].length; x < lengthX; x++) {
			const div = document.createElement("div");

			div.id = `${y},${x}`;
			// div.innerHTML = laberinto[y][x];
			switch (laberinto[y][x]) {
				case "#":
					div.style.backgroundColor = "black";
					break;
				case ".":
					div.style.backgroundColor = "grey";
					break;
				case "+":
					div.style.backgroundColor = "green";
					break;
				case "-":
					div.style.backgroundColor = "brown";
					break;
				case "S":
					div.style.backgroundColor = "blue";
					div.innerHTML = "S";

					break;
				case "G":
					div.style.backgroundColor = "yellow";
					div.style.color = "black";
					div.innerHTML = "G";

					break;
			}
			container.appendChild(div);
		}
	}
}
