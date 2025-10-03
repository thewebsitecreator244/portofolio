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

mm.add("(min-width: 1200px) and (max-width:1440px)", () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "20% 50%",
            end: "30% 50%",
            scrub: 1,
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

mm.add("(min-width: 1023px) and (max-width:1199px)", () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "25% 50%",
            end: "35% 50%",
            scrub: 1,

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

