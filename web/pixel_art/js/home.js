let imagenes = document.querySelectorAll(".img");

imagenes.forEach((img) => {
  if (chequearCookie(img.id)) {
    img.style.border = "thick solid gold";
  }

  img.addEventListener(
    "click",
    () =>
      (window.location.href = `html/paint.html?img=${encodeURIComponent(img.id)}`),
  );
});

function chequearCookie(nombre) {
  const cookies = decodeURIComponent(document.cookie)
    .split(";")
    .map((e) => e.trim());

  for (const cookie of cookies) {
    console.log(cookie);
    if (cookie.startsWith(nombre)) return true;
  }

  return false;
}
