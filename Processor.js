class Processor{

    static Process(data){
        let linhas = data.split("\r\n")
        
        let lista = []

        linhas.forEach(row => {
            let array = row.split(",")
            lista.push(array)
        })

        return lista
    }

}

module.exports = Processor