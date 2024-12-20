import myAxios from "./myAxios.js";

export function getTasks() {
    return new Promise((resolve, reject) => {
        myAxios
            .get("")
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
}

export function postTask(id, title) {
    return new Promise((resolve, reject) => {
        myAxios
            .post("", { id: id, title: title, completed: false })
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
}

export function patchCompletedTask(id, completed) {
    return new Promise(() => myAxios.patch(`${id}`, { completed: !completed }));
}

export function patchTitleTask(id, newTitle) {
    return new Promise((resolve, reject) => {
        myAxios
            .patch(`${id}`, { title: newTitle })
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
}
