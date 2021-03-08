import anime from 'animejs/lib/anime.es';
import './js/cardsAnime';

const box = document.querySelector('.click-and-move');
const points = box.querySelectorAll('div');

function animate(evt) {
    let x = Math.round(Math.random() * 100);
    let y = Math.round(Math.random() * 100);

    anime({
        targets: points,
        left: `${x}%`,
        top: `${y}%`,
        translateX: function (el, i) {
            return anime.random(-150, 150)
        },
        translateY: function (el, i) {
            return anime.random(-150, 150)
        },
        easing: 'easeInOutQuint',
        delay: anime.stagger(60),
        complete: animate,
    })
};

animate();