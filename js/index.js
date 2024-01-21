/* Change Background Header */
const scrollHeader = () => {
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

modalClose.forEach((mc) => {
    mc.addEventListener("click", () => {
        modalViews.forEach((mv) => {
            mv.classList.remove("active-modal");
        })
    })
});

// =========== MIXITUP FILTER POIRTFOLIO ===========
const mixerWork = mixitup(".tester", {
    selectors: {
        target: ".work_card"
    },
    animation: {
        duration: 500
    }
});

/* Link Active Work */
const workLink = document.querySelectorAll(".work_item");
console.log(workLink);
function activeWork() {
    workLink.forEach((wl) => {
        wl.classList.remove("active_work");
    });
    this.classList.add("active_work");
}
workLink.forEach((wl) => wl.addEventListener("click", activeWork));
// ============== SWIPER TESTIMONIAL ==============

// ==============   SCROLL SELSI HFFL ==============

// ============== SWIPER TESTIMONIAL ==============

// ============== LIGHT DARK THEME ==============
