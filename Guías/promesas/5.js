const doblarNumero = (n) =>
    new Promise((res, rej) =>
        setTimeout(() => (n > 0 ? res(n * 2) : rej("Número no válido")), 1000),
    );

doblarNumero(-1).catch((err) => console.log(err));
