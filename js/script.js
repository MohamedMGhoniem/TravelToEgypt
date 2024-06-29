



const btnSecondEl = document.querySelector('.second-gallery-btn');
const SectionEl = document.querySelector('.gallery');

btnSecondEl.addEventListener('click', function () {
    SectionEl.classList.remove('third-gallery')
    SectionEl.classList.add('second-gallery');
});

const btnFirstEl = document.querySelector('.first-gallery-btn');

btnFirstEl.addEventListener('click', function () {
    if (SectionEl.classList.contains('second-gallery') || SectionEl.classList.contains('third-gallery')) {
        SectionEl.classList.remove('second-gallery');
        SectionEl.classList.remove('third-gallery');
    }
});

const btnThirdEl = document.querySelector('.third-gallery-btn');

btnThirdEl.addEventListener('click', function () {
    SectionEl.classList.remove('second-gallery')
    SectionEl.classList.add('third-gallery');
});



const sectionHeroEl = document.querySelector(".section-hero")
const mainHeaderEl = document.querySelector(".main-header")
const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
            document.body.classList.add('sticky')
            mainHeaderEl.style.backgroundColor = '#2f291b'
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove('sticky')
            mainHeaderEl.style.backgroundColor = 'transparent'
        }
    },
    {
        // in the viewport
        root: null,
        threshold: 0,
        rootMargin: '-80px',
    })
obs.observe(sectionHeroEl);





const tourCtrlBtnR = document.querySelector('.right-swiper-btn');
const tourCtrlBtnL = document.querySelector('.left-swiper-btn');
const swiperPar = document.querySelector('.swiper-inner')
const allCards = document.querySelectorAll('.tours-box')
// console.log(allCards);
tourCtrlBtnR.addEventListener('click', function () {

    allCards.forEach(function (card) {

        if (card.classList.contains('card-1')) {
            card.classList.remove('card-1');
            card.classList.add('card-7');
        }
        if (card.classList.contains('card-2')) {

            card.classList.remove('card-2');
            card.classList.add('card-1');
        }
        if (card.classList.contains('card-3')) {

            card.classList.remove('card-3');
            card.classList.add('card-2');
        }
        if (card.classList.contains('card-4')) {

            card.classList.remove('card-4');
            card.classList.add('card-3');
        }
        if (card.classList.contains('card-5')) {

            card.classList.remove('card-5');
            card.classList.add('card-4');

        }
        if (card.classList.contains('card-6')) {

            card.classList.remove('card-6');
            card.classList.add('card-5');
        }

        if (card.classList.contains('card-7')) {

            card.classList.remove('card-7');
            card.classList.add('card-6');
        }


    })


});


const box = document.querySelector('.swiper-inner');
let positionX = 0;

tourCtrlBtnR.addEventListener('click', function () {
    positionX += 100; // Move 100px to the right on each click
    if (positionX > 500) {
        positionX = 0;
        tourCtrlBtnR.style.backgroundColor = 'transparent'
    }
    let transformValue = `translateX(${positionX}%)`;

    box.style.transform = transformValue;
});


// const tourCtrlBtnR = document.querySelector('.right-swiper-btn');
// const tourCtrlBtnL = document.querySelector('.left-swiper-btn');
// const swiperPar = document.querySelector('.swiper-inner')
// const allCards = document.querySelectorAll('.tours-box')
// let transformVal = '-100%'




const testCtrl = document.querySelector('.testimonial-btn');
const allTest = document.querySelectorAll('.test-img')
const allText = document.querySelectorAll('.testimonial-text-inner')


testCtrl.addEventListener('click', function () {
    allTest.forEach(function (tes) {
        if (tes.classList.contains('first-testimonial')) {

            tes.classList.remove('first-testimonial');
            tes.classList.add('last-testimonial');
        }
        if (tes.classList.contains('second-testimonial')) {

            tes.classList.remove('second-testimonial');
            tes.classList.add('first-testimonial');
        }
        if (tes.classList.contains('third-testimonial')) {

            tes.classList.remove('third-testimonial');
            tes.classList.add('second-testimonial');
        }
        if (tes.classList.contains('fourth-testimonial')) {

            tes.classList.remove('fourth-testimonial');
            tes.classList.add('third-testimonial');
        }
        if (tes.classList.contains('last-testimonial')) {

            tes.classList.remove('last-testimonial');
            tes.classList.add('fourth-testimonial');
        }
    })
    allText.forEach(function (tex) {
        if (tex.classList.contains('first-text')) {

            tex.classList.remove('first-text');
            tex.classList.add('last-text');
        }
        if (tex.classList.contains('second-text')) {

            tex.classList.remove('second-text');
            tex.classList.add('first-text');
        }
        if (tex.classList.contains('third-text')) {

            tex.classList.remove('third-text');
            tex.classList.add('second-text');
        }
        if (tex.classList.contains('fourth-text')) {

            tex.classList.remove('fourth-text');
            tex.classList.add('third-text');
        }
        if (tex.classList.contains('last-text')) {

            tex.classList.remove('last-text');
            tex.classList.add('fourth-text');
        }
    })
});





