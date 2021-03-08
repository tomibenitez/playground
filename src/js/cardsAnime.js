import anime from 'animejs/lib/anime.es';

const cardsContainer = document.querySelector('.anime-enter-cards');
const cards = cardsContainer.querySelectorAll('div');
const cardsContainerMobile = document.querySelector('.anime-enter-cards-mobile');
const cardsMobile = cardsContainerMobile.querySelectorAll('div');

cardsContainer.tlAnimation = anime.timeline({
    autoplay: false
}).add({
    targets: cards,
    opacity: 1,
    translateY: '50%',
    easing: 'cubicBezier(0.285, 0.590, 0.020, 1.025)',
    duration: 700,
    delay: anime.stagger(100),
}).add({
    targets: cards,
    translateY: 0,
    translateX: 0,
    duration: 1500,
    delay: anime.stagger(50),
    easing: 'easeInOutElastic',
    complete: () => {
        anime({
            targets: '.anime-rotate',
            rotateZ: 360,
            loop: 5,
            duration: 4000,
            easing: 'easeInOutBounce',
            delay: 500,
            endDelay: 3000,
        })
    },
}, '-=300');

cardsContainerMobile.tlAnimation = anime.timeline({
    autoplay: false
}).add({
    targets: cardsMobile,
    opacity: 1,
    translateY: 0,
    easing: 'cubicBezier(0.285, 0.590, 0.020, 1.025)',
    duration: 1400,
    delay: anime.stagger(200),
});

const iO = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.tlAnimation.play();
            observer.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px 0px -15% 0px',
});

iO.observe(cardsContainer);
iO.observe(cardsContainerMobile);