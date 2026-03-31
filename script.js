// ANIMACION AL HACER SCROLL
const elements = document.querySelectorAll("article");

const showOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add("show");
        } else {
            el.classList.remove("show");
        }
    });
};

window.addEventListener("scroll", showOnScroll);

// ACTIVAR ESTADO INICIAL
showOnScroll();