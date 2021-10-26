//const { showMenu, pause} = require("./helpers/messages")
const { inquirerMenu, pause, readInput, tasksToDelete, confirmation, listChecklist } = require("./helpers/inquirer");
const Task = require("./models/task");
const Tasks = require("./models/tasks");
const { saveData, readData } = require("./helpers/handleArchive")
console.clear();

const main = async () => {
    let opt = "";
    const tasks = new Tasks();
    if (readData()) {
        tasks.tasksFromDb(readData());
    }
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case "1":
                const desc = await readInput("Descripcion: ");
                tasks.createTask(desc);
                console.log(desc)
                break;
            case "2":
                tasks.listAllTasks();
                break;
            case "3":
                tasks.listCompletes();
                break;
            case "4":
                tasks.listCompletes(false);
                break;
            case "5":
                let listTasks = await listChecklist(tasks.listArr);
                tasks.toogleTasks(listTasks);
                break;
            case "6":
                let id = await tasksToDelete(tasks.listArr);
                if (id !== "0") {
                    let ok = await confirmation("Estas seguro?")
                    if (ok) {
                        console.log(id);
                        tasks.deleteTask(id);
                    }
                }

                break;
            case "0":
                break;
        }

        saveData(tasks.listArr);

        if (opt !== "0") await pause();
    } while (opt !== "0")

}

main();