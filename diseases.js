document.addEventListener("DOMContentLoaded", function() {
    const headText = document.querySelector('.head-text');
  
    function checkScroll() {
        const rect = headText.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        // Check if the element is in the viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
            headText.classList.add('visible'); // Add the class to trigger animation
            window.removeEventListener('scroll', checkScroll); // Remove event listener once visible
          }
    }
  
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load in case it's already in view
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Select the elements
    const heading = document.querySelector('.health-big-text3');
    const paragraph = document.querySelector('.health-para');
    
    // Add the 'visible' class to trigger the fade-in effect
    heading.classList.add('visible');
    paragraph.classList.add('visible');
});

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 10,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true
      },
      effect: 'slide',
      speed: 600,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      // Responsive breakpoints
      breakpoints: {
          // when window width is >= 320px
          320: {
              slidesPerView: 1,
              spaceBetween: 10
          },
          // when window width is >= 768px
          768: {
              slidesPerView: 3,
              spaceBetween: 15
          },
          // when window width is >= 1024px
          1024: {
              slidesPerView: 5,
              spaceBetween: 10
          }
      }
  });
});