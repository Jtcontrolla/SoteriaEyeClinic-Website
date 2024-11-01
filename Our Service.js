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

document.addEventListener("DOMContentLoaded", function() {
  const wrapper = document.querySelector('.wrapper');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              wrapper.classList.add('visible'); // Add the visible class when in view
              observer.unobserve(entry.target); // Stop observing after it has animated
          }
      });
  });

  observer.observe(wrapper); // Start observing the wrapper
});

// Health Card
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.health-head-img, .health-head-img2');

  function checkScroll() {
      const triggerBottom = window.innerHeight / 5 * 4; // Adjust as needed

      elements.forEach(element => {
          const box = element.getBoundingClientRect();
          if (box.top < triggerBottom) {
              element.classList.add('show');
          } else {
              element.classList.remove('show');
          }
      });
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial check
});

// Service Card
document.addEventListener("DOMContentLoaded", function() {
  const serviceCards = document.querySelectorAll('.service__card');

  function checkScroll() {
      const triggerBottom = window.innerHeight / 5 * 4; // Adjust as needed

      serviceCards.forEach(card => {
          const box = card.getBoundingClientRect();
          if (box.top < triggerBottom) {
              card.classList.add('show');
          } else {
              card.classList.remove('show');
          }
      });
  }

  window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
});