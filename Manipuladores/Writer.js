const fs = require("fs")
const util = require("util")



class Writer{

    constructor(){
        this.writer = util.promisify(fs.writeFile)
        // readFilme é uma função que não retorna uma promisse, devido a isso, para que ela retorne uma promisse, é necssário utilizar o promisify
    }

    async Write(filename, data){
        try{
            await this.writer(filename, data)
            return true
        }catch(err){
            return false
        }
         
    }

}


module.exports = Writer