document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('.scroll-link');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const yOffset = 400;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
    });
    const team = document.querySelectorAll('.scroll-team');
    team.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const yOffset = 1900;
            var current = window.scrollY;
            console.log(current);
            const targetPosition = target.getBoundingClientRect().top + yOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
    });
    const solution = document.querySelectorAll('.scroll-solution');
    solution.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const yOffset = 1250;
            var current = window.scrollY;
            console.log(current);
            const targetPosition = target.getBoundingClientRect().top + yOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
    });
    const scrolls = document.querySelectorAll('.scroll-page');
    scrolls.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const yOffset = 150;
            var current = window.scrollY;
            console.log(current);
            const targetPosition = target.getBoundingClientRect().top + yOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
    });
});

