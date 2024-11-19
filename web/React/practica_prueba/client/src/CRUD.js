import myAxios from "./myAxios.js";

export function getTasks() {
    return new Promise((resolve, reject) => {
        myAxios
            .get("")
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
}

getTasks().then((res) => console.log(res));
