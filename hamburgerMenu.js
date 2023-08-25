// const hamburger = document.querySelector(".hamburger");
// const navList = document.querySelector("#nav-list");
// const navLinks = document.querySelectorAll(".nav-link");

// hamburger.addEventListener("click", function() {
//     navList.classList.toggle("active");
//     hamburger.classList.toggle("active");
// });

// navLinks.forEach((navLink) => {
//     navLink.addEventListener("click", function() {
//         hamburger.classList.remove("active");
//         navList.classList.remove("active");
//     });
// });


const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("#nav-list");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", function() {
    // Calculate the top value of the navList
    const top = hamburger.getBoundingClientRect().bottom + window.scrollY;
  
    // Set the position of the navList
    navList.style.top = `${top}px`;
      
    navList.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function() {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
    });
});
