const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Decenber"
]

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

const giveawayTime = document.querySelector('.giveaway');
const countdownTime = document.querySelectorAll('.countdown');


let futureDate = new Date(2020, 4, 24, 11, 30,0);

let futureDateString = futureDate.toString();

let newFutureDateString = futureDateString.slice(0, -32);

giveawayTime.textContent += newFutureDateString;



