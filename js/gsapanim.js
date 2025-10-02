gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

gsap.from("#heroTitle",
    {
        y: -700,
        duration: 2,
        opacity:0,
        ease: "bounce",
    }
);

mm.add("(max-width: 767px)", () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "top 90%",
            end: "bottom 20%",
            scrub: 1,
            markers: true
        }
    });
    const split = new SplitText("#aboutText", { type: "chars", mask: "chars" });
    tl.from(split.chars, {
        duration: 1,
        x: -20,
        autoAlpha: 0,
        stagger: 0.07
    });
});

mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "27% 85%",
            end: "32% 85%",
            scrub: 1,
            markers: true
        }
    });
    const split = new SplitText("#aboutText", { type: "chars", mask: "chars" });
    tl.from(split.chars, {
        duration: 1,
        x: -20,
        autoAlpha: 0,
        stagger: 0.07
    });
});

mm.add("(min-width: 1024px)", () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "27% 80%",
            end: "32% 80%",
            scrub: 1,
            markers: true
        }
    });
    const split = new SplitText("#aboutText", { type: "chars", mask: "chars" });
    tl.from(split.chars, {
        duration: 1,
        x: -20,
        autoAlpha: 0,
        stagger: 0.07
    });
});