function randomDiceNumber() {
    return Math.floor(Math.random()*6+1);
}

function randomDiceNumber2() {
    return Math.floor(Math.random()*6+1);
}

// Dice 1 change
var img1 = document.getElementsByClassName("img1")
var number = randomDiceNumber() 
img1[0].setAttribute("src",`images/dice${number}.png`)


var img2 = document.getElementsByClassName("img2")
var number2 = randomDiceNumber2() 
img2[0].setAttribute("src",`images/dice${number2}.png`)

// Determine Winner

if(number > number2){
    document.querySelector('h1').textContent = "Player 1 Wins"
}
else if(number2 > number){
    document.querySelector('h1').textContent = "Player 2 Wins"
}
else{
    document.querySelector('h1').textContent = "Draw Game"
}
