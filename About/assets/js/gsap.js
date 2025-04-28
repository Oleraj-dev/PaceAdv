document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(
        Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable,
        MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin,
        RoughEase, ExpoScaleEase, SlowMo, CustomEase
    );

    const sections = gsap.utils.toArray(".slide");

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
        .to(img, { scale: 1.2, ease: "power2.out" })
        .to(img, { scale: 1, ease: "power2.in" });
    });

});
