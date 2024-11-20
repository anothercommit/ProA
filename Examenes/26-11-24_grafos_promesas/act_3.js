const delay = (time) => new Promise((res) => setTimeout(() => res(), time));

delay(2000).then(() => {
    console.log("Primera espera completada");

    delay(4000).then(() => {
        console.log("Segunda espera completada");

        delay(6000).then(() => {
            console.log("Tercera espera completada");
        });
    });
});
