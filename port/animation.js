let myCursor = document.querySelector('#myCursor');

window.addEventListener('mousemove', (currPosition) => {
    myCursor.style.transform = `translate(${currPosition.clientX - 25}px, ${currPosition.clientY - 25}px)`; 
})


let tl = gsap.timeline();

tl.to('#loader', {
    delay: 1,
    duration: 4,
    left: "0%",
})
.to('#upperLoader', {
    delay: 1,
    duration: 1,
    top: "-51%",
}, 'loader')
.to('#lowerLoader', {
    delay: 1,
    duration: 1,
    bottom: "-51%",
}, 'loader')
.to('#loader', {
    delay: "1",
    left: "500%",
}, 'loader')
.to('#upperText', {
    delay: 1.2,
    duration: 2,
    bottom: "-50%",
}, 'loader')
.to('#lowerText', {
    delay: 1.2,
    duration: 2,
    bottom: "-50%",
}, 'loader')
.to('main', {
    duration: 2,
    top: "0",
}, 'loader')
.to('section', {
    display: "block",
}, 7);


