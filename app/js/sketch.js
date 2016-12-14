//Emotion Photo Filter by Sofia Garcia
// v.1 Dec. 2016

var video, mic, vol;
var vScale = 8;


var particles = [];

var slider;

function setup() {
  createCanvas(windowWidth, 480);
  // pixelDensity(1);
  video = createCapture(VIDEO);
  // video.size(width/vScale,  height/vScale);
video.hide();
  // mic = new p5.AudioIn();
  // mic.start();
  for(var i = 0; i < 200; i++){
    particles[i] = new Particle(320, 240);
  }
  slider = createSlider(0, 255, 127);
  // background(255);
}

function draw() {
  background(51);


  video.loadPixels();
  for(var i = 0; i < particles.length; i++){
    particles[i].update();
    particles[i].show();
  }
}
// var video, r, g, b;
//
// function setup() {
//   createCanvas(windowWidth, windowHeight-100);
//   video = createCapture(VIDEO);
//   video.size(300, 200);
//   frameRate(3);
// }
//
// function draw(){
//   background(204);
//   loadPixels();
//  for(var y = 0; y < height; y ++){
//     for(var x = 0; x < width; x++){
//     var index = (x + y * width) * 4;
//     var r = video.pixels[index+0];
//     var g = video.pixels[index+1];
//     var b = video.pixels[index+2];
//
//     }
//   }
//
//   updatePixels();
// for(var i = 20; i < width; i +=20){
//
//   fill(col);
//   var mx = mouseX/10;
//   var offsetA = random(-mx, mx);
//   var offsetB = random(-mx, mx);
//   rect(i + offsetA, 20, i - offsetB, height-20);
//
//   }
//
// }
