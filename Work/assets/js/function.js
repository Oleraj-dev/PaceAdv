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

    const clients = document.querySelectorAll('.scroll-clients');
    clients.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const yOffset = 0;
            var current = window.scrollY;
            console.log(current);
            const targetPosition = target.getBoundingClientRect().top + yOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
    });
    const industry = document.querySelectorAll('.scroll-industry');
    industry.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const yOffset = 820;
            var current = window.scrollY;
            console.log(current);
            const targetPosition = target.getBoundingClientRect().top + yOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
    });

    const studio = document.querySelectorAll('.scroll-studio');
    studio.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const yOffset = 1260;
            var current = window.scrollY;
            console.log(current);
            const targetPosition = target.getBoundingClientRect().top + yOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
    });

    //Button Click for button
    const mainCat = document.getElementById("main-cat");
    const catToHide = document.getElementById("cat-to-hide");
    const subCatList = document.getElementById("sub-cat-list");
    catToHide.style.display = "block";
    subCatList.style.display = "none";

    mainCat.addEventListener("click", function () {
        const isCatToHideVisible = window.getComputedStyle(catToHide).display !== "none";

        if (isCatToHideVisible) {
            catToHide.style.display = "none";
            subCatList.style.display = "block";
        } else {
            catToHide.style.display = "block";
            subCatList.style.display = "none";
        }
    });

    //Hover Image
    const mapping = {
        cat01: 'realstate',
        cat02: 'healthcare',
        cat03: 'technology',
        cat04: 'hospitality',
        cat05: 'education',
        cat06: 'non-profit',
        cat07: 'economic',
        cat08: 'corporate',
        cat0A: 're-commercial',
        cat0B: 're-residential',
        cat0C: 're-retail'
    };

    const allImages = document.querySelectorAll(".image-to-show img");
    const defaultImg = document.querySelector(".defaults-img");

    Object.keys(mapping).forEach(catId => {
        const element = document.getElementById(catId);
        const imageClass = mapping[catId];
        const targetImage = document.querySelector("." + imageClass);

        element.addEventListener("mouseenter", () => {
            allImages.forEach(img => img.style.display = "none");
            if (targetImage) targetImage.style.display = "block";
        });

        element.addEventListener("mouseleave", () => {
            allImages.forEach(img => img.style.display = "none");
            defaultImg.style.display = "block";
        });
    });
});

