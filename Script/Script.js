const signin = document.querySelector('.sign-in');
const login = document.querySelector('.log-in');
const formBox = document.querySelector('.form-box');

login.addEventListener('click', function() {
    formBox.classList.add('active');
});

signin.addEventListener('click', function() {
    formBox.classList.remove('active');
});
