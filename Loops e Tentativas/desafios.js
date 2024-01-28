// Desafio 01
let verification = ''
let dia = ''

function desafio01() {
    verification = false
    while (verification == false) {
        dia = prompt('Digite um dia da semana: ')
        dia = dia.toLowerCase();

        // if (dia == 'sábado' || dia == 'sabado' || dia == 'domingo') {
        //     alert('Bom fim de semana!');
        //     verification = true;
        // } else if (dia == 'segunda' || dia == 'terça' || dia == 'terca' || dia == 'quarta' || dia == 'quinta' || dia == 'sexta') {
        //     alert('Boa semana!');
        //     verification = true;
        // } else {
        //     alert('Erro! Dia não encontrado.');
        //     verification = false;
        // }

        (dia == 'segunda' || dia == 'terça' || dia == 'terca' || dia == 'quarta' || dia == 'quinta' || dia == 'sexta') ? (alert('Boa semana!'), verification = true) : (dia == 'sábado' || dia == 'sabado' || dia == 'domingo') ? (alert('Bom fim de semana!'), verification = true) : (alert('Erro! Dia não encontrado.'), verification = false)
    }



}

// Desafio 02
let numero = ''
let resultado = ''
function desafio02() {
    numero = prompt('Digite um número: ');

    // if (numero > 0) {
    //     alert("O número é positivo");
    // } else if (numero < 0) {
    //     alert("O número é negativo");
    // } else {
    //     alert("O número é zero");
    // }

    resultado = (numero > 0)
        ? "O número é positivo"
        : (numero < 0)
            ? "O número é negativo"
            : "O número é zero";
    alert(resultado)
}

// Desafio 03
let pontuacao = ''
function desafio03() {
    pontuacao = prompt('Digite sua pontuação: ');

    resultado = (pontuacao >= 100) ? "Parabéns, você venceu!" : "Tente novamente para ganhar.";
    alert(resultado)
}

// Desafio 04
let saldo = 5000;
 function desafio04(){
    alert(`Seu saldo atual é de R$${saldo.toFixed(2).replace('.', ',')}`)
 }

// Desafio 05
let nome = ''
function desafio05(){
    nome = prompt('Digite seu nome:')
    alert(`Olá, ${nome}, seja bem-vindo!`)
}



