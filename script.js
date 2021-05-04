const navList = document.querySelector(".navigation__list");
const checkBox = document.querySelector(".navigation__checkbox");

navList.addEventListener("click", function (e) {
    // e.preventDefault();
    if (e.target.classList.contains("navigation__link")) {
        // const id = e.target.getAttribute("href");
        // document.querySelector(`${id}`).scrollIntoView({ behavior: "smooth" });
        checkBox.checked = false;
    }
});
