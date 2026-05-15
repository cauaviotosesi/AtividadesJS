// Chamando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Perguntar o nome do aluno.
    const nome = prompt('Qual seu nome? ');
    console.log(`Olá ${nome}`);

// Perguntar frequencia do aluno
    const frequencia = parseInt(prompt('Qual sua frequência? '));

// Perguntar nota do aluno
    const nota_final = parseFloat(prompt('Digite sua nota final: '));

// Verificar aprovação/reprovação/recuperação  
        if(nota_final > 10 || nota_final < 0) {
            console.log('Você digitou a nota errada. Repita o processo!');
    }
            else if(nota_final >= 7) {
                if(frequencia < 75){
                    console.log('Sua nota foi aprovada, porém sua frequência te reprovou.');
                } else {
                    console.log('Você foi aprovado parabéns!');
                  }
            }      
                    else if(nota_final >= 4 && nota_final < 7) {
                        console.log('Você está de exame');
                    }     
        else {
            console.log('Você reprovou! Sem direito a recuperação. Está de DP!');
    }
