class table{

    constructor(array){
        this.header = array[0]
        array.shift()
        this.rows = array
    }

    get RowCount(){
        return this.rows.length
    }

    get columnCount(){
        return this.header.length
    }

}

module.exports = table