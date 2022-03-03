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

console.log(cardArray);
console.log(gridDisplay);
