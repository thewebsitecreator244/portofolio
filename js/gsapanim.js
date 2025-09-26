gsap.registerPlugin(ScrollTrigger) 

gsap.from("#heroTitle",
    { 
        y: -700, 
        duration: 2,
        opacity:0,
        ease: "bounce",
    }
);
// Create timeline with ScrollTrigger
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#aboutMe",
        start: "80%",   // animation starts when #aboutMe hits 80% of viewport
        end: "bottom 80%",       // ends after 500px scroll
        scrub: 1,           // smooth scrubbing
        once: true,
        markers:true          // only run once
    }
});

// SplitText setup
let split = new SplitText("#aboutText", { type: "chars", mask: "chars" });

// Animate characters
tl.from(split.chars, {
    duration: 1,
    x: -20,
    autoAlpha: 0,
    stagger: 0.07
});
