// first let's get the canvas element
// for the interactivity we need to create a mouse object
let maxRadius = 50;
let mouse = {
    x:undefined,
    y:undefined
}
window.addEventListener("mousemove", (event)=>{
    mouse.x = event.x;
    mouse.y = event.y;
})
const canvasEl = document.querySelector("canvas");
const context = canvasEl.getContext("2d");

canvasEl.width = innerWidth;
canvasEl.height = innerHeight;

// now let's create the circle object

function Circle(x, y,radius, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minradius = this.radius;
    this.color = `rgb(${Math.random()*255
    },${Math.random()*255},${Math.random()*255})`;
    this.draw = function (){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        context.strokeStyle = this.color;
        context.fillStyle = this.color;
        context.fill();
        context.stroke()
    }
    this.update = function (){
        if (this.x + this.radius > innerWidth ||
            this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight ||
            this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        if (this.x - mouse.x < 50 && this.y - mouse.y < 50 && this.x - mouse.x > -50 && this.y - mouse.y > -50 && this.radius < maxRadius) {
            this.radius += 2
        }
        else if(this.radius > this.minradius){
            this.radius -= 2
        }
        this.draw();
    }
}

// now let's create all the 10 circles and store them
const circlecontainer = [];
for (let index = 0; index < canvasEl.height; index++) {
    const random_radius = Math.random()*10 + 2;
    const randomx = Math.random()*(innerWidth - 2*random_radius) + random_radius;
    const randomy = Math.random()*(innerHeight- 2*random_radius) + random_radius;
    const randomxvelocity = Math.random()*2;
    const randomyvelocity = Math.random()*2;
    circlecontainer.push(new Circle(randomx, randomy, random_radius, randomxvelocity, randomyvelocity));
}


console.log(circlecontainer);
function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0, innerWidth, innerHeight);
    for (let index = 0; index < circlecontainer.length; index++) {
        circlecontainer[index].update();
        
    }
}
animate();
