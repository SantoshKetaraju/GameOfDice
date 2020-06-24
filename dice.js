var a = Math.round(Math.random() * 6);
if (a < 1) {
  a = 1;
}

var b = Math.round(Math.random() * 6);
if (b < 1) {
  b = 1;
}

if (a > b) {
  document.querySelector(".winner").textContent = "Player 1 wins!!!"
} else if (b > a) {
  document.querySelector(".winner").textContent = "Player 2 wins!!!"
} else {
  document.querySelector(".winner").textContent = "It's a draw!!!"
}
setDiceImage(a, 1);
setDiceImage(b, 2);

function setDiceImage(num, x) {
  if (x === 1) {
    var player = ".player-1";
  } else {
    var player = ".player-2";
  }
  switch (num) {
    case 1:
      document.querySelector(player + " img").setAttribute("src", "images/dice1.png");
      break;

    case 2:
      document.querySelector(player + " img").setAttribute("src", "images/dice2.png");
      break;

    case 3:
      document.querySelector(player + " img").setAttribute("src", "images/dice3.png");
      break;

    case 4:
      document.querySelector(player + " img").setAttribute("src", "images/dice4.png");
      break;

    case 5:
      document.querySelector(player + " img").setAttribute("src", "images/dice5.png");
      break;

    case 6:
      document.querySelector(player + " img").setAttribute("src", "images/dice6.png");
      break;
  }
}
