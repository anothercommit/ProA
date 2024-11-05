function consulta(dato) {
    return new Promise((res) => {
        switch (dato) {
            case "usuario":
                res({ usuario: "joaco" });
                break;
            case "post":
                res({ post: "titulo del post" });
                break;
            case "comentario":
                res({ comentario: "esto es un comentario" });
                break;
        }
    });
}

Promise.all([
    consulta("usuario"),
    consulta("post"),
    consulta("comentario"),
]).then((values) => console.log(values));
