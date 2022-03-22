var ctx = document.getElementById('canvas').getContext('2d');


function animate() {
    ctx.clearRect(0,0, 300, 300)
    ctx.fillRect(50,50,100,100)
    requestAnimationFrame(animate);
}
animate();