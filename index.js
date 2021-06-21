
var player1 = "Player 1";
var player2 = "Player 2";

function editNames(){
  player1 = prompt("Change Player1 name.");
  player2 = prompt("Change Player2 name. ")

  document.querySelector("p.Player1").innerHTML=player1;
  document.querySelector("p.Player2").innerHTML=player2;

}



function rollTheDice(){
var randomNumber1 = Math.floor(Math.random() * 6)+ 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1png - dice6.png

var randomImageSourse = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSourse);

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomImageSourse2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSourse2);

//if player 1 wins
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = `🏆 ${player1} Wins!`;
}else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = `🏆 ${player2} Wins!`;
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
};
