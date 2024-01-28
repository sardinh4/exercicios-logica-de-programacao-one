// Desafio 01
let contador01 = ''
let contador02 = ''
let contador03 = ''
let contador04 = ''

function desafio01() {
    contador01 = 1
    let contadorP = document.getElementById('contador01');

    function exibirContador() {
        contadorP.innerHTML = `${contador01}`;
        contadorP.style.fontSize = '2rem';
        contadorP.style.fontWeight = 'bold'

        if (contador01 < 10) {
            contador01++;
        } else {
            clearInterval(intervalId); // Se atingir 10, interrompe o intervalo
        }
    }

    exibirContador(); 

    let intervalId = setInterval(function() {
        exibirContador();
    }, 1000);
}

// Desafio 02
function desafio02() {
    contador02 = 10
    let contadorP = document.getElementById('contador02');

    function exibirContador() {
        contadorP.innerHTML = `${contador02}`;
        contadorP.style.fontSize = '2rem';
        contadorP.style.fontWeight = 'bold'

        if (contador02 > 0) {
            contador02--;
        } else {
            clearInterval(intervalId); // Se atingir 0, interrompe o intervalo
        }
    }

    exibirContador(); 

    let intervalId = setInterval(function() {
        exibirContador();
    }, 1000);
}


// Desafio 03
function desafio03() {
    contador03 = prompt('Digite um número: ')
    let contadorP = document.getElementById('contador03');

    function exibirContador() {
        contadorP.innerHTML = `${contador03}`;
        contadorP.style.fontSize = '2rem';
        contadorP.style.fontWeight = 'bold'

        if (contador03 > 0) {
            contador03--;
        } else {
            clearInterval(intervalId); // Se atingir 0, interrompe o intervalo
        }
    }

    exibirContador(); 

    let intervalId = setInterval(function() {
        exibirContador();
    }, 1000);
}

// Desafio 04
function desafio04() {
    let numero = prompt('Digite um número: ');
    contador04 = 0;
    let contadorP = document.getElementById('contador04');

    function exibirContador() {
        contadorP.innerHTML = `${contador04}`;
        contadorP.style.fontSize = '2rem';
        contadorP.style.fontWeight = 'bold'

        if (contador04 < numero) {
            contador04++;
        } else {
            clearInterval(intervalId); // Se atingir 0, interrompe o intervalo
        }
    }

    exibirContador(); 

    let intervalId = setInterval(function() {
        exibirContador();
    }, 1000);
}