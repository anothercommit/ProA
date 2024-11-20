const multiplyByThree = (n) =>
    new Promise((res) => setTimeout(() => res(n * 3), 2000));

const addFive = (n) => new Promise((res) => res(n + 5));

multiplyByThree(10).then((res) => addFive(res).then((res) => console.log(res)));
