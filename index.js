let pinfo = {
  name: "Sunny",
  chips: 567,
};
let cards = [];

let hasBlackJack = false;
let isAlive = false;
let message = "";
let displayMessage = document.getElementById("message");
let displaySum = document.querySelector(".sum");
let displayCards = document.querySelector(".cards");
let player = document.getElementById("player");

player.textContent = pinfo.name + ": $" + pinfo.chips

function startGame() {
  isAlive = true;
  let card1 = rand();
  let card2 = rand();
  cards = [card1, card2];
  sum = card1 + card2;
  renderGame();
}

function rand() {
  let num = Math.floor(Math.random() * 13 + 1);

  if (num === 1) return 11;
  else if (num > 10) return 10;
  else return num;
}

function renderGame() {
  if (sum < 21) {
    message = "Would you like to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Congratulations, You've won the game! 🥳";
    hasBlackJack = true;
  } else {
    message = "You've lost the game! 😢";
    isAlive = false;
  }

  displayMessage.textContent = message;
  displaySum.textContent = "Sum : " + sum;
  displayCards.textContent = "Cards : ";
  for (let i = 0; i < cards.length; i++)
    displayCards.textContent += cards[i] + " ";
}

function newcard() {
  if (isAlive === true && hasBlackJack === false) {
    let card3 = rand();
    cards.push(card3);
    sum += card3;
    renderGame();
  }
}

































