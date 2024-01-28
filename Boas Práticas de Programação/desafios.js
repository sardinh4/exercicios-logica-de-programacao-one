let nome = 'Leonardo';

let resposta = ''

let valor1 = '';
let valor2 = '';

let situacao = '';
let idade = '';

let numero = ''

let contador = ''

let nota = ''

// Desafio 01
function desafio01() {
    console.log('Seja bem-vindo!');
}

// Desafio 02
function desafio02() {
    console.log(`Olá, ${nome}!`);
}

// Desafio 03
function desafio03() {
    alert(`Olá, ${nome}!`);
}

// Desafio 04
function desafio04() {
    resposta = prompt('Qual a linguagem de programação que você mais gosta?');
    console.log(resposta);
}

// Desafio 05

function desafio05() {
    valor1 = parseFloat(prompt('Digite um número: '));
    valor2 = parseFloat(prompt('Digite outro número: '));
    resultado = valor1 + valor2;
    console.log(`A soma de ${valor1} + ${valor2} é igua a ${resultado}`);
}

// Desafio 06
function desafio06() {
    valor1 = parseFloat(prompt('Digite um número: '));
    valor2 = parseFloat(prompt('Digite outro número: '));
    resultado = valor1 - valor2;
    console.log(`A diferença entre ${valor1} e ${valor2} é igua a ${resultado}`);
}

// Desafio 07
function desafio07() {
    idade = parseFloat(prompt('Digite sua idade: '));
    (idade >= 18) ? situacao = 'maior' : situacao = 'menor';
    console.log(`O usuário tem ${idade} anos, logo é ${situacao} de idade.`);
}

// Desafio 08
function desafio08() {
    numero = parseFloat(prompt('Digite um número: '));
    (numero > 0) ? situacao = 'positivo' : (numero < 0) ? situacao = 'negativo' : situacao = 'zero';
    console.log(`O numero digitado, ${numero}, é ${situacao}.`);
}

// Desafio 09
function desafio09() {
    contador = 1;
    while (contador <= 10) {
        console.log(contador);
        contador++;
    }
}


// Desafio 10
function desafio10() {
    nota = parseFloat(prompt('Digite sua nota:'));
    (nota >= 7) ? situacao = 'aprovado' : situacao = 'reprovado';
    console.log(`A nota do usuário foi ${nota}, situação: ${situacao}.`);

}

// Desafio 11
function desafio11() {
    console.log(Math.random());
}

// Desafio 12
function desafio12() {
    console.log(Math.floor((Math.random() * 10 + 1)));
}

// Desafio 13
function desafio13() {
    console.log(Math.floor((Math.random() * 1000 + 1)));
}



