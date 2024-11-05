const mayorQueDiez = (num) =>
  new Promise((res, rej) =>
    num > 10 ? res(`${num}: Número válido`) : rej(`${num}: Número inválido`),
  );

mayorQueDiez(0)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

mayorQueDiez(20)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
