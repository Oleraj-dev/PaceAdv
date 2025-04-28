document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(
        Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable,
        MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin,
        RoughEase, ExpoScaleEase, SlowMo, CustomEase
    );

    const sections = gsap.utils.toArray(".slide");

    const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 0.001),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-sliders",
            pin: ".main",
            pinSpacing: true,
            scrub: 1,
            end: "+=3000",
            onUpdate: (self) => {
                const totalScrollWidth = document.querySelector(".main").scrollWidth;
                const progress = self.progress; // 0 to 1
                const fakeScrollX = progress * totalScrollWidth;
                console.log("Horizontal Scroll Value:", fakeScrollX.toFixed(1));
                console.log(document.querySelector(".initail-page"));
                const initialPage = document.querySelector(".initail-page");
                if (initialPage) {
                    initialPage.style.zIndex = fakeScrollX > 100 ? "0" : "10";
                }
            }
        }
    });

    // Smooth zoom in and out
    gsap.utils.toArray(".zoom-image").forEach((img) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: img,
                start: "left 75%",
                end: "right 25%",
                scrub: true,
                containerAnimation: scrollTween,
                markers: false
            }
        })
            .to(img, { scale: 1.1, ease: "power2.out" })
            .to(img, { scale: 1, ease: "power2.in" });
    });

});
