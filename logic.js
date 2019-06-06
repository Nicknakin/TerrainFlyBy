/*jshint esversion: 6 */

let xOffset, yOffset;
let xOffsetStart, yOffsetStart;
let xInc, yInc;
let time = 0;
let dims = [40, 40];

let w = 800; let h = 800;

let currentX, currentY;

function setup(){
    var canvas = createCanvas(window.innerWidth*.9, window.innerHeight*.9, WEBGL);
    //var cam = camera(w/2,h/2,100,0,0,0,0,0,-1);
    xInc = 5;
    yInc = 5;
    xOffset = xOffsetStart = 0;
    yOffset = yOffsetStart = 0;
    currentX = 0;
    currentY = height/2;
    noiseDetail(128);
    background(0);
}

function draw(){
    translate(-w/2, -h/2);
    rotateX(70/100);
    background(0);
    noFill();
    stroke(64);
    strokeWeight(0.5);
    for(let y = 0; y < dims[1]; y++){
        beginShape(TRIANGLE_STRIP);
        for(let x = 0; x < dims[0]; x++){
            const noiseX = x/dims[0]*xInc+xOffsetStart;
            const noiseY = y/dims[1]*yInc+yOffsetStart;
            const noiseY2 = (y+1)/dims[1]*yInc+yOffsetStart;
            vertex(x*w/dims[0], y*h/dims[1], 100*noise(noiseX, noiseY));
            vertex(x*w/dims[0], (y+1)*h/dims[1], 100*noise(noiseX, noiseY2));
        }
        endShape();    
    }   
    yOffsetStart -= 0.001;
}