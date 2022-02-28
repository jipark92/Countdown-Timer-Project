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
    const displayHours = document.querySelector('.hours');
    const displayMins = document.querySelector('.mins');
    const displaySecs = document.querySelector('.secs');
    
   
    let futureDates = new Date(2022, 5, 12, 5, 30,0);
    const futureTime = futureDates.getTime();
    console.log(futureTime);

    function getRemainingTime(){
        const today = new Date().getTime();
        console.log(today);

        const t = futureTime - today;
        console.log(t);
        // grabbed this formula from google search
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

        let hours = Math.floor((t % oneDay) / oneHour);
        console.log(hours);

        let minutes = Math.floor((t % oneHour) / oneMinute);
        console.log(minutes);

        let seconds = Math.floor((t % oneMinute) / 1000); 
        console.log(seconds);

        const values = [days, hours, minutes, seconds];
        console.log(values);

        displayDays.textContent = values[0];
        displayHours.textContent = values[1];
        displayMins.textContent = values[2];
        displaySecs.textContent = values[3];
    
    }
    getRemainingTime();

    function countDown() {
        let countDown = setInterval(getRemainingTime, 1000);
    }
    countDown();

}
countDownProject()
