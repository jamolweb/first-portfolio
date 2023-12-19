let mm = gsap.matchMedia();

mm.add("(max-width: 2300px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "50",
        y: "-200",
        scale: "1.8",
        ease: Expo.easeInOut
    })

    TweenMax.to(".block-2", 2, {
        x: "-470",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })

    TweenMax.to(".block-3", 2, {
        x: "270",
        y: "-220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "-20",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".my-img", 2, {
        x: "0",
        y: "-40",
        opacity: 1,
        ease: Power2.easeInOut
    })
    TweenMax.from(".bg-text h1", 2, {
        delay: 0.5,
        opacity: 0,
        y: 80,
        ease: Expo.easeInOut
    })
    TweenMax.to(".bottomnav", 2, {
        delay: 0.5,
        opacity: 1,
        y: 99,
        ease: Expo.easeInOut
    })
})

mm.add("(max-width: 2256px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "-70",
        y: "-200",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-3", 2, {
        x: "330",
        y: "-220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "80",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
})

mm.add("(max-width: 2100px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "-160",
        y: "-200",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "105",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
})

mm.add("(max-width: 1988px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "-40",
        y: "-200",
        scale: "1.8",
        ease: Expo.easeInOut
    })

    TweenMax.to(".block-2", 2, {
        x: "-370",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })

    TweenMax.to(".block-3", 2, {
        x: "300",
        y: "-220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "120",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
})

mm.add("(max-width: 1700px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "-60",
        y: "-200",
        scale: "1.8",
        ease: Expo.easeInOut
    })

    TweenMax.to(".block-2", 2, {
        x: "-330",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })

    TweenMax.to(".block-3", 2, {
        x: "300",
        y: "-220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "140",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
})
mm.add("(max-width: 1570px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "60",
        y: "-200",
        scale: "1.8",
        ease: Expo.easeInOut
    })

    TweenMax.to(".block-2", 2, {
        x: "-330",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-3", 2, {
        x: "300",
        y: "-220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "140",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
})