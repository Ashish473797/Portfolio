let tl = gsap.timeline();
tl.to('#loader', {
    delay: 1,
    duration: 5,
    left: "0%",
});

tl.to('#upperLoader', {
    delay: 1,
    duration: 1,
    top: "-51%",
    borderRadius: "24%",
}, 'loader')
.to('#lowerLoader', {
    delay: 1,
    duration: 1,
    bottom: "-51%",
    borderRadius: "24%",
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
}, 8)






