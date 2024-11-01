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

document.addEventListener("DOMContentLoaded", function() {
  const headText = document.querySelector('.head-text');

  function checkVisibility() {
      const rect = headText.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      const isVisible = rect.top <= windowHeight && rect.bottom >= 0;

      if (isVisible) {
          headText.classList.add('visible');
          // Remove the event listener after it becomes visible
          window.removeEventListener('scroll', checkVisibility);
      }
  }

  window.addEventListener('scroll', checkVisibility);
  // Check visibility on initial load
  checkVisibility();
});

document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.querySelector('.contact-form');

  function checkVisibility() {
      const rect = contactForm.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      
      // Check if the contact form is in the viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
          contactForm.classList.add('visible');
          // Remove event listener after the animation has triggered
          window.removeEventListener('scroll', checkVisibility);
      }
  }

  // Add scroll event listener
  window.addEventListener('scroll', checkVisibility);
  
  // Initial check in case the form is already in view
  checkVisibility();
});

document.addEventListener("DOMContentLoaded", function() {
  const maps = document.querySelectorAll('.map');

  function checkScroll() {
      const triggerBottom = window.innerHeight / 5 * 4; // Trigger point

      maps.forEach(map => {
          const mapTop = map.getBoundingClientRect().top;

          if (mapTop < triggerBottom) {
              map.classList.add('visible'); // Add visible class when in view
          } else {
              map.classList.remove('visible'); // Remove it if not in view
          }
      });
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial check on page load
});

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