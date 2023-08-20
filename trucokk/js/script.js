const value1 = document.getElementById('valorJog1');
const value2 = document.getElementById('valorJog2');

const buttonPon1Jog1 = document.getElementById('ponJog1Mais1');
const buttonPon3Jog1 = document.getElementById('ponJog1Mais3');
const buttonPon6Jog1 = document.getElementById('ponJog1Mais6');
const buttonPon12Jog1 = document.getElementById('ponJog1Mais12');

const reset = document.getElementById('reset');
const start = document.getElementById('start');

const buttonPon1Jog2 = document.getElementById('ponJog2Mais1');
const buttonPon3Jog2 = document.getElementById('ponJog2Mais3');
const buttonPon6Jog2 = document.getElementById('ponJog2Mais6');
const buttonPon12Jog2 = document.getElementById('ponJog2Mais12');

//----------------------------------------------------------------//

let valorJog1 = 0; //colocando o valor para começar em 0
value1.innerHTML = valorJog1;

let valorJog2 = 0; //colocando o valor para começar em 0
value2.innerHTML = valorJog2;

//--------------------------TIME1--------------------------------------//

function atualizarTexto(){
    const nomeTime1 = document.getElementById('nomeTime1').value; //chamando o id do html
    const time1 = document.getElementById('time1'); //chamdndo id do html
      time1.textContent = nomeTime1; //fazendo com que tudo que tenha em cima seja igual o de baixo
}

document.addEventListener('DOMContentLoaded', function(){
    const nomeTime1 = document.getElementById('nomeTime1'); //chamando id do html
    nomeTime1.addEventListener('input', atualizarTexto); //adicionando um evento para fazer com que o input atualize o texto
});

//---------------------------TIME2-------------------------------------//

function atualizarTexto2(){
    const nomeTime2 = document.getElementById('nomeTime2').value; //chamando o id do html
    const time2 = document.getElementById('time2'); //chamdndo id do html
      time2.textContent = nomeTime2; //fazendo com que tudo que tenha em cima seja igual o de baixo
}

document.addEventListener('DOMContentLoaded', function(){
    const nomeTime2 = document.getElementById('nomeTime2'); //chamando id do html
    nomeTime2.addEventListener('input', atualizarTexto2); //adicionando um evento para fazer com que o input atualize o texto
});

//----------------------------------------------------------------//

//---------------JOGADOR 1----------------------------------------//
buttonPon1Jog1.addEventListener('click', function() { //função vai acontecer quando clicar no botao
    valorJog1++; //++ significa que ele adicionara +1 no valor 

    value1.innerHTML = valorJog1; //linkando com o html, para que quando mudar aqui tbm mude la
});

buttonPon3Jog1.addEventListener('click', function(){
    valorJog1 += 3; //adiciona mais 3
    value1.innerHTML = valorJog1;
});

buttonPon6Jog1.addEventListener('click', function(){
    valorJog1 += 6; //adiciona mais 6
    value1.innerHTML = valorJog1;
});

buttonPon12Jog1.addEventListener('click', function(){
    valorJog1 += 12; //adiciona mais 12
    value1.innerHTML = valorJog1;
});

//---------------JOGADOR 2----------------------------------------//

buttonPon1Jog2.addEventListener('click', function(){
    valorJog2++;
    value2.innerHTML = valorJog2;
});

buttonPon3Jog2.addEventListener('click', function(){
    valorJog2+=3;
    value2.innerHTML = valorJog2;
});

buttonPon6Jog2.addEventListener('click', function(){
    valorJog2+=6;
    value2.innerHTML = valorJog2;
});

buttonPon12Jog2.addEventListener('click', function(){
    valorJog2+=12;
    value2.innerHTML = valorJog2;
});

//---------------------------LIMITE DE CLICK-------------------------------------//



//---------------------------RESETAR-------------------------------------//

reset.addEventListener('click', () => { //ao clicar sera resetado
    valorJog1 = 0; //valorJog1 sera igual a 0 quando clicar no botao
    valorJog2 = 0; //valorJog2 sera igual a 0 quando clicar no botao
    value1.innerHTML = valorJog1
    value2.innerHTML = valorJog2
});



console.log(value1);
console.log(value2);