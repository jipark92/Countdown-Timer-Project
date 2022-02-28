function countDownProject() {
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

    function getFutureDates () {
        let futureDate = new Date(2022, 5, 12, 5, 30,0);
        console.log(futureDate);

        let futureDateString = futureDate.toString();
        console.log(futureDateString)

        let newFutureDateString = futureDateString.slice(0, -33);
        console.log(newFutureDateString);

        giveawayTime.textContent += `${newFutureDateString}AM`;

    }
    getFutureDates();


    let day = 34;
    let hour = 5;
    let min = 15;
    let sec = 34;



    
}
countDownProject()
