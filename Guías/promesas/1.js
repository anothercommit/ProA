const myPromise = () =>
    new Promise((resolve) =>
        setTimeout(() => resolve("Promesa resuelta"), 2000),
    );

myPromise().then((res) => console.log(res));
