
var buttonColours =["red","blue","green","yellow"];

var gamePattern =[];
var userClickedPattern =[];

var started = false;

var level = 0;



$(document).on("keydown",function () {
  if (!started) {
    $("h1").text("Level"+level);
    started=true;
    nextSequence();
  }
});

$(".btn").on("click",handler);





function handler (event) {
  var userChosenColour = $(this).attr('id');
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(userClickedPattern.length-1);
// console.log(userClickedPattern.length);
}



function checkAnswer(currentLevel) {
//   console.log(currentLevel);
// console.log(userClickedPattern[currentLevel]);
// console.log(gamePattern[currentLevel]);
if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){
if (userClickedPattern.length===gamePattern.length) {
  console.log("success");
  userClickedPattern =[];
  // console.log(userClickedPattern);



setTimeout(function(){
      nextSequence();
  }, 1000)
}

 else  {
  console.log("continue");
}

}
  else console.log("wrong");
};

function nextSequence () {

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
level++;
  $("h1").text("Level "+level);
// console.log("level " + level);
// console.log("userclickedpattern" + userClickedPattern.length)
}













function playSound (name) {
  var audio = new Audio('sounds/'+name+'.mp3');
  audio.play();
}

function animatePress(currentColour) {
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100)
}
