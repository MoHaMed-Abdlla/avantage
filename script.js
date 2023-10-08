$(document).ready(function() {
    $(window).scroll(function() {
        // Check if the user has scrolled below the header
        if ($(this).scrollTop() > 600) {
            // Add the scrolled class to make the navbar fixed
            $('.navbar-brand img').width(125);
            $(".navbar").removeClass("position-absolute w-100 bg-white");
            $(".navbar").addClass("fixed-top shadow bg-white");
        } else {
            // Remove the scrolled class to make the navbar unfixed
            $(".navbar").addClass("fixed-top shadow bg-white position-absolute w-100");
            $(".navbar").removeClass("fixed-top shadow bg-white");
            $('.navbar-brand img').width(200)

        }
    });
});


const fadein = document.querySelectorAll(".fade-in");
const slidediv = document.querySelectorAll('.slide-div')

const fade = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('fade-animate');
              }, index * 200);
            observer.unobserve(entry.target);
        }
    });
});
const slide = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-animate');
            observer.unobserve(entry.target);
        }
    });
});

fadein.forEach((element) => {
    fade.observe(element)
});
slidediv.forEach((element) => {
    slide.observe(element)
});

$('.logo-container').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 600, 
          settings: {
            slidesToShow: 2, 
          }
        }
      ]
  });
$('#ratings').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1 
          }
        }
      ]
  });

  $('.ratignsleft').click(function(){
    $('#ratings').slick('slickPrev');
  });

  $('.ratingsright').click(function(){
    $('#ratings').slick('slickNext');
  });
  $('.logoleft').click(function(){
    $('.logo-container').slick('slickPrev');
  });

  $('.logoright').click(function(){
    $('.logo-container').slick('slickNext');
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.slick-dots li button:not([style*="none"])')
      .forEach(dotButton => dotButton.innerHTML = '');
  });
  