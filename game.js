
var buttonColours =["red","blue","green","yellow"];

var gamePattern =[];

var userClickedPattern =[];

$(".btn").on("click",handler);

function nextSequence () {
  var randomNumber = Math.floor(Math.random()*4)
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  $("."+randomChosenColour).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);


}


function handler (event) {
  var userChosenColour = $(this).attr('id');

console.log(userChosenColour);
userClickedPattern.push(userChosenColour);
console.log(userClickedPattern);
playSound(userChosenColour);

}

function playSound (name) {
  var audio = new Audio('sounds/'+name+'.mp3');
  audio.play();
}
