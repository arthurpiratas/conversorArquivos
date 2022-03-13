const Reader = require("./Manipuladores/Reader.js")
const Processor = require("./ProcessadorDados/Processor.js")
const Table = require("./ProcessadorDados/table")
const HtmlParser = require("./Conversores/HtmlParser")
const Writer = require("./Manipuladores/Writer")
const PDFWriter = require("./Conversores/PDFWriter")

const leitor = new Reader()
const escritor = new Writer()

leitor.Read("./Tabela/usuarios.csv")


async function main(){
   
    let dados =  await leitor.Read("./Tabela/usuarios.csv")
    
    let dadosProcessados = Processor.Process(dados)

    let usuarios = new Table(dadosProcessados)


    let html = await HtmlParser.Parse(usuarios)

    escritor.Write(Date.now() + "TabelaUsuarios.html", html)
    PDFWriter.WritePDF(Date.now() + "TabelaUsuarios.pdf", html)

    //console.log(html)

    //console.log(usuarios.header)

    //console.log(usuarios.columnCount)

   //console.log(dados)
}

main()