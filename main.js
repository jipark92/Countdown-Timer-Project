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

const date = new Date();

console.log(date);

const month = date.getMonth();

console.log(`today month is ${months[month]}`);


const day = date.getDay();

console.log(days[day]);


