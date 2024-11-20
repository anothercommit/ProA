const validateNumber = (num) =>
    new Promise((res, rej) =>
        num > 5
            ? res(`Numero aceptado: ${num}`)
            : rej(`Numero rechazado: ${num}`),
    );

validateNumber(6).then((res) => console.log(res));
validateNumber(5).catch((err) => console.log(err));
validateNumber(2).catch((err) => console.log(err));
