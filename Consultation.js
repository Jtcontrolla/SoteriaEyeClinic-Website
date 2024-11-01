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

// Head Text Animation
document.addEventListener('DOMContentLoaded', function() {
  const headText = document.querySelector('.head-text');

  const showHeadText = () => {
      const windowHeight = window.innerHeight;
      const headTextTop = headText.getBoundingClientRect().top;

      if (headTextTop < windowHeight - 50) { // Trigger when the text is near the viewport
          headText.classList.add('visible');
      }
  };

  window.addEventListener('scroll', showHeadText);
  showHeadText(); // Initial check
});

// Icons Animation
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.animate');

  const showImages = () => {
      const windowHeight = window.innerHeight;
      images.forEach(image => {
          const imageTop = image.getBoundingClientRect().top;

          if (imageTop < windowHeight - 50) { // Trigger when image is near the viewport
              image.classList.add('visible');
          }
      });
  };

  window.addEventListener('scroll', showImages);
  showImages(); // Initial check
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