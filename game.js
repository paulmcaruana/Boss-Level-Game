var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomNumber;
var randomChosenColor;
//var randomChosenColor;

nextSequence();

function nextSequence(){
var randomNumber = Math.floor((Math.random() * 4));

randomChosenColor = buttonColors[randomNumber];
console.log(randomChosenColor);
gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).fadeOut(500).fadeIn(500);
}

makeSound();

function makeSound(randomChosenColor){
    switch (randomChosenColor) {
      case "green":
      var green = new Audio('sounds/green.mp3');
    green.play();
        break;

        case "blue":
        var blue = new Audio('sounds/blue.mp3');
      blue.play();
          break;

          case "red":
          var red = new Audio('sounds/red.mp3');
        red.play();
            break;

            case "yellow":
            var yellow = new Audio('sounds/yellow.mp3');
          yellow.play();
              break;

  }
}



/* $(document).ready(function() {
       var obj = document.createElement("audio");
       obj.setAttribute("src", "http://kahimyang.info/resources/click.m...
       $.get();

       $(".playSound").click(function() {
           obj.play();
       });
   });
   */
