const cont = document.querySelector('.container');
const left = document.querySelector('#Left');
const right = document.querySelector('#Right');
const svg = document.querySelector('.arrows svg');
const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const slide3 = document.querySelector('.slide3');
const tl = gsap.timeline({ paused: true, defaults: { ease: Power3.easeInOut } });

window.addEventListener('load', () => {
    cont.style.visibility = 'visible';
    tl
        .to(slide1, { clipPath: 'polygon(7% 7%, 93% 7%, 93% 93%, 7% 93%)' })
        .to(slide1, { clipPath: 'polygon(93% 7%, 93% 7%, 93% 93%, 93% 93%)' }, '+=1')
        .to(slide2, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', zIndex: 1 }, '+=1')
        .addPause()
        .to(slide2, { clipPath: 'polygon(7% 7%, 93% 7%, 93% 93%, 7% 93%)' }, '+=1')
        .to(slide2, { clipPath: 'polygon(93% 7%, 93% 7%, 93% 93%, 93% 93%)', zIndex: -1 }, '+=1.5')
        .to(slide3, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', zIndex: 1 }, '+=1')
        .addPause()

    left.addEventListener('click', () => {
        tl.reverse()
    });
    right.addEventListener('click', () => {
        tl.play()
    });
})