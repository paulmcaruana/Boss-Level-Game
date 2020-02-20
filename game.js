var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomNumber;
//var randomChosenColor;

nextSequence();

function nextSequence(){
var randomNumber = Math.floor((Math.random() * 3) + 1);
var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);


//flashColors();

//function flashColors(){
$("#" + randomChosenColor).bind(randomChosenColor, function(){
$("#" + randomChosenColor).fadeout(500).fadein(500);
});
}
