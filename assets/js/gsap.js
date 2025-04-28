document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(
        Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable,
        MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin,
        RoughEase, ExpoScaleEase, SlowMo, CustomEase
    );

    const sections = gsap.utils.toArray(".slides");

    const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 0.16),
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
