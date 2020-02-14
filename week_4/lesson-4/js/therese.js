//question 1

const cars = [
    {
        type: "BMW",
        age: 4,
        beenInAccident: false
    },
    {
        type: "Toyota",
        beenInAccident: true
    },
    {
        type: "Ford",
        beenInAccident: true
    }
];

for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    if (car.age) {
        console.log("Age: ", car.age);
    } else {
        console.log("Age: ", "Unknown");
    }
}

cars.forEach(function(car) {
    if(car.age) {
        console.log("Age: ", car.age);
    } else {
        console.log("Age: ", "Unknown");
    }
});

//question 2

const elephants = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: "Given to a Carolingian emperor." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "From the Mysore Dasara procession." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "Known for her tightrope walking act." }
];

function addTags(array) {
    let html = "";
    array.forEach(function(item) {
        const src = item.image;
        const alt = item.note;
        const imgHtml = `<img src="${src}" alt="${alt}">`;
        html += imgHtml;
    });
    return html;
}

console.log (addTags(elephants));

//question 3
const elephants2 = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: null},
    { note: "From the Mysore Dasara procession." },
    { image: null, note: "Known for her tightrope walking act." }
];

function addTags2(array) {
    let html = "";
    let src;
    let alt; 
    array.forEach(function(item) {
        if (item.image) {
        src = item.image;
        } else {
            src = "https://via.placeholder.com/250";
        }
        if (item.note) {
            alt = item.note;
        } else {
            alt = "Elephant picture";
        }
        const imgHtml = `<img src="${src}" alt="${alt}">`
        html += imgHtml;
    })
    const imgDiv = `<div>${html}</div>`
    return imgDiv;
}

console.log(addTags2(elephants2));

//question 4
const elephantUrl = "https://elephant-api.herokuapp.com/elephants";
const corsUrl = "https://cors-anywhere.herokuapp.com/" + elephantUrl;
fetch(corsUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        createElephantNames(json);
    })
    .catch(function (error) {
        console.log(error);
    });

function createElephantNames(json) {
    const results = json;
    const resultsDiv = document.querySelector(".results");
    let html = "";
    results.forEach(function (results) {
        let name = "";
        if(results.name) {
            name = results.name;
        }
        const nameHeading = `<h4>${name}</h4>`;
        html += nameHeading;
    });
    resultsDiv.innerHTML = html;
}

