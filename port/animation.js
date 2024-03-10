
document.addEventListener('mousemove', (currPosition) => {
    gsap.to('#myCursor', {
        x: currPosition.x,
        y: currPosition.y,
        duration: 0.5,
    })
});

let li = document.querySelectorAll('.menuList');

li.forEach(element => {
    element.addEventListener('mouseover', (e) => {
        gsap.to('#myCursor', {
            scale: 1.8,
            duration: 0.3,
        })
    })
});

li.forEach(element => {
    element.addEventListener('mouseleave', (e) => {
        gsap.to('#myCursor', {
            scale: 1,
            duration: 0.3,
        })
    })
});


let icons = document.querySelectorAll('i');

icons.forEach(element => {
    element.addEventListener('mouseover', (e) => {
        gsap.to('#myCursor', {
            scale: 1.8,
            duration: 0.3,
        })
    })
});

icons.forEach(element => {
    element.addEventListener('mouseleave', (e) => {
        gsap.to('#myCursor', {
            scale: 1,
            duration: 0.3,
        })
    })
});

let logo = document.querySelector('.logo');

logo.addEventListener('mouseover', (e) => {
    gsap.to('#myCursor', {
        scale: 2,
        duration: 0.3,
    })
})

logo.addEventListener('mouseleave', (e) => {
    gsap.to('#myCursor', {
        scale: 1,
        duration: 0.3,
    })
})

let tl = gsap.timeline();

tl.to('#loader', {
    delay: 1,
    duration: 3,
    left: "0%",
})
.to('#upperLoader', {
    delay: 1,
    duration: 1,
    top: "-51%",
}, 'loading')
.to('#lowerLoader', {
    delay: 1,
    duration: 1,
    bottom: "-51%",
}, 'loading')
.to('#loader', {
    delay: "1",
    left: "500%",
}, 'loading')
.to('#upperText', {
    delay: 1.2,
    duration: 2,
    bottom: "-50%",
}, 'loading')
.to('#lowerText', {
    delay: 1.2,
    duration: 2,
    bottom: "-50%",
}, 'loading')
.from('header', {
    duration: 2,
    top: '100vh',
}, 'loading')
.to('section', {
    display: "block",
}, 6)
.to('#myLoader', {
    display: 'none',
}, 7);


gsap.to('.sliderTwo',{
    left: '-100%',
    duration: 0.6,
    scrollTrigger: {
        trigger: '.sliderTwo',
        scroller: 'body',
        start: 'top -160%',
    }
}, 'a');
gsap.to('.slider', {
    delay: 0.2,
    left: '-100%',
    duration: 0.5,
}, 'a');
gsap.from('.slider-content', {
    delay: 0.2,
    duration: 1,
    y: 80,
}, 'a');