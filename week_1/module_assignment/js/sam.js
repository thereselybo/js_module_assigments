// Question 1
let cat = {
  complain: function() {
    console.log('Meow!');
  }
}

// Question 2
let heading = document.querySelector('h3');

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.classList.add("subheading");

// Question 5
let paragraphs = document.querySelectorAll('p');

// Question 6
let resultsContainer = document.querySelector('.results');
resultsContainer.innerHTML += "<p>New paragraph</p>";

// Question 7
const cats = [{
    name: "Blob",
    age: 10
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21
  }
];

function allCats(param) {
  if (param) {
    for(var i = 0; i < param.length; i++) {
        console.log(param[i].name)
    }
  } else {
    console.log("please add an array as an argument")
  }
}

// Question 8
function allCats_q8(catArray) {
  let cat_names = "";
  for(var i = 0; i < catArray.length; i++) {
    cat_names += `<h5>${catArray[i].name}</h5>\n`;
  }
  return cat_names
}

// Question 9
resultsContainer.innerHTML += allCats_q8(cats);

// Question 10
function allCats_q10(catArray) {
  let newHTML = "";
  
  for(var i = 0; i < catArray.length; i++) {

    catArray[i].age = catArray[i].age 
        ? catArray[i].age 
        : "Age unknown";

    let details = `<div>
                    <h5>${catArray[i].name}</h5>
                    <p>${catArray[i].age}</p>
                  </div>`;

    newHTML += details;
  }

  return newHTML;
}