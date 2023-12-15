const navbarNav = document.querySelector(".navbar-nav")
const hamMenu = document.querySelector("#ham-menu")

hamMenu.addEventListener("click", () => {
    navbarNav.classList.toggle('active');
})