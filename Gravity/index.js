const canvasEl = document.querySelector("canvas");
const context = canvasEl.getContext("2d");
canvasEl.width = innerWidth;
canvasEl.height = innerHeight;

// this is the context where we draw and enjoy life :)
// let's create all the balls in random position now
// before that we need to create the ball object



let gravity = 0.9;
let friction = 0.9;
let airresistance = 0.8;
// let's create a cool helper function that generates number from given range
function randomIntfromrange(min, max){
    return Math.floor(Math.random()*(max-min) + min);
}

function Ball(xpos, ypos, radius, xspeed, yspeed){
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.color = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`;

    this.draw = function(){
        context.beginPath();
        context.arc(this.xpos, this.ypos, this.radius, 0, 2*Math.PI, false);
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
        context.closePath();
    }

    this.update = function(){
        if (this.xpos + this.radius >= canvasEl.width || this.xpos - this.radius <= 0) {
            this.xspeed = -this.xspeed*airresistance;
        }
        if (this.ypos + this.radius >= canvasEl.height || this.ypos - this.radius <= 0) {
            this.yspeed = -this.yspeed*gravity;
        }
        else{
            this.yspeed += friction;
        }

        this.xpos += this.xspeed;
        this.ypos += this.yspeed;
        this.draw();
    }
}

let ballArray = [];
for (let index = 0; index < 200; index++) {
    const radius = randomIntfromrange(10, 30);
    const xpos = randomIntfromrange(radius, innerWidth-radius);
    const ypos = randomIntfromrange(2*radius, innerHeight-radius);
    const xspeed = randomIntfromrange(-2, 2);
    const yspeed = randomIntfromrange(-2, 2);
    

    ballArray.push(new Ball(xpos, ypos, radius, xspeed, yspeed));
    
}
console.log(ballArray)
// let's create the main function that is going to be used for the animation

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    for (let index = 0; index < ballArray.length; index++) {
        ballArray[index].update();
    }
}

animate();
