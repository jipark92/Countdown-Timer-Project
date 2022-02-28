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


    const displayDays = document.querySelector('.days');
    
   
    let futureDates = new Date(2022, 5, 12, 5, 30,0);
    const futureTime = futureDates.getTime();
    console.log(futureTime);

    function getRemainingTime(){
        const today = new Date().getTime();
        console.log(today);

        const t = futureTime - today;
        console.log(t);

        const oneDay = 24 * 60 * 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneMinute = 60 * 1000;
        console.log(oneDay);
        console.log(oneHour);
        console.log(oneMinute);

        let days = t/oneDay;
        console.log(days);
        days = Math.floor(days);
        console.log(days);
        let hours = (t % oneDay) / oneHour;
        console.log(hours);
    
    }
    getRemainingTime();

}
countDownProject()
