gsap.registerPlugin(ScrollTrigger) 

gsap.from("#heroTitle",
    { 
        y: -700, 
        duration: 2,
        opacity:0,
        ease: "bounce",
    }
);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#aboutMe",
        start: "27% 80%",
        end: "32% 80%",
        scrub: 1,
        markers:true
    }
});

const split = new SplitText("#aboutText", { type: "chars", mask: "chars" });

tl.from(split.chars, {
    duration: 1,
    x: -20,
    autoAlpha: 0,
    stagger: 0.07
});
