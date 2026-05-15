const prompt = require('prompt-sync')();

// array vazio
let filmes = []
let continuar = "Sim"

// repetição da pergunta até o úsuario parar.
    while(continuar == "sim" || continuar == "Sim"){
        filmes.push(prompt("Digite aqui o filme: "))
        continuar = prompt("Deseja adicionar outro filme? ")
    }

console.log(filmes)