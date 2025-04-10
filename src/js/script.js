//Cadastro do vinho
nomeVinho = prompt("Insira o nome do vinho")
if (nomeVinho == ""){
    alert("Você precisa inserir o nome do vinho!")
    prompt("Insira o nome do vinho")
}
tipoVinho = prompt("Insira o tipo")
if(tipoVinho == ""){
    alert("Você precisa inserir o tipo do vinho!")
    tipoVinho = prompt("Insira o tipo")
}
safraVinho = parseInt(prompt("Insira a safra (ano)"))
if(safraVinho == ""){
    alert("Você precisa inserir a safra do vinho!")
    safraVinho = parseInt(prompt("Insira a safra (ano)"))
}
if (safraVinho >= 2020){
    console.log("É um vinho jovem")
}
else if (safraVinho >=2015 && safraVinho <=2019){
    console.log("É um vinho amadurecido")
}
else{
    console.log("É um vinho antigo")
}
qtdEstoque = parseInt(prompt("Insira a quantidade no estoque"))
if(qtdEstoque == ""){
    alert("Você precisa inserir a quantidade no estoque!")
    qtdEstoque = parseInt(prompt("Insira a quantidade no estoque"))
}
if (qtdEstoque >5){
    alert("Estoque Baixo")
    console.log("Estoque Baixo")
}
console.log(`Nome do Vinho:${nomeVinho}\nSafra do Vinho:${`safraVinho`}\nQuantidade em estoque:${qtdEstoque}`)