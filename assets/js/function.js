document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('.scroll-link');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const yOffset = 2000;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
    });
});

