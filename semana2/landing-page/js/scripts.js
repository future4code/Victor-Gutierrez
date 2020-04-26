M.AutoInit();
AOS.init();

/* PARALAX FUNCTION */

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
});

/* paralax function */

/* MODAL */

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});

/* Modal  */

/* menu */

document.getElementById("navbartoggle").addEventListener("click", () => {
    document.getElementById("navbarmobile")
        .classList
        .toggle("hide")
})

/* menu */

/* Carrousel */

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});

var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
});

autoplay()

function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 6000);
}
/* carrousel */