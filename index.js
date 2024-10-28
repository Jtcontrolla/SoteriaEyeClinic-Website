const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    
    toggleBtnIcon.classList = isOpen
        ? 'fa fa-times'
        : 'fa fa-bars'
}

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 5,  // Adjust as needed
      spaceBetween: 10,  // Space between slides
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'slide',
      speed: 600,
      autoplay: {
        delay: 3000,  // Adjust autoplay delay as needed
        disableOnInteraction: false,
      },
    });
});

// Testimonial
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showNextTestimonial() {
  // Hide the current testimonial
  testimonials[currentTestimonial].classList.remove('active');
  // Move to the next testimonial (or loop back to the first)
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  // Show the next testimonial
  testimonials[currentTestimonial].classList.add('active');
}

setInterval(showNextTestimonial, 5000);