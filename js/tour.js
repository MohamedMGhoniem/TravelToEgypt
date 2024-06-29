


const activities = document.querySelectorAll('.tour-activity');
const btnSwiperListR = document.querySelector('.activities-swiper-right')
const btnSwiperListL = document.querySelector('.activities-swiper-left')
const daySwiperInner = document.querySelector('.days-swiper-inner')
let lengthOfActivities = activities.length;
let numberOfActivities = (lengthOfActivities * -100) + 100;
let positionvalue = 0;
let widthOfInner = 100 / (lengthOfActivities);

daySwiperInner.style.width = `${widthOfInner}%`



btnSwiperListR.addEventListener('click', function () {
    btnSwiperListL.disabled = false;
    btnSwiperListL.style.pointerEvents = 'auto';
    if (positionvalue == numberOfActivities + 100) {
        btnSwiperListR.disabled = true;
        btnSwiperListR.style.pointerEvents = 'none';
    }
    positionvalue -= 100;
    activities.forEach(function (act) {
        let transformValueSwiper = `translateX(${positionvalue}%)`;
        act.style.transform = transformValueSwiper;
        daySwiperInner.style.transform = `translateX(${-positionvalue}%)`;
    })
});


btnSwiperListL.addEventListener('click', function () {
    btnSwiperListR.disabled = false;
    btnSwiperListR.style.pointerEvents = 'auto';
    if (positionvalue == 0) {
        btnSwiperListL.disabled = true;
        btnSwiperListL.style.pointerEvents = 'none';
    }
    positionvalue += 100;
    activities.forEach(function (act) {
        let transformValueSwiper = `translateX(${positionvalue}%)`;
        act.style.transform = transformValueSwiper;
        daySwiperInner.style.transform = `translateX(${-positionvalue}%)`;
    })
});


///////////////////////////////////
// lists

const pricingContent = document.querySelector('.pricing-content');
const datesContent = document.querySelector('.dates-content');
const airlinesContent = document.querySelector('.airlines-content');
const hotelsContent = document.querySelector('.hotels-content');


const btnPricing = document.querySelector('.show-pricing');
const btnDates = document.querySelector('.show-dates');
const btnHotels = document.querySelector('.show-hotels');
const btnairlines = document.querySelector('.show-airlines');


btnPricing.addEventListener('click', function () {
    pricingContent.classList.toggle('smooth-hide');
})

btnairlines.addEventListener('click', function () {
    airlinesContent.classList.toggle('smooth-hide');
})

btnHotels.addEventListener('click', function () {
    hotelsContent.classList.toggle('smooth-hide');
})

btnDates.addEventListener('click', function () {
    datesContent.classList.toggle('smooth-hide');
})


////////////////////////////////////////////////
// booking

const tourFooter = document.querySelector(".main-footer")
const bookingBtn = document.querySelector(".booking-btn-inner")
const bookingContainer = document.querySelector('.booking-btn');
const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];

        if (ent.isIntersecting === false) {
            bookingContainer.classList.remove('booking-btn-tranform');
            bookingBtn.style.position = 'fixed'
        }

        if (ent.isIntersecting === true) {
            bookingBtn.style.position = 'absolute'
            bookingContainer.classList.add('booking-btn-tranform');
        }
    },
    {
        // in the viewport
        root: null,
        threshold: 0,
        rootMargin: '-80px',
    })
obs.observe(tourFooter);

///////////////////////////////////////
// pricing 

const luxuryLink = document.querySelector('.luxury-link');
const luxuryPack = document.getElementById('luxury-pack');
luxuryLink.addEventListener('click', function (event) {
    event.preventDefault();
    luxuryPack.classList.toggle('smooth-hide')

})

const deluxeLink = document.querySelector('.deluxe-link');
const deluxePack = document.getElementById('deluxe-pack');
deluxeLink.addEventListener('click', function (event) {
    event.preventDefault();
    deluxePack.classList.toggle('smooth-hide')
})


const standardLink = document.querySelector('.standard-link');
const standardPack = document.getElementById('standard-pack');
standardLink.addEventListener('click', function (event) {
    event.preventDefault();
    standardPack.classList.toggle('smooth-hide');
})

const closePack = document.querySelectorAll('.close-pack');

closePack.forEach(function (close) {
    close.addEventListener('click', function () {
        if (!standardPack.classList.contains('smooth-hide')) {
            standardPack.classList.add('smooth-hide')
        }
        if (!deluxePack.classList.contains('smooth-hide')) {
            deluxePack.classList.add('smooth-hide')
        }
        if (!luxuryPack.classList.contains('smooth-hide')) {
            luxuryPack.classList.add('smooth-hide')
        }
    })
})


// document.addEventListener('click', function () {
//     if (!luxuryPack.classList.contains('smooth-hide')) {
//         luxuryPack.classList.add('smooth-hide');
//     }
// });


// else if (!deluxePack.classList.contains('smooth-hide')) {
//     deluxePack.classList.add('smooth-hide');
// } else if (!standardPack.classList.contains('smooth-hide')) {
//     standardPack.classList.add('smooth-hide');
// }