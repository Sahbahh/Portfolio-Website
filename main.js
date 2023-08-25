// Add a click event listener to the "Home" link
document.querySelector('#nav-list li a[href="#header"]').addEventListener('click', function (e) {
  // Prevent default action
  e.preventDefault();

  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    left: 0,
  });

  // Then reload the page with a slight delay
  setTimeout(() => location.reload(), 500);
});

let backgroundPosition = '26.3% 36.2%';

// Set the background position based on the screen size
window.addEventListener('resize', () => {
  if(window.innerWidth <= 600) { // for smaller screens
    backgroundPosition = '50% 58%';
  } else { // for larger screens
    backgroundPosition = '26.3% 36.2%';
  }
});

// //Computer image zooming effect
// window.addEventListener('scroll', () => {
//   const scroll = window.scrollY;
//   const header = document.getElementById('header');

//   if(scroll > 0){ // Condition to check if the scroll is not at the top of the page
//     // Set the scale depending on the scroll value
//     const scale = 1 + scroll * 0.025;

//     // Set the new background size
//     const backgroundSize = 100 * scale + '%';

//     // Apply the changes to the header
//     header.style.backgroundSize = backgroundSize;
//     header.style.backgroundPosition = backgroundPosition;
//   } else {
//     // Reset the styles when the scroll is at the top of the page
//     header.style.backgroundSize = '100%';
//     header.style.backgroundPosition = 'center top';
//   }
// });

// // Call resize event once to initialize the position correctly
// window.dispatchEvent(new Event('resize'));
// ... [rest of the code remains unchanged]

//Computer image zooming effect
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const header = document.getElementById('header');
  const overlay = document.querySelector('.color-overlay');  

  if(scroll > 0){ 
    // Set the scale depending on the scroll value
    const scale = 1 + scroll * 0.015;  

    // Set the new background size
    const backgroundSize = 100 * scale + '%';

    // Gradually increase the opacity of the overlay as the user scrolls
    const opacity = Math.min(1, scroll * 0.004);  

    // Apply the changes to the header
    header.style.backgroundSize = backgroundSize;
    header.style.backgroundPosition = backgroundPosition;
    overlay.style.opacity = opacity;  // Apply the opacity to the overlay
  } else {
    header.style.backgroundSize = '100%';
    // header.style.backgroundPosition = 'center top';
    overlay.style.opacity = '0';  
  }
});

// Call resize event once to initialize the position correctly
window.dispatchEvent(new Event('resize'));

