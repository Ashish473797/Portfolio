
document.addEventListener('mousemove', (currPosition) => {
    gsap.to('.myCursor', {
        x: currPosition.x,
        y: currPosition.y,
        duration: 0.5,
    })
});