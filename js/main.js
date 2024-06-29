///////////////////////
// navigator

const menuNavigator = document.querySelector('.menu-navigator');
const menuItems = document.querySelectorAll('.menu-item-link');
const openIcon = document.querySelector('.open-menu');
const closeIcon = document.querySelector('.close-menu');
const menuBtn = document.querySelector('.side-menu');

menuBtn.addEventListener('click', function () {
    menuNavigator.classList.toggle('nav-open')
    if (menuNavigator.classList.contains('nav-open')) {
        openIcon.style.visibility = 'hidden';
        closeIcon.style.visibility = 'visible';
        closeIcon.style.transform = 'rotate(90deg)';
    }
    else if (!menuNavigator.classList.contains('nav-open')) {
        closeIcon.style.transform = 'rotate(0deg)';
        closeIcon.style.visibility = 'hidden';
        openIcon.style.visibility = 'visible';
    }
})

menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        if (menuNavigator.classList.contains('nav-open')) {
            menuNavigator.classList.remove('nav-open');
            closeIcon.style.transform = 'rotate(0deg)';
            closeIcon.style.visibility = 'hidden';
            openIcon.style.visibility = 'visible';
        }
    })
})