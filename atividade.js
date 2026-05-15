const prompt = require('prompt-sync')();

//Iniciando variaveis
let n1
let n2
let resultado
let peso
let altura
let imc
let dolares
let cotacao
let reais
let op = 9

//Inicio
function menu(){
    console.log("=================================================");
    console.log("|                CALCULADORA.JS                 |");
    console.log("=================================================");
    console.log("");
    console.log("-------------------------------------------------");
    console.log("| [1] Soma (+)                                  |");
    console.log("| [2] Subtração (-)                             |");
    console.log("| [3] Multiplicação (*)                         |");
    console.log("| [4] Divisão (/)                               |");
    console.log("| [5] Calcular IMC                              |");
    console.log("| [6] Dolar -> Real                             |");
    console.log("| [0] Sair                                      |");
    console.log("-------------------------------------------------");
    console.log("");
    op = parseInt(prompt("Selecione uma operação matemática: "));
}
menu()

function soma(n1,n2) {
    n1 = parseFloat(prompt("Digite o primeiro numero: "));
    n2 = parseFloat(prompt("Digite o segundo numero: "));
    resultado = (n1+n2).toFixed(2)
    console.log(`Sua soma entre ${n1} + ${n2} = ${resultado}`);
    op = 9;
    console.log("");
    console.log("");
    menu();
}

function sub(n1,n2) {
    n1 = parseFloat(prompt("Digite o primeiro numero: "));
    n2 = parseFloat(prompt("Digite o segundo numero: "));
    resultado = (n1-n2).toFixed(2)
    console.log(`Sua subtração entre ${n1} - ${n2} = ${resultado}`);
    op = 9;
    console.log("");
    console.log("");
    menu();
}

function mult(n1,n2) {
    n1 = parseFloat(prompt("Digite o primeiro numero: "));
    n2 = parseFloat(prompt("Digite o segundo numero: "));
    resultado = (n1*n2).toFixed(2)
    console.log(`Sua multiplicação entre ${n1} * ${n2} = ${resultado}`);
    op = 9;
    console.log("");
    console.log("");
    menu();
}

function div(n1,n2) {
    n1 = parseFloat(prompt("Digite o primeiro numero: "));
    n2 = parseFloat(prompt("Digite o segundo numero: "));
    resultado = (n1/n2).toFixed(2)
    console.log(`Sua multiplicação entre ${n1} / ${n2} = ${resultado}`);
    op = 9;
    console.log("");
    console.log("");
    menu();
}

function calculoIMC(peso, altura) {
    peso = parseFloat(prompt("Insira seu peso: "));
    altura = parseFloat(prompt("Insira sua altura (em metros): "));
    imc = (peso/(altura*altura))

    if(altura > 3 || altura < 0 || peso < 0 || peso > 635){
        console.log("");
        console.log("");
        console.log(`[ERRO] Algo foi digitado errado! Tente novamente`)
        calculoIMC()
    } else if(imc < 18.5){
        console.log("");
        console.log("");
        console.log(`Seu IMC é de ${imc}. Você está abaixo do peso normal! Tenha cuidado.`)
    } else if(imc >= 18.5 && imc <= 24.9){
        console.log("");
        console.log("");
        console.log(`Seu IMC é de ${imc}. Você está com peso normal! Mantenha-se saudável.`)
    } else if(imc >= 25 && imc <= 29.9){
        console.log("");
        console.log("");
        console.log(`Seu IMC é de ${imc}. Você está com excesso de peso, busque perder peso!`)
    } else if(imc >= 30 && imc <= 34.9){
        console.log("");
        console.log("");
        console.log(`Seu IMC é de ${imc}. Você está no nivel de obesidade classe I, busque perder peso!`)
    } else if(imc >= 35 && imc <= 39.9){
        console.log("");
        console.log("");
        console.log(`Seu IMC é de ${imc}. Você está no nivel de obesidade classe II, busque perder peso!`)
    } else if(imc > 40){
        console.log("");
        console.log("");
        console.log(`Seu IMC é de ${imc}. Você está com obesidade classe III, isto é muito perigoso! Tenha cuidado!`)
    }

    op = 9
    console.log("");
    console.log("");
    menu();
}

function conversaoDolar(peso, altura) {
    dolares = parseFloat(prompt("Insira seu quantos dolares você possui: "));
    cotacao = 5.07 
    reais = dolares * 5.07
    console.log("");
    console.log("");
    console.log(`Você possui R$${reais} convetidos na cotação de R$${cotacao} por dolar!`);
    op = 9
    console.log("");
    console.log("");
    menu();
}

    while (op != 0) {

        if (op == 1) {
            soma()
        } else if (op == 2){
            sub()
        } else if (op == 3){
            mult()
        } else if (op == 4){
            div()
        } else if (op == 5){
            calculoIMC()
        } else if (op == 6){
            conversaoDolar()
        } else {
            console.log("");
            console.log("");
            console.log("[ERRO] OPÇÃO INVALIDA... TENTE NOVAMENTE");
            console.log("");
            console.log("");
            op = 9;
            menu();
        }
    }