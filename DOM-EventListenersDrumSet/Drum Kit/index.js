//Using an anonymous function within addEventListener

var buttonList = document.querySelectorAll(".drum")
for(button in buttonList){
    buttonList[button].addEventListener("click", function(){
        alert("I got clicked")
    })
}




