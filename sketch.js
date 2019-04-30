var vid;
var clip;
var clipW, clipH;
var w,h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  clipW=100;
  clipH=100;
  w=floor(width/clipW);
  h=floor(height/clipH);
  console.log(w,h)
  clip=createImage(clipW, clipH);
  vid=createCapture(VIDEO);
  vid.hide();
}

function draw() {
  if(frameCount>10){
    for(var i=0; i<w; i++){
      for(var j=0; j<h; j++){
        push();
        translate(i*200,j*200);
        image(vid,0,0,100,100,0,0,100,100);
        push();
        translate(200,0);
        scale(-1,1);
        image(vid,0,0,100,100,0,0,100,100);
        pop();
        push();
        translate(0,200);
        scale(1,-1);
        image(vid,0,0,100,100,0,0,100,100);
        pop();
        push();
        translate(200,200);
        scale(-1,-1);
        image(vid,0,0,100,100,0,0,100,100);
        pop();
        pop();
      }
    }
    
  }
}