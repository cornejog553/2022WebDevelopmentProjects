$("h1").addClass("big-title margin50")

$("h1").text("Bye")

$("button").html("<em>Hey</em>")

$("a").attr("href", "https://www.nba.com")

$("h1").click(function(){
    alert("Clicked!!")
})
$("button").click(function(){
    $("h1").css("color","purple")
})

$(document).keypress(function(event){
    $("h1").text(event.key)
})
$("h1").on("mouseover", function(){
    $("h1").css("color","purple")
})

$("button").click(function(){
    $("h1").fadeToggle()
})
////Add or Remove Elements

$("h1").before("<button>New</button>")
$("h1").after("<button>New</button>")
$("h1").prepend("<button>New</button>")
$("h1").append("<button>New</button>")
// $("button").remove()





