// document.addEventListener("DOMContentLoaded", (event) => {
//     gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase)
//     let sections = gsap.utils.toArray(".slide");
//     gsap.to(sections, {
//         xPercent: -100 * (sections.length - .46),
//         ease: "none",
//         scrollTrigger: {
//             trigger: ".horizontal-sliders",
//             pin: ".main",
//             pinSpacing: true,
//             scrub: 1,
//             end: "+=3000",
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase);

    let sections = gsap.utils.toArray(".slide");

    // Determine screen width
    const screenWidth = window.innerWidth;

    // Determine offset based on screen size
    let offsetFactor = 0.46;
    if (screenWidth < 1920 && screenWidth >= 1440) {
        offsetFactor = 0.30;
    }if (screenWidth < 1440 && screenWidth >= 1280) {
        offsetFactor = 0.28;
    }
    if (screenWidth < 1280 && screenWidth >= 1024) {
        offsetFactor = 0.15;
    }
    // GSAP scroll animation
    gsap.to(sections, {
        xPercent: -100 * (sections.length - offsetFactor),
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

