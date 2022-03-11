const Reader = require("./Reader")
const Processor = require("./Processor")

var leitor = new Reader()

leitor.Read("./usuarios.csv")


async function main(){
   
    let dados =  await leitor.Read("./usuarios.csv")
    
    let dadosProcessados = Processor.Process(dados)

   //console.log(dados)
}

main()