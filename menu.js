
var hamburger = document.querySelector(".rwd-menu");
var photos = document.querySelectorAll(".to-hide");

hamburger.addEventListener("click", hideMenu);

function hideMenu() {

    var menu = document.querySelector(".menu");

    if (menu.className === "menu") {
        menu.className += " responsive";
        photos.forEach(function(x){ x.classList.add("hide-photo")});
    } else {
        menu.className = "menu";
        photos.forEach(function(x){ x.classList.remove("hide-photo")});
    }

}