const Task = require("./task");

class Tasks {
    _list = {};

    constructor() {
        this._list = {}
    }

    get listArr() {
        return Object.keys(this._list).map(el => this._list[el])
    }

    tasksFromDb(arrList = []) {
        if (!arrList)
            return
        arrList.forEach(el => {
            this._list[el.id] = el
        })
    }

    createTask(desc = "") {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    listAllTasks = () => {
        this.listArr.forEach((el, i) => {
            console.log(`${i + 1}. ${el.desc} --> ${el.finished ? "Realizado" : "Aun no fue realizado"}`)
        })
    }
    listCompletes = (indicator = true) => {
        let i = 1;
        this.listArr.forEach((el) => {
            if (indicator) {
                if (el.finished) {
                    console.log(`${i}. ${el.desc} --> ${el.finished}`)
                    i++;
                }
            }
            else {
                if (!el.finished) {
                    console.log(`${i}. ${el.desc} --> Aun no fue realizado`)
                    i++;
                }
            }

        })
    }
    deleteTask = (id) => {
        return delete this._list[id];
    }
    toogleTasks = (listId = []) => {
        this.listArr.forEach(el => {
            if (listId.indexOf(el.id) === -1)
                this._list[el.id]["finished"] = null;
            else
                this._list[el.id]["finished"] = new Date().toLocaleDateString();
        })
    }
}

module.exports = Tasks;