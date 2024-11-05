function consulta(conexion) {
    return new Promise((res, rej) => {
        setTimeout(
            () =>
                conexion
                    ? res({ nombre: "n", edad: "1", email: "@" })
                    : rej("error de conexion"),
            3000,
        );
    });
}

consulta(true)
    .then((res) => console.log(res))
    .catch((res) => console.log(res));

consulta(false)
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
