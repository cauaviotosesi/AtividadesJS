// Chamar a biblioteca prompt-sync.
const prompt = require('prompt-sync')()

// Coletar as informações do usuario.
    const nome = prompt('Qual é o seu nome? ');
    const altura = parseFloat(prompt('Qual sua altura? '));
    const peso = parseFloat(prompt('Qual seu peso atual? '));

// Calculo do IMC.
    const imc = (peso / (altura * altura)).toFixed(2);

// Validar informações e mostrar ao usuario.
        if(altura > 3 || altura < 0 || peso < 0 || peso > 635){
            console.log(`Acho que você digitou algo errado! Tente novamente!`)
        }
            else if(imc < 18.5){
                console.log(`Você está abaixo do peso normal! Tenha cuidado. Seu IMC é de ${imc}`)
            }   
                else if(imc >= 18.5 && imc <= 24.9){
                    console.log(`Você está com peso normal! Mantenha-se saudável. Seu IMC é de ${imc}`)
                } 
                    else if(imc >= 25 && imc <= 29.9){
                        console.log(`Você está com excesso de peso, busque perder peso! Seu IMC é de ${imc}`)
                    }
                        else if(imc >= 30 && imc <= 34.9){
                            console.log(`Você está no nivel de obesidade classe I, busque perder peso! Seu IMC é de ${imc}`)
                        }   
                            else if(imc >= 35 && imc <= 39.9){
                                console.log(`Você está no nivel de obesidade classe II, busque perder peso! Seu IMC é de ${imc}`)
                            }
                                else if(imc > 40){
                                    console.log(`Você está com obesidade classe III, isto é muito perigoso! Tenha cuidado! Seu IMC é de ${imc}`)
                                }

// Mensagem final para o user.
    console.log('Obrigado por usar nosso sistema!')