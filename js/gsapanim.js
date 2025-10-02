gsap.registerPlugin(ScrollTrigger) 

gsap.from("#heroTitle",
    { 
        y: -700, 
        duration: 2,
        opacity:0,
        ease: "bounce",
    }
);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "27% 80%",
        end: "32% 80%",
        scrub: 1,
        markers:true
    }
});

let mobileWidthMediaQuery = window.matchMedia('(max-width: 768px)')
console.log(mobileWidthMediaQuery);


function changeMarkers(isMobileSize) {
    if (isMobileSize){
        tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "45% 80%",
                end: "32% 80%",
                scrub: 1,
                markers:true
            }
        });
    }
}

changeMarkers(mobileWidthMediaQuery.matches)

mobileWidthMediaQuery.addEventListener('resize', function (event) {
    changeMarkers(event.matches)
})

const split = new SplitText("#aboutText", { type: "chars", mask: "chars" });

tl.from(split.chars, {
    duration: 1,
    x: -20,
    autoAlpha: 0,
    stagger: 0.07
});
