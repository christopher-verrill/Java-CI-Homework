var buttons = document.getElementsByClassName('RPSButton');

var scoreCounting = document.getElementsByClassName('scoreTally');

let player = {
	name: null,
	hand: null,
  wins: 0
}

let computer = {
  name: "Computer",
  hand: null,
  wins: 0
}

let hands = ['rock', 'paper', 'scissors'];

let getHand = function () {
  return hands[parseInt(Math.random()*10%3)];
}

function load() {
  for (var i = 0; i < scoreCounting.length; i++) {
    scoreCounting[i].style.display = 'none';
  }
}

function chosePaper() {
	player.hand = "paper";
  computer.hand = getHand();
	document.getElementById("playerChoice").innerHTML = "You chose " + player.hand + ". The computer chose " + computer.hand + ".";
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = 'none';
  }
  for (var i = 0; i < scoreCounting.length; i++) {
    scoreCounting[i].style.display = 'block';
  }
  playGame();
}

function choseRock() {
  player.hand = "rock";
  computer.hand = getHand();
  document.getElementById("playerChoice").innerHTML = "You chose " + player.hand + ". The computer chose " + computer.hand + ".";
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = 'none';
  }
  for (var i = 0; i < scoreCounting.length; i++) {
    scoreCounting[i].style.display = 'block';
  }
  playGame();
}

function choseScissors() {
  player.hand = "scissors";
  computer.hand = getHand();
  document.getElementById("playerChoice").innerHTML = "You chose " + player.hand + ". The computer chose " + computer.hand + ".";
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = 'none';
  }
  for (var i = 0; i < scoreCounting.length; i++) {
    scoreCounting[i].style.display = 'block';
  }
  playGame();
}

function playGame() {
  
}