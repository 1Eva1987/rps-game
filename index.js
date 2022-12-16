alert("This game has 10 rounds!!!");
var choises = ["r", "p", "s"];
var wins = 0;
var looses = 0;
var ties = 0;
var round = 0;
// function to play
function gameRPS() {
  var randomNumber = Math.floor(Math.random() * 3);
  var usersChoise = prompt(
    "To play the game please enter the letter 'r' for rock, 'p' for paper, 's' for scisorrs :"
  );
  console.log("compute chose : " + choises[randomNumber]);
  console.log("you choese : " + usersChoise);
  if (usersChoise === "r" && choises[randomNumber] === "p") {
    looses = looses + 1;
    round = round + 1;
    console.log("PAPER wins against ROCK");
    alert("Game " + round + "you lost");
    console.log("looses: " + looses);
  } else if (usersChoise === "r" && choises[randomNumber] === "s") {
    wins = wins + 1;
    round = round + 1;
    console.log("ROCK wins against SCISORRS");
    alert("Game " + round + "you lost");
    console.log("wins: " + wins);
  } else if (usersChoise === "p" && choises[randomNumber] === "r") {
    wins = wins + 1;
    round = round + 1;
    console.log("PAPER wins against ROCK");
    alert("Game " + round + "you lost");
    console.log("wins: " + wins);
  } else if (usersChoise === "p" && choises[randomNumber] === "s") {
    looses = looses + 1;
    round = round + 1;
    console.log("SCISSORS wins against PAPER");
    alert("Game " + round + "you lost");
    console.log("looses: " + looses);
  } else if (usersChoise === "s" && choises[randomNumber] === "r") {
    looses = looses + 1;
    round = round + 1;
    console.log("ROCK wins against SCISORRS");
    alert("Game " + round + "you lost");
    console.log("looses: " + looses);
  } else if (usersChoise === "s" && choises[randomNumber] === "p") {
    wins = wins + 1;
    round = round + 1;
    console.log("SCISORRS wins against PAPER");
    alert("Game " + round + "you won");
    console.log("wins: " + wins);
  } else if (usersChoise === choises[randomNumber]) {
    ties = ties + 1;
    round = round + 1;
    console.log("NO WINNER!");
    alert("Game " + round + "Ties");
    console.log("ties: " + ties);
  } else if (usersChoise != "p" && usersChoise != "r" && usersChoise != "s") {
    alert("pleas try again");
    round = round + 1;
  }
}

let i = 1;
while (i < 11) {
  console.log("game nr: " + i);
  gameRPS();
  i++;
}
alert(
  "Yuo have won " +
    wins +
    "times , You have lost " +
    looses +
    "times, ties total " +
    ties
);
