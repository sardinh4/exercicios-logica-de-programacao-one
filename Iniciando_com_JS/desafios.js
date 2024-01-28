// Desafio 01
let mensagemDeBoasVindas = 'Boas vindas ao nosso site!'

// Desafio 02
let nome = 'Lua';

// Desafio 03
let idade = 25;

// Desafio 04
let numeroDeVendas = 50;

// Desafio 05

let saldoDisponivel = 1000;

// Desafio 06 e 07

let mensagemDeErro = 'Erro! Preencha todos os campos.'

// Desafio 08

let nomeDoUsuario = ''

function desafio08(){
    nomeDoUsuario = prompt('Digite o seu nome.')
    mostrarDesafio(nomeDoUsuario)
}


// Desafio 09

function desafio09(){
    idadeDoUsuario = prompt('Digite sua idade.')
    mostrarDesafio(idadeDoUsuario)
}


// Desafio 10

function desafio10(){
    idadeDoUsuario = prompt('Digite sua idade.')
    if (idadeDoUsuario >= 18){
        mostrarDesafio('Pode tirar a habilitação!')
    }else{
        mostrarDesafio('Não pode tirar a habilitação!')
    }
    
}



// Função para mostrar os desafios
function mostrarDesafio (variavel){
    alert(variavel);
}
