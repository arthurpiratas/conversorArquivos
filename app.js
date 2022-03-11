const Reader = require("./Reader")
const Processor = require("./Processor")
const Table = require("./table")

var leitor = new Reader()

leitor.Read("./usuarios.csv")


async function main(){
   
    let dados =  await leitor.Read("./usuarios.csv")
    
    let dadosProcessados = Processor.Process(dados)

    let usuarios = new Table(dadosProcessados)

    console.log(usuarios.header)

    console.log(usuarios.columnCount)

   //console.log(dados)
}

main()