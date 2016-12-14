//Emotion Photo Filter by Sofia Garcia
// v.1 Dec. 2016

var video, mic, vol;
var vScale = 8;


var particles = [];

var slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#01070f');
  video = createCapture(VIDEO);
  video.size(width/vScale,  height/vScale);
  video.hide();

  for(var i = 0; i < 200; i++){
    particles[i] = new Particle(320, 240);
  }

}

function draw() {

  video.loadPixels();
  for(var i = 0; i < particles.length; i++){
    particles[i].update();
    particles[i].show();
  }
}
