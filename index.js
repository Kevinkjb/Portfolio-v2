
// SCROLL ANIMATION
const contentContainers = document.querySelectorAll(".content-container");
function checkContainerInView() {
  contentContainers.forEach((container, index) => {
    const rect = container.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1 && rect.bottom > 0) {
      container.classList.add("active");
    } 
    // else {
    //   container.classList.remove("active");
    // } THIS RE ANIMATE THE SECTIONS
    setTimeout(() => {
      section.classList.add("fadeIn");
    }, index * 1000); // Delay each section by 1000ms
  });
}

window.addEventListener("scroll", checkContainerInView);
window.addEventListener("load", checkContainerInView);


// NAVIGATION FUNCTION
const menuToggle = document.querySelector(".menu-toggle")
const menu = document.querySelector(".main-nav")
const navItem = document.querySelector(".nav-item")
const closeToggle = document.querySelector(".close-toggle")

menuToggle.addEventListener("click", ()=>{
  menuToggle.classList.toggle("active")
  menu.classList.toggle("active")
  navItem.classList.toggle("active")
  closeToggle.classList.toggle("active")
  
})
closeToggle.addEventListener("click", ()=>{
  menuToggle.classList.toggle("active")
  menu.classList.toggle("active")
  navItem.classList.toggle("active")
  closeToggle.classList.remove("active")
})
menu.addEventListener("click", () => {
  menuToggle.classList.remove("active");
  menu.classList.toggle("active");
  closeToggle.classList.toggle("active")
});

// SELECTING THE WHOLE DOCUMENT AND CHECKING THE EVENT
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
    menu.classList.remove("active");
    menuToggle.classList.remove("active");
    closeToggle.classList.remove("active")
  }
});

window.addEventListener("scroll", ()=>{
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let nav = document.querySelector(".head-container");
  let arrowUp = document.querySelector(".arrow-up")

  if(scrollTop > 50){
    nav.classList.add("transparent")
  }else{
    nav.classList.remove("transparent")
  }
})
window.addEventListener("scroll", ()=>{
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let arrowUp = document.querySelector(".arrow-up")
  if(scrollTop < 50){
    arrowUp.classList.add("arrow")
  }else{
    arrowUp.classList.remove("arrow")
  }
})