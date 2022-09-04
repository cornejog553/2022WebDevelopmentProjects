var buttonColors = ["red","blue","green","yellow"]
var gamePattern = []
var userClickedPattern = []
var level = 0

$(document).keypress(nextSequence)

$('.btn').click(function(){
    var userChosenColour = $(this).attr('id')
    userClickedPattern.push(userChosenColour)
    console.log(userClickedPattern);
    var soundFileName = 'sounds/' + userChosenColour + '.mp3'
    playSound(soundFileName)
    animatePress(userChosenColour)
})





//FUNCTIONS

function playSound(name){
    var audio = new Audio(name)
    audio.play()
}

function animatePress(currentColour){
        $('#' + currentColour).addClass("pressed")
        setTimeout(function (){
            $('#' + currentColour).removeClass("pressed")
        },100)
}


function nextSequence() {
    level++
    $('#level-title').text("Level " + level)
    var randomNumber = Math.floor(Math.random()*4)
    var randomChosenColour = buttonColors[randomNumber]
    gamePattern.push(randomChosenColour)
    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound()
}


