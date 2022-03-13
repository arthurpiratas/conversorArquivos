var pdf = require("html-pdf")

class PDFWRriter{
    static  WritePDF(filename, html){
       return  pdf.create(html,{}).toFile(filename, (err) => {})
    }
}

module.exports = PDFWRriter