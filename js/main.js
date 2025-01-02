document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.text');
    let current_index = 0;
    let total_slides = slides.length;

    //quotes
    const quotes = document.querySelectorAll(".quotes_next1");
    let currentIndex = 0;

    // Function to show the next quote
    function showNextQuote() {
        // Hide the current quote
        quotes[currentIndex].classList.remove("active");
        quotes[currentIndex].style.opacity = "0";

        // Update index to the next quote
        currentIndex = (currentIndex + 1) % quotes.length;

        // Show the next quote
        quotes[currentIndex].classList.add("active");
        quotes[currentIndex].style.opacity = "1";
    }

    // Set the initial state
    quotes.forEach((quote, index) => {
        //if the quote is 0 we set the opacity to 1, othere will be 0
        quote.style.opacity = index === 0 ? "1" : "0";
        if (index === 0) quote.classList.add("active");
    });

    // Change quote every 3 seconds
    setInterval(showNextQuote, 3000);
    //************************************** */

    

    function showSlide() {
        // Hide all slides and reset position
        slides.forEach(slide => {
            slide.style.opacity = '0';
            slide.style.transform = 'translateX(100%)'; // Start off-screen to the right
        });

        // Show the current slide
        slides[current_index].style.opacity = '1';
        slides[current_index].style.transform = 'translateX(0)'; // Bring it into view

        // Move to the next slide
        current_index++;
        if (current_index >= total_slides) {
            current_index = 0; // Loop back to the first slide
        }
    }

    // Start the animation
    function startAnimation() {
        showSlide();

        // Slide the current slide out to the left after 3 seconds
        setTimeout(() => {
            slides[current_index].style.transform = 'translateX(-100%)'; // Slide out to the left
        }, 1000); // Wait for 3 seconds before sliding out

        // Loop through the slides continuously every 3 seconds
        setTimeout(startAnimation, 2000);
    }

    // Start the animation immediately
    startAnimation();

    
});



