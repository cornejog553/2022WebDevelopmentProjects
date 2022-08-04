//Using an anonymous function within addEventListener

var buttonList = document.querySelectorAll(".drum")
for(let i=0; i < buttonList.length; i++){
    buttonList[i].addEventListener("click", function(e){
        if(this.innerText == 'w'){
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play()
        }
        else if(this.innerText == 'a'){
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play()
        }
        else if(this.innerText == 's'){
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play()
        }
        else if(this.innerText == 'd'){
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play()
        }
        else if(this.innerText == 'j'){
            var audio = new Audio('sounds/crash.mp3')
            audio.play()
        }
        else if(this.innerText == 'k'){
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play()
        }
        else if(this.innerText == 'l'){
            var audio = new Audio('sounds/snare.mp3')
            audio.play()
        }
    })
    buttonList[i].addEventListener("keydown", function(e){
        if(e.key == 'w'){
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play()
        }
        else if(e.key == 'a'){
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play()
        }
        else if(e.key == 's'){
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play()
        }
        else if(e.key == 'd'){
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play()
        }
        else if(e.key == 'j'){
            var audio = new Audio('sounds/crash.mp3')
            audio.play()
        }
        else if(e.key == 'k'){
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play()
        }
        else if(e.key == 'l'){
            var audio = new Audio('sounds/snare.mp3')
            audio.play()
        }
    })
}

function addSound(event){
    if(event.key == "w"){
        var audio = new Audio('sounds/tom-1.mp3')
        audio.play()
    }
}


// var audio = new Audio('sounds/tom-3.mp3')
//         audio.play()

