/* Change Background Header */
const scrollHeader = () =>{
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// =========== SERVICE MODAL ===========
const modalViews = document.querySelectorAll(".services_modal");
const modalBtns = document.querySelectorAll(".services_button");
const modalClose = document.querySelectorAll(".services_modal-close");

const modal = (modalClick) => {
    modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
    mb.addEventListener("click", () => {
        console.log(modalClose);
        modal(i);
    })
});
console.log(modalClose);
modalClose.forEach((mc) => {
    mc.addEventListener("click", () => {
        modalViews.forEach((mv) => {
            mv.classList.remove("active-modal");
        })
    })
});

// =========== MIXITUP FILTER POIRTFOLIO ===========

/* Link Active Work */

// ============== SWIPER TESTIMONIAL ==============

// ==============   SCROLL SELSI HFFL ==============

// ============== SWIPER TESTIMONIAL ==============

// ============== LIGHT DARK THEME ==============
