let testParticle;
let particleCount = 80;
let particles = [];
let magnitude;
let particleSpeed;
let cnv;

//Sound Variables

const audioContext = new AudioContext;
const lfo = audioContext.createOscillator();
const lfoAmount = audioContext.createGain();
const saw = audioContext.createOscillator();
const filter = audioContext.createBiquadFilter();
const masterGain = audioContext.createGain();

//Control Variables
let mouseXfloat;
let mouseYfloat;
let freq; 
let lfoFreq;



function setup() {
  colorMode(HSB,360);
  cnv = createCanvas(400, 400);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;

  setupSound();
  cnv.position(x, y);
  for (i = 0; i < particleCount; i++) {
    particles[i] = new particle (width/2, height/2, 0.1, 200);
  }
}

function draw() {
background(0);
  particleSpeed = map(mouseX,0,width,0.01,0.1);
  magnitude = map(mouseY,height,0,0,200);

  for (i = 0; i < particleCount; i++) {
  if(mouseIsPressed){
    particles[i].swing(particleSpeed , magnitude);
  }
  else{
    particles[i].stand();
  }
  particles[i].show();

  updateSound();

  strokeWeight(4);
  stroke(230,200,360)
  noFill();
  rect(0,0,width,height);
}
}

function mousePressed(){
 if(audioContext.state == "suspended" || audioContext.state == "closed"){ 
  audioContext.resume();
 } 
}

function windowResized(){
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
