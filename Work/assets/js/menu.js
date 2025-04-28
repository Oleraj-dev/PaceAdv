document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("myMenu");
    const menubtn = document.getElementById("menubtn");
    const closeButton = document.querySelector(".close");
    menubtn.addEventListener("click", function () {
        menu.classList.add("show");
        menu.classList.remove("hide");
        menu.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        menu.classList.add("hide");
        menu.classList.remove("show");
        menu.addEventListener(
            "transitionend",
            () => {
                if (menu.classList.contains("hide")) {
                    menu.style.display = "none";
                }
            },
            { once: true }
        );
    });

    menu.addEventListener("click", function (e) {
        if (e.target === menu) {
            closeButton.click();
        }
    });
    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeButton.click();
        });
    });
});
