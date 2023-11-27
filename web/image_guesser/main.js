for (x = 0, cantidad = 10; x < cantidad; x++) {
    const container = document.getElementById("container");

    const img = document.createElement("img");

    img.className = "imgGrid";
    img.id = i;
    img.style.border = "2px solid black";
    img.style.backgroundColor = "red";

    img.addEventListener("click", () => {
        console.log("me tocan");
    });

    container.appendChild(img);
}