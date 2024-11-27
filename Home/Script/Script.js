const section = document.querySelector('.name-section-text');
const btn_section = document.querySelectorAll('.button-menu');
const home = document.querySelector('.Home-main');
const aboutus = document.querySelector('.about-main');
const groups = document.querySelectorAll('.Chat-section');

btn_section.forEach(button => {
    button.addEventListener('click', function() {
        aboutus.classList.add('UnActive');
        groups.forEach(group => group.classList.add('UnActive'));
        home.classList.add('UnActive');
        if (button.classList.contains('Chat-Group')) {
            section.textContent = 'Chat Group';
            groups.forEach(group => group.classList.remove('UnActive'));//Вау понял зачем нужен forEach =D
        } else if (button.classList.contains('About-us')) {
            section.textContent = 'About us';
            aboutus.classList.remove('UnActive');
        } else if (button.classList.contains('Home')) {
            section.textContent = 'Home';
            home.classList.remove('UnActive');
        } else if (button.classList.contains('Video-Training')) {
            section.textContent = 'Video Training';
            home.classList.remove('UnActive');
        } else if (button.classList.contains('Help-from-experts')) {
            section.textContent = 'Help from experts';
            home.classList.remove('UnActive');
        }
    });
});
