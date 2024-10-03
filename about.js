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

// Select the elements
const optometristCounter = document.getElementById('OptometristCounter');
const staffCounter = document.getElementById('StaffCounter');
const opticiansCounter = document.getElementById('OpticiansCounter');
const branchCounter = document.getElementById('BranchCounter');

// Define the animation function
function animateCounter(element, targetValue, duration) {
  // Set the initial value to 0
  let currentValue = 0;
  const increment = Math.ceil(targetValue / (duration / 5)); // Calculate the increment value

  const members = "+";

  // Animate the counter
  const intervalId = setInterval(() => {
    currentValue += increment;
    element.textContent = currentValue.toLocaleString(); // Format the value with commas

    if (currentValue >= targetValue) {
      clearInterval(intervalId);
    }
  }, 65); // Update every 10ms
}

// Animate the counters
animateCounter(optometristCounter, 15, 2000); // 15 Optometrist, 2 seconds duration
animateCounter(staffCounter, 70, 80); // 70 staffs, 80 milliseconds duration
animateCounter(opticiansCounter, 7, 2000); // 7 Opticians, 2 seconds duration
animateCounter(branchCounter, 4, 2000) // 4 Branches, 2 seconds duration