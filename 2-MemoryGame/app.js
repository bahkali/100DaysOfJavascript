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
];
// advance random shuffle
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");

// function to create the board game
function createBoard() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", i);
    gridDisplay.appendChild(card);
  }
}

createBoard();

console.log(cardArray);
console.log(gridDisplay);
