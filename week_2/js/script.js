/*
Question 1
Refer: lesson 1
Create a function expression by assigning an anonmyous function to a variable called myFunctionExpression. The function should console log your name.
*/

const myFunctionExpression = function myFunctionExpression() {
  console.log("Mannuel Ferreira");
};

/*

Question 2
Refer: lesson 2
The HTML in this question has been updated as it was causing a conflict with question 4. It doesn't have any effect on the required JavaScript.
Select the input in the HTML below by its class. Add a click event listener. The callback function passed to the event listener should log the sentence I was clicked.
You can pass the function in directly, declare it and pass it in by its name or assign it to a variable and pass it in by the variable name.
*/

const button = document.querySelector(".btn");

let handleClick = function handleClick() {
  console.log("handle click");
};

button.addEventListener("click", handleClick);

/*
Question 3
Refer: lesson 2
Select the input in the HTML below by its id. Add a keydown event listener. The callback function passed to the event listener should log the value of the key that was pressed.
*/

const button2 = document.querySelector("#firstName");

let handleKeyPress = function handleKeyPress() {
  console.log("A key was pressed");
};

button2.addEventListener("keydown", handleKeyPress);

/*
Question 4
Refer: lesson 2 / 3
Select the button in the HTML below by its tag. 
Add a mouseover event listener. 
The callback function should add a class called hover to the button.
*/
const button3 = document.querySelector("button");

let handleMouseOver = function() {
  button.classList.add("hover");
};

button3.addEventListener("mouseout", handleMouseOver);

/*
Question 5
Refer: lesson 2 / 3
Select the button in the HTML below by its data attribute and add a mouseout event listener to it. 
The callback function should remove the class called hover from the button.
*/

const button4 = document.querySelector("[data-animal='dog']");

let handleMouseOut = function() {
  button.classList.remove("hover");
};

button4.addEventListener("mouseout", handleMouseOut);

/*
Question 6
Refer: lesson 3
Select all the li tags from the HTML below. Using a loop, add a mouseover event listener to each tag.

The callback function should log the value of the data attribute on each element when the cursor moves over it.
*/

const listItems = document.querySelectorAll("li");

listItems.forEach(function(item) {
  console.dir(item.dataset.animal);
});

/*
Question 7
Refer: lesson 3
Convert the if-else-if statement below to a switch statement. Use the code inside the else block in the default block in the switch.
*/

const animal = "cow";

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

/*
Question 8
Refer: lesson 4
Convert the for loop code below to a forEach loop.
*/

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(aSheep, index) {
  console.log(index, aSheep);
});

/*
Question 9
Refer: lesson 4
Create a timer that logs the word hello every half a second. It must stop after its logged the word 6 times.
*/

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

/*
Question 10
Refer: lesson 4
Select the div from the HTML below. Write code that updates the div's text to say Text updated after waiting 2 seconds. You can use either innerText or innerHTML to update the text.
*/

const containerDiv = document.querySelector(".container");

let updateDivAfterTwoSeconds = function updateDivAfterTwoSeconds() {
  containerDiv.innerHTML = "Text updated";
};

setTimeout(updateDivAfterTwoSeconds, 2000);
