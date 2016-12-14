// rectMode(CENTER);

function Particle(x, y){
  this.x = x;
  this.y = y;
  this.r = random(4, 15);


  this.update = function() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  this.show = function() {
    noStroke();
    var px = floor(this.x);
    var py = floor(this.y);
    var col = video.get(px, py);
    fill(col);
    ellipse(this.x, this.y, this.r, this.r);
  }
}
