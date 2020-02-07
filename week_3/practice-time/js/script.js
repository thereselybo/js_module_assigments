const containerDiv = document.querySelector(".container");
const notificationBanner = document.querySelector(".notification");

let notificationContent = ``;

let warningMessage = () => {
    notificationContent = `Warning you have entered incorrect email`;
    
    
    containerDiv.innerHTML = notificationContent;
}

containerDiv.addEventListener("click", warningMessage);


let currentDate = document.querySelector("[data-date='currentDate']");

currentDate.innerHTML = new Date();

