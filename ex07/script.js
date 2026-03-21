const recult = document.querySelector('.result')
const humanScore = document.querySelector('.human-score')
const machineScore = document.querySelector('.machin-score')

let humanScoreN = 0
let machineScoreN = 0

const playM = () => {
    const choice = ['pedra', 'papel', 'tesoura']
    const random = Math.floor(Math.random() * 3)
    return choice[random]
}

const playH = (humanChoice) => {
    // Chamamos playM() aqui para pegar o valor sorteado
    playGame(humanChoice, playM()) 
}

const playGame = (human, machine) => {
    //console.log('h: ' + human + ' m: ' + machine)

    if (human === machine) {
        recult.innerHTML = "Deu empate! 🤝"
    } else if (
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'papel' && machine === 'pedra') ||
        (human === 'tesoura' && machine === 'papel')
    ) {
        humanScoreN++
        humanScore.innerHTML = humanScoreN
        recult.innerHTML = "Você ganhou!!! 🏆"
    } else {
        machineScoreN++
        machineScore.innerHTML = machineScoreN
        recult.innerHTML = "Você perdeu para a Alexa! 🤖"
    }
}