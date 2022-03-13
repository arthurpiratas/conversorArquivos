# conversorArquivos
Conversor de arquivos csv em PDF, desenvolvido em node.js

Bibliotecas Utilizadas: 

* EJS
* html-pdf

Funcionamento da Aplicação: 

O Objetivo da Aplicação é converter um arquivo .CSV que contem uma tabela de usuários em PDF. 

Para realizara conversão precisamos ler o arquivo CSV, para realizar a leitura do arquivo CSV, foi utilizado a biblioteca fs e criado a classe "Reader.js", que tem como objetivo ler o arquivo no local informado. a função fs.readFile é assíncrona, não retorna uma promisse, devido a isso, utilizamos a biblioteca util para forçar a função a retornar uma promisse. 

Após leitura do arquivo, realizamos o processamento dos dados do arquivo, como trata-se de um arquivo csv separado por vírgulas, na classe Processor, realizamos a separação do csv por vírgula e incluimos cada linha do csv em uma linha de uma lista, por fim, retornamos essa lista para ser utilizada na criação do arquivo .html

No Arquivo "table.ejs", definimos como o HTML será gerado e no arquivo htmlParser chamamos o "table.ejs", passando as variavés de header e rows que constam na lista gerada pela Classe "Processor". 

Por fim, na classe APP.js, é realizada a criação da variavél html, que receberá a formatação html gerada pelo HtmlParser. Com isso, podemos realizar a conversão do HTML para PDF, chamando a função estática WritePDF. 


Caminho da conversão: CSV -> HTML -> PDF. 
