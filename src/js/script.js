//Cadastro do vinho
nomeVinho = prompt("Insira o nome do vinho")
if (nomeVinho == "" || nomeVinho == null){
    alert("Você precisa inserir o nome do vinho!")
    nomeVinho = prompt("Insira o nome do vinho")
}

tipoVinho = prompt("Insira o tipo")
if(tipoVinho == "" || tipoVinho == null){
    alert("Você precisa inserir o tipo do vinho!")
    tipoVinho = prompt("Insira o tipo")
}

safraVinhoInput = prompt("Insira a safra (ano)")
if(safraVinhoInput == "" || safraVinhoInput == null){
    alert("Você precisa inserir a safra do vinho!")
    safraVinhoInput = prompt("Insira a safra (ano)")
}
safraVinho = parseInt(safraVinhoInput)

qtdEstoqueInput = prompt("Insira a quantidade no estoque")
if(qtdEstoqueInput == "" || qtdEstoqueInput == null){
    alert("Você precisa inserir a quantidade no estoque!")
    qtdEstoqueInput = prompt("Insira a quantidade no estoque")
}
qtdEstoque = parseInt(qtdEstoqueInput)

//Classificando a safra do vinho
if (safraVinho >= 2020){
    classificacao = "É um vinho jovem"
}
else if (safraVinho >= 2015 && safraVinho <= 2019){
    classificacao = "É um vinho amadurecido"
}
else{
    classificacao = "É um vinho antigo"
}


//Verificando se a quantidade no estoque está baixa ou não
if (qtdEstoque < 5){
    alert("Nova mensagem do sistema disponível, cheque o console para ver.")
    console.log("Estoque Baixo")
}

//Exibição de todas as informações do vinho
alert("Nova mensagem do sistema disponível, cheque o console para ver.")
console.log(`Nome do Vinho: ${nomeVinho}\nTipo do vinho: ${tipoVinho}\nSafra do Vinho: ${safraVinho}\nClassificação da safra: ${classificacao}\nQuantidade em estoque: ${qtdEstoque}`)

