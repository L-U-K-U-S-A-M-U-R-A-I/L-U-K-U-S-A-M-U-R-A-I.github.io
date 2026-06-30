    

    const launchDate = new Date("August 31, 2026 23:59:59").getTime();

    function getRemainingTime() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds, distance };
    }


    function updateCountdown() {
        const time = getRemainingTime();
        if (time.distance < 0) {
            // Display "Launch complete" or similar message
            clearInterval(countdownInterval); // Stop the interval
            document.getElementById("countdown-display").innerHTML = "Launch Complete!";
        } else {
            document.getElementById("days").innerHTML = time.days;
            document.getElementById("hours").innerHTML = time.hours;
            document.getElementById("minutes").innerHTML = time.minutes;
            document.getElementById("seconds").innerHTML = time.seconds;
        }
    }


    const countdownInterval = setInterval(updateCountdown, 1000);
