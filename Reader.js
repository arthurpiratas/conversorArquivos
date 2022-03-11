const fs = require("fs")
const util = require("util")



class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile)
        // readFilme é uma função que não retorna uma promisse, devido a isso, para que ela retorne uma promisse, é necssário utilizar o promisify
    }

    async Read(filepath){
        try{
            return await this.reader(filepath, "utf8")
        }catch{
            return undefined
        }
        
    }

}


module.exports = Reader