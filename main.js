let playerAttack 
let enemyAttack 
let playerLifes = 3 
let enemyLifes = 3

function startGame(){
    let resetGameButton = document.getElementById("reset-button")
    resetGameButton.style.display = "none" 

    let rockButton = document.getElementById("rock-button")
    rockButton.addEventListener('click', rockAttack)  
    let paperButton = document.getElementById("paper-button")
    paperButton.addEventListener('click', paperAttack)
    let scissorsButton = document.getElementById("scissors-button")
    scissorsButton.addEventListener('click', scissorsAttack)

    let resetButton = document.getElementById("reset-button")
    resetButton.addEventListener("click", resetGame)
}

function rockAttack () {
    playerAttack = "ROCK"
    randomEnemyAttack()
}

function paperAttack () {
    playerAttack = "PAPER"
    randomEnemyAttack()
}

function scissorsAttack () {
    playerAttack = "SCISSORS"
    randomEnemyAttack()
}

function randomEnemyAttack () {
    let randomAttack = random(1,3)

    if (randomAttack == 1) {
        enemyAttack = "ROCK"
    } else if (randomAttack == 2) {
        enemyAttack = "PAPER"
    } else {
        enemyAttack = "SCISSORS"
    }

    combat()
}

function combat() {
    let spanPlayerLifes = document.getElementById("player-lifes")
    let spanEnemyLifes = document.getElementById("enemy-lifes")
   
    if ( enemyAttack == playerAttack ){
        createMessage(" TIE") 
    } else if ( playerAttack == "ROCK" && enemyAttack == "SCISSORS" || playerAttack == "PAPER" && enemyAttack == "ROCK" || playerAttack == "SCISSORS" && enemyAttack == "PAPER" ) { 
        createMessage(" YOU WON")
        enemyLifes --
        spanEnemyLifes.innerHTML = enemyLifes 
    } else {
        createMessage(" YOU LOST")
        playerLifes --
        spanPlayerLifes.innerHTML = playerLifes
    } 

    checkLifes()
}

function checkLifes () {
    if (playerLifes == 0) {
        createFinalMessage("YOU LOST :(")  
    } else if (enemyLifes == 0) {
        createFinalMessage("YOU WIN :)")
    } 
}

function createMessage(result) {
    let messagesSection = document.getElementById("result")
    let playerAttacks = document.getElementById("player-attacks")
    let enemyAttacks = document.getElementById("enemy-attacks")

    let newPlayerAttack = document.createElement("p")
    let newEnemyAttack = document.createElement("p")

    messagesSection.innerHTML = result
    newPlayerAttack.innerHTML = playerAttack
    newEnemyAttack.innerHTML = enemyAttack
    
    playerAttacks.appendChild(newPlayerAttack)
    enemyAttacks.appendChild(newEnemyAttack)
}

function createFinalMessage(finalResult) {
    let resetGameButton = document.getElementById("reset-button")
    resetGameButton.style.display = "block"
    
    let messagesSection = document.getElementById("result")

    messagesSection.innerHTML = finalResult

    let rockButton = document.getElementById("rock-button")
    rockButton.disabled = true 
    let paperButton = document.getElementById("paper-button")
    paperButton.disabled = true 
    let scissorsButton = document.getElementById("scissors-button")
    scissorsButton.disabled = true 
}

function random (min,max) {
    return Math.floor(Math.random() * (max - min +1) +min) 
} 

function resetGame(){
    location.reload()
}

window.addEventListener("load", startGame)