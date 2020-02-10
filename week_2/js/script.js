// Question 1
const myFunctionExpression = function() {
  console.log("Mannuel Ferreira");
};

// Question 2
const button = document.querySelector(".btn");

let handleClick = function handleClick() {
  console.log("handle click");
};

button.addEventListener("click", handleClick);

// Question 3
const button2 = document.querySelector("#firstName");

let handleKeyPress = function handleKeyPress() {
  console.log("A key was pressed");
};

button2.addEventListener("keydown", handleKeyPress);

// Question 4
const button3 = document.querySelector("button");

let handleMouseOver = function() {
  button.classList.add("hover");
};

button3.addEventListener("mouseout", handleMouseOver);

// Question 5
const button4 = document.querySelector(".btn[data-animal='dog']");

let handleMouseOut = function() {
  button.classList.remove("hover");
};

button4.addEventListener("mouseout", handleMouseOut);

// Question 6
const listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("mouseover", hoverListItem);

}
function hoverListItem(event) {
  console.log(event.target.dataset.animal)
};


// Question 7
const animal = "bird";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;
  default:
    console.log("Harrumph");
}

// Question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(item, index) {
  console.log(index, item);
});

// Question 9
const word = "hello";

function logMyWord() {
  if (count === 5) {
    clearInterval(wordTimer);
  }
  count++;
  console.log(word);
}

let wordTimer = setInterval(logMyWord, 500);

let count = 1;

// Question 10
const containerDiv = document.querySelector(".container");

let updateDivAfterTwoSeconds = function updateDivAfterTwoSeconds() {
  containerDiv.innerHTML = "Text updated";
};

setTimeout(updateDivAfterTwoSeconds, 2000);
