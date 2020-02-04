// Question 1
let cat = {
  complain: function() {
    console.log("Meow!");
  }
};

// Question 2
let myHeading = document.querySelector("h3");

// Question 3
myHeading.style.fontSize = "2em";

// Question 4
myHeading.classList.add("heading");

// Question 5
let paragraph = document.querySelectorAll("p");

// Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;

// Question 7
const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  },
  {
    name: "Manny",
    age: 37
  },
  {
    name: "Sally"
  }
];

// Question 8, 9, 10
function showMeSomeCats(catArray) {
  let catName = ""; // local variable or functional scope
  let catAge = "";
  let newHTML = "";

  for (let i = 0; i < catArray.length; i++) {

    catName += `<h5>${catArray[i].name}</h5>`;
  
    if (catArray[i].age) {
      catAge += `<p>${catArray[i].age}</p>`;
    } else {
      catAge = "Age Uknown";
    }

    newHTML += `<div>
            ${catName}
            ${catAge}
        </div>`;
  }
  return newHTML;
}

// Question 9
resultsContainer.innerHTML = showMeSomeCats(cats);