const burgerBtn = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".navigation-menu");

burgerBtn.addEventListener("click", () => {
    navMenu.classList.remove("none");
})

exitBtn.addEventListener("click", () => {
    navMenu.classList.add("none");
})
