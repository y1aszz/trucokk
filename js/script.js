let nomeEquipe1 = "";
let nomeEquipe2 = "";
let pontosEquipe1 = 0;
let pontosEquipe2 = 0;
let vitoriasEquipe1 = 0;
let vitoriasEquipe2 = 0;

function setNomeEquipe(equipe) {
    if (equipe === 1) {
        nomeEquipe1 = document.getElementById("equipe1").value;
        document.getElementById("nomeEquipe1").innerText = `Nome da Equipe 1: ${nomeEquipe1}`;
        document.getElementById("nomeEquipe1Pontos").innerText = `${nomeEquipe1}`;
        document.getElementById("nomeEquipe1Vitorias").innerText = `${nomeEquipe1}`;
    } else if (equipe === 2) {
        nomeEquipe2 = document.getElementById("equipe2").value;
        document.getElementById("nomeEquipe2").innerText = `Nome da Equipe 2: ${nomeEquipe2}`;
        document.getElementById("nomeEquipe2Pontos").innerText = `${nomeEquipe2}`;
        document.getElementById("nomeEquipe2Vitorias").innerText = `${nomeEquipe2}`;
    }
}

function marcarPontos(equipe, pontos) {
    if (equipe === 1) {
        pontosEquipe1 += pontos; //pontuação da equipe
        document.getElementById("pontosEquipe1").innerText = pontosEquipe1;
    } 
    else if (equipe === 2) {
        pontosEquipe2 += pontos;
        document.getElementById("pontosEquipe2").innerText = pontosEquipe2;
    }

    if (pontosEquipe1 >= 12) {
        vitoriasEquipe1++;
        document.getElementById("vitoriasEquipe1").innerText = vitoriasEquipe1;
        alert(`${nomeEquipe1} venceu o jogo!`); //mostra quem venceu o jogo depois de alcançar 12 pontos
        resetPontuacao();
    }
     else if (pontosEquipe2 >= 12) {
        vitoriasEquipe2++;
        document.getElementById("vitoriasEquipe2").innerText = vitoriasEquipe2;
        alert(`${nomeEquipe2} venceu o jogo!`);
        resetPontuacao();
    }
}
//-----------------------------------RESET PONTUAÇÃO---------------------------------//
function resetPontuacao() {//reseta a pontuação
    pontosEquipe1 = 0;
    pontosEquipe2 = 0;
    document.getElementById("pontosEquipe1").innerText = pontosEquipe1;
    document.getElementById("pontosEquipe2").innerText = pontosEquipe2;
}

//-----------------------------------RESET JOGO--------------------------------------//
function resetJogo() {
vitoriasEquipe1 = 0;
vitoriasEquipe2 = 0;
document.getElementById("vitoriasEquipe1").innerText = vitoriasEquipe1;
document.getElementById("vitoriasEquipe2").innerText = vitoriasEquipe2;
resetPontuacao();
}