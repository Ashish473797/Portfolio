
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

// for project one 
gsap.to('.projectOneInnerSlider', {
    delay: 0.2,
    left: '-100%',
    duration: 0.5,
    scrollTrigger: {
        trigger: '.projectOneInnerSlider',
        scroller: 'body',
        start: 'top -160%',
    }
},);
gsap.to('.projectOneOuterSlider',{
    left: '-100%',
    duration: 0.6,
    scrollTrigger: {
        trigger: '.projectOneOuterSlider',
        scroller: 'body',
        start: 'top -160%',
    }
},);
gsap.from('.projectOneSlider-content', {
    delay: 0.2,
    duration: 1,
    y: 80,
    scrollTrigger: {
        trigger: '.projectOneSlider-content',
        scroller: 'body',
        start: 'top -160%',
    }
},);


// for project two 
gsap.to('.projectTwoInnerSlider', {
    delay: 0.2,
    left: '-100%',
    duration: 0.5,
    scrollTrigger: {
        trigger: '.projectTwoInnerSlider',
        scroller: 'body',
        start: 'top -180%',
    }
},);
gsap.to('.projectTwoOuterSlider',{
    left: '-100%',
    duration: 0.6,
    scrollTrigger: {
        trigger: '.projectTwoOuterSlider',
        scroller: 'body',
        start: 'top -180%',
    }
},);
gsap.from('.projectTwoSlider-content', {
    delay: 0.2,
    duration: 1,
    y: 80,
    scrollTrigger: {
        trigger: '.projectTwoSlider-content',
        scroller: 'body',
        start: 'top -180%',
    }
},);


// for project Three
gsap.to('.projectThreeInnerSlider', {
    delay: 0.2,
    left: '-100%',
    duration: 0.5,
    scrollTrigger: {
        trigger: '.projectThreeInnerSlider',
        scroller: 'body',
        start: 'top -200%',
    }
},);
gsap.to('.projectThreeOuterSlider',{
    left: '-100%',
    duration: 0.6,
    scrollTrigger: {
        trigger: '.projectThreeOuterSlider',
        scroller: 'body',
        start: 'top -200%',
    }
},);
gsap.from('.projectThreeSlider-content', {
    delay: 0.2,
    duration: 1,
    y: 80,
    scrollTrigger: {
        trigger: '.projectThreeSlider-content',
        scroller: 'body',
        start: 'top -200%',
    }
},);


// project four 
gsap.to('.projectFourInnerSlider', {
    delay: 0.2,
    left: '-100%',
    duration: 0.5,
    scrollTrigger: {
        trigger: '.projectFourInnerSlider',
        scroller: 'body',
        start: 'top -220%',
    }
},);
gsap.to('.projectFourOuterSlider',{
    left: '-100%',
    duration: 0.6,
    scrollTrigger: {
        trigger: '.projectFourOuterSlider',
        scroller: 'body',
        start: 'top -220%',
    }
},);
gsap.from('.projectFourSlider-content', {
    delay: 0.2,
    duration: 1,
    y: 80,
    scrollTrigger: {
        trigger: '.projectFourSlider-content',
        scroller: 'body',
        start: 'top -220%',
    }
},);


// for project Five
gsap.to('.projectFiveInnerSlider', {
    delay: 0.2,
    left: '-100%',
    duration: 0.5,
    scrollTrigger: {
        trigger: '.projectFiveInnerSlider',
        scroller: 'body',
        start: 'top -240%',
    }
},);
gsap.to('.projectFiveOuterSlider',{
    left: '-100%',
    duration: 0.6,
    scrollTrigger: {
        trigger: '.projectFiveOuterSlider',
        scroller: 'body',
        start: 'top -240%',
    }
},);
gsap.from('.projectFiveSlider-content', {
    delay: 0.2,
    duration: 1,
    y: 80,
    scrollTrigger: {
        trigger: '.projectFiveSlider-content',
        scroller: 'body',
        start: 'top -240%',
    }
},);