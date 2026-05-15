const prompt = require('prompt-sync')();


console.log("                            SEJA BEM VINDO A CALCULADORA .JS!")
//const op = parseInt(prompt("Digite 1 para somar, 2 para subtrair, 3 para multiplicar e 4 para dividir!"))

//perguntar numeros
let n1 = parseInt(prompt("Digite o numero 1: "))
let n2 = parseInt(prompt("Digite o numero 2: "))

//funçao soma
function somarNumeros(n1,n2) {
    console.log(`Sua soma ${n1} + ${n2} resulta em ${n1+n2} `)
}

somarNumeros(n1,n2)

n1 = parseInt(prompt("Digite o numero 1: "))
n2 = parseInt(prompt("Digite o numero 2: "))

//funçao subtração
function subNumeros(n1,n2) {
    console.log(`Sua subtração ${n1} - ${n2} resulta em ${n1-n2} `)
}

subNumeros(n1,n2)

n1 = parseInt(prompt("Digite o numero 1: "))
n2 = parseInt(prompt("Digite o numero 2: "))

//funçao multiplicação
function multNumeros(n1,n2) {
    console.log(`Sua multiplicação ${n1} * ${n2} resulta em ${n1*n2} `)
}

multNumeros(n1,n2)

n1 = parseInt(prompt("Digite o numero 1: "))
n2 = parseInt(prompt("Digite o numero 2: "))

//funçao divisão
function divNumeros(n1,n2) {
    console.log(`Sua divisão ${n1} / ${n2} resulta em ${n1/n2} `)
}

divNumeros(n1,n2)