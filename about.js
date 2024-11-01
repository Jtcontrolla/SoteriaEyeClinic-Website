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

document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        container.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

// Head Text Animation
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

// About Description Animation
document.addEventListener("DOMContentLoaded", function() {
  const aboutContent = document.querySelector('.about-content');

  function checkScroll() {
      const rect = aboutContent.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the element is in the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
          aboutContent.classList.add('visible'); // Add the class to trigger animation
          window.removeEventListener('scroll', checkScroll); // Remove event listener once visible
      }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on initial load in case it's already in view
});

// Feature Animation
document.addEventListener("DOMContentLoaded", function() {
  const featureItems = document.querySelectorAll('.feature-item-up, .feature-item-down');

  function checkScroll() {
      featureItems.forEach(item => {
          const rect = item.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Check if the element is in the viewport
          if (rect.top < windowHeight && rect.bottom > 0) {
              item.classList.add('visible'); // Add the class to trigger animation
          }
      });
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on initial load in case any items are already in view
});

// Counter Animation
document.addEventListener('DOMContentLoaded', function() {
  const counterContainer = document.querySelector('.counter-container');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              counterContainer.classList.add('visible'); // Add visible class
              observer.unobserve(counterContainer); // Stop observing after adding class
              startCounterAnimations(); // Start counter animations when visible
          }
      });
  });

  observer.observe(counterContainer); // Start observing the counter container
});

// Select the elements
const optometristCounter = document.getElementById('OptometristCounter');
const staffCounter = document.getElementById('StaffCounter');
const opticiansCounter = document.getElementById('OpticiansCounter');
const branchCounter = document.getElementById('BranchCounter');

// Define the animation function
function animateCounter(element, targetValue, duration) {
  return new Promise((resolve) => {
    // Set the initial value to 0
    let currentValue = 0;
    const increment = Math.ceil(targetValue / (duration / 5)); // Calculate the increment value

    // Animate the counter
    const intervalId = setInterval(() => {
      currentValue += increment;
      element.textContent = currentValue.toLocaleString(); // Format the value with commas

      if (currentValue >= targetValue) {
        clearInterval(intervalId);
        resolve(); // Resolve the promise when done
      }
    }, 65); // Update every 10ms
  });
}

// Function to start counter animations
async function startCounterAnimations() {
  await animateCounter(optometristCounter, 15, 2000); // 15 Optometrist, 2 seconds duration
  await animateCounter(staffCounter, 70, 80); // 70 staffs, 80 milliseconds duration
  await animateCounter(opticiansCounter, 7, 2000); // 7 Opticians, 2 seconds duration
  await animateCounter(branchCounter, 4, 2000); // 4 Branches, 2 seconds duration

  // You can trigger other animations or actions here after counters finish
  console.log('All counter animations are done!');
}

// Card Animation
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.card');

  const options = {
      root: null, // Use the viewport as the container
      threshold: 0.1 // Trigger when 10% of the card is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible'); // Add the visible class
              observer.unobserve(entry.target); // Stop observing once it's visible
          }
      });
  }, options);

  cards.forEach(card => {
      observer.observe(card); // Observe each card
  });
});

// Managerial Team Scroll Animation
document.addEventListener('DOMContentLoaded', function() {
  const imageContainers = document.querySelectorAll('.image-container');

  const checkVisibility = () => {
      const triggerBottom = window.innerHeight / 5 * 4; // Adjust this value to control when the animation triggers

      imageContainers.forEach(container => {
          const boxTop = container.getBoundingClientRect().top;

          if (boxTop < triggerBottom) {
              container.classList.add('visible'); // Add the visible class
          } else {
              container.classList.remove('visible'); // Remove the visible class if not in view
          }
      });
  };

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Check visibility on load
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