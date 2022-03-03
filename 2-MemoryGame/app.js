const cardArray = [
  {
    name: "fries",
    img: "img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },

  {
    name: "hotdog",
    img: "img/hotdog.png",
  },

  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
  {
    name: "fries",
    img: "img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },

  {
    name: "hotdog",
    img: "img/hotdog.png",
  },

  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
];
// advance random shuffle
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

// function to create the board game
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", i);
    // on click event
    card.addEventListener("click", flipCard);

    gridDisplay.appendChild(card);
  }
}

// function to flip a card on click
function flipCard() {
  // get the selected element
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(chechMatch, 500);
  }
}
// function to check matching pair
function chechMatch() {
  const cards = document.querySelectorAll("#grid img");

  console.log("checked");
  // To avoid chossing the same img
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId == optionTwoId) {
    // flip it back to blank
    cards[optionOneId].setAttribute("src", "img/blank.png");
    cards[optionTwoId].setAttribute("src", "img/blank.png");
    alert("You have clicked the same image!");
  } else if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match!");
    // change the background to white
    cards[cardsChosenIds[0]].setAttribute("src", "img/white.png");
    cards[cardsChosenIds[1]].setAttribute("src", "img/white.png");
    // remove the click option
    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);

    cardsWon.push(cardsChosen);
  } else {
    // flip it back to blank
    cards[cardsChosenIds[0]].setAttribute("src", "img/blank.png");
    cards[cardsChosenIds[1]].setAttribute("src", "img/blank.png");
    alert("Sorry try again!");
  }
  // reset the chosen cards stack
  cardsChosen = [];
  cardsChosenIds = [];
  resultDisplay.innerHTML = cardsWon.length;

  // After you exhaust all the cards
  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations you found them all";
  }
}

// Invoke functions
createBoard();

console.log(cardArray);
console.log(gridDisplay);
