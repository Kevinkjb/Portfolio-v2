const contentContainers = document.querySelectorAll(".content-container");

function checkContainerInView() {
  contentContainers.forEach((container, index) => {
    const rect = container.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1 && rect.bottom > 0) {
      container.classList.add("active");
    } else {
      container.classList.remove("active");
    }
    setTimeout(() => {
      section.classList.add("fadeIn");
    }, index * 1000); // Delay each section by 1000ms
  });
}

window.addEventListener("scroll", checkContainerInView);
window.addEventListener("load", checkContainerInView);