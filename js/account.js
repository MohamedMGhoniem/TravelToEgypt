////////////////////////////////////////////////////////////////
// account 

////////////////////////

const loginBtn = document.querySelector('.account-control-btn-L');
const signupBtn = document.querySelector('.account-control-btn-R');
const loginFormContainer = document.querySelector('.log-in-forms-container');
const signupFormContainer = document.querySelector('.sign-up-forms-container')

signupBtn.addEventListener('click', function () {
    if (!loginFormContainer.classList.contains('smooth-hide'))
        loginFormContainer.classList.add('smooth-hide');
    signupFormContainer.classList.toggle('smooth-hide')
})

loginBtn.addEventListener('click', function () {
    if (!signupFormContainer.classList.contains('smooth-hide'))
        signupFormContainer.classList.add('smooth-hide');
    loginFormContainer.classList.toggle('smooth-hide');
});

const restBtn = document.querySelector('.forgot-pass-btn');
const restForm = document.querySelector('.forgot-pass-form')
restBtn.addEventListener('click', function () {
    restForm.classList.toggle('smooth-hide');
});

