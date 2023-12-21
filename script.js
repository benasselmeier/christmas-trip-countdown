document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to (replace with your vacation date)
    var countDownDate = new Date('Dec 27, 2023 08:30:00').getTime();

    var audio = new Audio('freezeezy-peak.mp3');

    audio.loop = true;
    audio.volume = 0.5;



    // Update the countdown every 1 second
    var x = setInterval(function () {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the remaining time
        var distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('countdown').innerHTML = 'EXPIRED';
        }
    }, 1000);

    let slides = Array.from(document.querySelectorAll('.images'));

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            shuffleArray(slides);
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    document.getElementById('playButton').addEventListener('click', function() {
        document.querySelector('.content-container').style.display = 'flex';
        audio.play();
    });

    showSlide(currentSlide); // Show the first slide initially
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});
