const delay = (tiempo) =>
    new Promise((res) =>
        setTimeout(
            () => res(`Tiempo completado en ${tiempo / 1000} segs`),
            tiempo,
        ),
    );

delay(5000).then((res) => console.log(res));
delay(5000).then(() =>
    delay(3000).then(() => delay(2000).then((res) => console.log(res))),
);
