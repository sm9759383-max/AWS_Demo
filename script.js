const welcomeBtn = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const counterValue = document.getElementById("counterValue");

const dateTime = document.getElementById("dateTime");

let counter = 0;

// Welcome button
welcomeBtn.addEventListener("click", function () {

message.textContent =
    "Hello! Your JavaScript is working successfully 🎉";

welcomeBtn.textContent = "Clicked!";


});

// Increase counter
increaseBtn.addEventListener("click", function () {

counter++;

counterValue.textContent = counter;


});

// Decrease counter
decreaseBtn.addEventListener("click", function () {

counter--;

counterValue.textContent = counter;


});

// Change background color
const colorButtons = document.querySelectorAll(".color-btn");

colorButtons.forEach(function (button) {

button.addEventListener("click", function () {

    const color = button.dataset.color;

    document.body.style.background = color;

});


});

// Display current date and time
function updateDateTime() {

const now = new Date();

dateTime.textContent = now.toLocaleString();


}

updateDateTime();

// Update time every second
setInterval(updateDateTime, 1000);