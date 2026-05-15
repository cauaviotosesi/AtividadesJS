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
let nota1
let nota2
let nota3
let nota4
let media
let i
let m
let cm
let grausC
let grausF
let op = 11

//Inicio
function menu() {
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
    console.log("| [7] Média de notas                            |");
    console.log("| [8] Tabuada                                   |");
    console.log("| [9] Metros -> cm                              |");
    console.log("| [10] °C -> °F                                 |");
    console.log("| [0] Sair                                      |");
    console.log("-------------------------------------------------");
    console.log("");
    op = parseInt(prompt("Selecione uma operação matemática: "));
}
menu()

// soma
function soma(n1, n2) {
    n1 = parseFloat(prompt("Digite o primeiro numero: "));
    n2 = parseFloat(prompt("Digite o segundo numero: "));
    resultado = (n1 + n2).toFixed(2)
    console.log(`Sua soma entre ${n1} + ${n2} = ${resultado}`);
    op = 11;
    console.log("");
    console.log("");
    menu();
}

// subtração
function sub(n1, n2) {
    n1 = parseFloat(prompt("Digite o primeiro numero: "));
    n2 = parseFloat(prompt("Digite o segundo numero: "));
    resultado = (n1 - n2).toFixed(2)
    console.log(`Sua subtração entre ${n1} - ${n2} = ${resultado}`);
    op = 11;
    console.log("");
    console.log("");
    menu();
}

// multiplicação
function mult(n1, n2) {
    n1 = parseFloat(prompt("Digite o primeiro numero: "));
    n2 = parseFloat(prompt("Digite o segundo numero: "));
    resultado = (n1 * n2).toFixed(2)
    console.log(`Sua multiplicação entre ${n1} * ${n2} = ${resultado}`);
    op = 11;
    console.log("");
    console.log("");
    menu();
}

// divisão
function div(n1, n2) {
    n1 = parseFloat(prompt("Digite o primeiro numero: "));
    n2 = parseFloat(prompt("Digite o segundo numero: "));
    resultado = (n1 / n2).toFixed(2)
    console.log(`Sua multiplicação entre ${n1} / ${n2} = ${resultado}`);
    op = 11;
    console.log("");
    console.log("");
    menu();
}

// calculo imc
function calculoIMC(peso, altura) {
    peso = parseFloat(prompt("Insira seu peso: "));
    altura = parseFloat(prompt("Insira sua altura (em metros): "));
    imc = (peso / (altura * altura))

    if (altura > 3 || altura < 0 || peso < 0 || peso > 635) {
        console.log("");
        console.log("");
        console.log(`[ERRO] Algo foi digitado errado! Tente novamente`);
        calculoIMC();
    } else if (imc < 18.5) {
        console.log("");
        console.log("");
        console.log(`Seu IMC é de ${imc}. Você está abaixo do peso normal! Tenha cuidado.`);
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("");
        console.log("");
        console.log(`Seu IMC é de ${imc}. Você está com peso normal! Mantenha-se saudável.`);
    } else if (imc >= 25 && imc <= 29.9) {
        console.log("");
        console.log("");
        console.log(`Seu IMC é de ${imc}. Você está com excesso de peso, busque perder peso!`);
    } else if (imc >= 30 && imc <= 34.9) {
        console.log("");
        console.log("");
        console.log(`Seu IMC é de ${imc}. Você está no nivel de obesidade classe I, busque perder peso!`);
    } else if (imc >= 35 && imc <= 39.9) {
        console.log("");
        console.log("");
        console.log(`Seu IMC é de ${imc}. Você está no nivel de obesidade classe II, busque perder peso!`);
    } else if (imc > 40) {
        console.log("");
        console.log("");
        console.log(`Seu IMC é de ${imc}. Você está com obesidade classe III, isto é muito perigoso! Tenha cuidado!`);
    }

    op = 11;
    console.log("");
    console.log("");
    menu();
}

// conversão dolar para reais
function conversaoDolar(dolares, cotacao, reais) {
    dolares = parseFloat(prompt("Insira seu quantos dolares você possui: "));
    cotacao = 5.07;
    reais = dolares * 5.07;
    console.log("");
    console.log("");
    console.log(`Você possui R$${reais} convetidos na cotação de R$${cotacao} por dolar!`);
    op = 11;
    console.log("");
    console.log("");
    menu();
}

// calculadora de media
function calculoMedia(nota1, nota2, nota3, nota4) {
    nota1 = parseFloat(prompt("Digite a sua primeira nota: "));
    nota2 = parseFloat(prompt("Digite a sua segunda nota: "));
    nota3 = parseFloat(prompt("Digite a sua terceira nota: "));
    nota4 = parseFloat(prompt("Digite a sua quarta nota: "));
    media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2);

    if (media < 0 || media > 100 || nota1 < 0 || nota1 > 100 || nota2 > 100 || nota2 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
        console.log("[ERRO] Algo foi digitado errado! Tente novamente");
    } else if (media < 70) {
        console.log(`Você foi reprovado! Sua média de notas foi ${media}.`);
    } else if (media >= 70) {
        console.log(`Você foi aprovado com a média de ${media}! Parabéns!`);
    }
    
    op = 11;
    console.log("");
    console.log("");
    menu();
}

// tabuada
function tabuada(n1) {
    n1 = parseFloat(prompt("Digite um numero para a tabuada: "));

    for (i = 0; i < 11; i++) {
        console.log(`${n1} * ${i} = ${n1 * i}`)
    }

    op = 11
    console.log("");
    console.log("");
    menu();
}

// conversao de metros para centimentro
function conversaoMetros(m, cm) {
    m = parseFloat(prompt("Insira a quantidade de metros que deseja converter para cm: "));
    cm = m * 100
    console.log(`${m}m em centímetros são ${cm}cm`)
    op = 11
    console.log("");
    console.log("");
    menu();
}

// Celcius para Fahrenheit
function conversaoGraus(m, cm) {
    grausC = parseInt(prompt("Insira o valor em graus celcius: "));
    grausF = ((grausC*1.8) + 32).toFixed(0)
    console.log(`Sua conversão de ${grausC}°C resulta em ${grausF}°F`)
    op = 11
    console.log("");
    console.log("");
    menu();
}

//repetição do menu
while (op != 0) {

    if (op == 1) {
        soma();
    } else if (op == 2) {
        sub();
    } else if (op == 3) {
        mult();
    } else if (op == 4) {
        div();
    } else if (op == 5) {
        calculoIMC();
    } else if (op == 6) {
        conversaoDolar();
    } else if (op == 7) {
        calculoMedia();
    } else if (op == 8) {
        tabuada();
    } else if (op == 9){
        conversaoMetros()
    } else if (op == 10){
        conversaoGraus()
    } else {
        console.log("");
        console.log("");
        console.log("[ERRO] OPÇÃO INVALIDA... TENTE NOVAMENTE");
        console.log("");
        console.log("");
        op = 11;
        menu();
    }
}