require("colors");

const showMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log("==========================");
        console.log("MENU".green);
        console.log("==========================");

        console.log("1. Crear Tarea");
        console.log("2. Listar Tareas");
        console.log("3. Listar tareas completadas");
        console.log("4. Listar tareas pendientes");
        console.log("5. Completar tareas(s)");
        console.log("6. Borrar tarea");
        console.log("0. Salir\n");

        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    })

}

const pause = () => {
    return new Promise(resolve => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('\nPresione Enter para continuar\n', (opt) => {
            readline.close();
            resolve();
        })
    })

}


module.exports = {
    showMenu,
    pause
}