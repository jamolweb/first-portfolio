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
        y: 190,
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
        x: "220",
        y: "-220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "10",
        y: "210",
        scale: "1.8",
        ease: Expo.easeInOut
    })
})
mm.add("(max-width: 1700px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "-80",
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
        x: "160",
        y: "-220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "10",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.from(".bg-text h1", 2, {
        delay: 0.5,
        opacity: 0,
        y: 190,
        ease: Expo.easeInOut
    })
    TweenMax.to(".bg-text h1", 2, {
        delay: 0.5,
        opacity: 1,
        y: 0,
        ease: Expo.easeInOut
    })
})
mm.add("(max-width: 1570px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "60",
        y: "-222",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-2", 2, {
        x: "-270",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-3", 2, {
        x: "160",
        y: "-220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "10",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".bottomnav", 2, {
        delay: 0.5,
        opacity: 1,
        y: 200,
        ease: Expo.easeInOut
    })
})
mm.add("(max-width: 1250px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "60",
        y: "-222",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-2", 2, {
        x: "-240",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-3", 2, {
        x: "160",
        y: "-220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "10",
        y: "220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".bottomnav", 2, {
        delay: 0.5,
        opacity: 1,
        y: 200,
        ease: Expo.easeInOut
    })
})
mm.add("(max-width: 1000px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "110",
        y: "50",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-2", 2, {
        x: "-240",
        y: "-220",
        scale: "1.8",
        opacity: 0,
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-3", 2, {
        x: "160",
        opacity: 0,
        y: "-220",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "-125%",
        y: "50",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".bg-text h1", 2, {
        delay: 0.5,
        opacity: 1,
        y: 80,
        ease: Expo.easeInOut
    })
    TweenMax.to(".bottomnav", 2, {
        delay: 0.5,
        opacity: 1,
        y: 240,
        x: -80,
        ease: Expo.easeInOut
    })
    TweenMax.to(".my-img2", 2, {
        opacity: 1,
        y: 20,
    })
})
mm.add("(max-width: 800px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "50",
        y: "10",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "-170",
        y: "10",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".bottomnav", 2, {
        delay: 0.5,
        opacity: 1,
        y: 200,
        x: -80,
        ease: Expo.easeInOut
    })
})
mm.add("(max-width: 628px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "80",
        y: "10",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "-140",
        y: "10",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".bottomnav", 2, {
        delay: 0.5,
        opacity: 1,
        y: 200,
        x: -80,
        ease: Expo.easeInOut
    })
    TweenMax.to(".bg-text h1", 2, {
        delay: 0.5,
        opacity: 1,
        y: 120,
        ease: Expo.easeInOut
    })
})
mm.add("(max-width: 574px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "80",
        y: "-30",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "-100",
        y: "-30",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".bottomnav", 2, {
        delay: 0.5,
        opacity: 1,
        y: 150,
        x: -20,
        ease: Expo.easeInOut
    })
    TweenMax.to(".my-img2", 2, {
        opacity: 1,
        y: 20,
    })
})
mm.add("(max-width: 480px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "50",
        y: "-30",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "-90",
        y: "-30",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".bottomnav", 2, {
        delay: 0.5,
        opacity: 1,
        y: 120,
        x: -20,
        ease: Expo.easeInOut
    })
    TweenMax.to(".my-img2", 2, {
        opacity: 1,
        y: 20,
    })
})
mm.add("(max-width: 370px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "50",
        y: "-30",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "-90",
        y: "-30",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".bottomnav", 2, {
        delay: 0.5,
        opacity: 1,
        y: 100,
        ease: Expo.easeInOut
    })
    TweenMax.to(".my-img2", 2, {
        opacity: 1,
        y: -20,
    })
})
mm.add("(max-width: 356px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "70",
        y: "-60",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "-60",
        y: "-60",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".bottomnav", 2, {
        delay: 0.5,
        opacity: 1,
        y: 80,
        x: 20,
        ease: Expo.easeInOut
    })
    TweenMax.to(".my-img2", 2, {
        opacity: 1,
        y: -20,
    })
})
mm.add("(max-width: 300px)", () => {
    TweenMax.to(".block-1", 2, {
        x: "60",
        y: "-90",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".block-4", 2, {
        x: "-60",
        y: "-90",
        scale: "1.8",
        ease: Expo.easeInOut
    })
    TweenMax.to(".bottomnav", 2, {
        delay: 0.5,
        opacity: 1,
        y: 40,
        x: -2,
        ease: Expo.easeInOut
    })
    TweenMax.to(".my-img2", 2, {
        opacity: 1,
        y: -20,
    })
})


window.addEventListener("keydown", (e) => e.key === "Enter" && document.location.reload())