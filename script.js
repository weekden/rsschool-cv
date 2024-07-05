const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".links-list");

const toggleMenu = () => {
    burgerMenu.classList.toggle("show");
    burgerBtn.classList.toggle("active");
};

const closeMenu = () => {
    burgerMenu.classList.remove("show");
    burgerBtn.classList.remove("active");
};

burgerBtn.addEventListener("click", toggleMenu);
burgerMenu.addEventListener("click", closeMenu);

// resize
window.addEventListener("resize", () => {
    if (window.innerWidth > 490) {
        burgerMenu.classList.remove("show");
    }
});
