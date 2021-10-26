const fs = require("fs")
const { bd } = require("../constants/generalConst")

let path = `./db/${bd.name}.${bd.extension}`;

saveData = async (data) =>{
    try{
        fs.writeFileSync(path, JSON.stringify(data))
    }
    catch(err){
        throw err;
    }
}

readData = () =>{
    if(!fs.existsSync(path))
        return null;
    const data = fs.readFileSync(path,{encoding: "utf-8"});
    return JSON.parse(data);
}

module.exports = {
    saveData,
    readData
}