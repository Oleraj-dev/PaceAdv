document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase)
    let sections = gsap.utils.toArray(".slide");
    gsap.to(sections, {
        xPercent: -100 * (sections.length - .35),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-sliders",
            pin: ".main",
            pinSpacing: true,
            scrub: 1,
            end: "+=3000",
        }
    });
});

