$(document).ready(function() {
    $(window).scroll(function() {
        // Check if the user has scrolled below the header
        if ($(this).scrollTop() > 600) {
            // Add the scrolled class to make the navbar fixed
            $('.navbar-brand img').width(125);
            $(".navbar").addClass("fixed-top shadow bg-white");
        } else {
            // Remove the scrolled class to make the navbar unfixed
            $(".navbar").removeClass("fixed-top shadow bg-white");
            $('.navbar-brand img').width(200)

        }
    });
});


const fadein = document.querySelectorAll(".fade-in");

const obser = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-animate');
            observer.unobserve(entry.target);
        }
    });
});

fadein.forEach((element) => {
    obser.observe(element)
});