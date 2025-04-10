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
qtdEstoque = parseInt(prompt("Insira a quantidade no estoque"))
if(qtdEstoque == ""){
    alert("Você precisa inserir a quantidade no estoque!")
    qtdEstoque = parseInt(prompt("Insira a quantidade no estoque"))
}
