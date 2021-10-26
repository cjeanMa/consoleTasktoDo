const inquirer = require("inquirer");


const question = [
    {
        type: 'list',
        name: 'option',
        message: 'Que deseas hacer?',
        choices: [
            {
                value: "1",
                name: "1. Crear Tarea"
            },
            {
                value: "2",
                name: "2. Listar Tarea"
            },
            {
                value: "3",
                name: "3. Listar tareas completadas"
            },
            {
                value: "4",
                name: "4. Listar tareas Pendientes"
            },
            {
                value: "5",
                name: "5. Completar tarea(s)"
            },
            {
                value: "6",
                name: "6. Borrar Tarea"
            }
            ,
            {
                value: "0",
                name: "0. Salir"
            }
        ]
    }
]

const inquirerMenu = async() =>{
    console.clear()
    console.log("==========================");
    console.log("MENU");
    console.log("==========================");

    let { option } = await inquirer.prompt(question);
    return option;
}

const pause = async() =>{
    console.log("\n");
    return await inquirer.prompt([{type:"input", message:"Press Enter to continue...", name: "pause"}])
}

const readInput = async(message) =>{
    const question = [
        {
            type: "input",
            name: "description",
            message,
            validate(value){
                if (value.length === 0){
                    return "Ingrese un valor valido."
                }
                return true;
            }
        }
    ]
    const {description} = await inquirer.prompt(question);
    return description;
}

const tasksToDelete = async(arrList) =>{

    let choices = arrList.map(el => {
        return {
            value: el.id,
            name: el.desc
        }
    })

    choices.unshift({
        value: "0",
        name: "Cancelar"
    })

    let options = [{
        type: "list",
        message: "Que tarea deseas eliminar?",
        name: "id",
        choices
    }]

    let { id } = await inquirer.prompt(options);
    return id;
} 

const confirmation = async(msg) =>{
    const question = [{
        type: "confirm",
        name: "ok",
        message: msg
    }]
    const { ok } = await inquirer.prompt(question);
    return ok;
}

const listChecklist = async(arrList) =>{

    let choices = arrList.map(el => {
        return {
            value: el.id,
            name: el.desc,
            checked: el.finished ? true : false
        }
    })

    let options = [{
        type: "checkbox",
        message: "Seleccione",
        name: "ids",
        choices
    }]

    let { ids } = await inquirer.prompt(options);
    return ids;
} 

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    tasksToDelete,
    confirmation,
    listChecklist
}