const audioContext = new AudioContext;
const lfo = audioContext.createOscillator();
const lfoAmount = audioContext.createGain();
const saw = audioContext.createOscillator();
const filter = audioContext.createBiquadFilter();


let mouseXfloat;
let freq; 
let lfoFreq;


function setup() {
  lfo.frequency.setValueAtTime(3, audioContext.currentTime);
  lfo.start();
  saw.frequency.setValueAtTime(110,audioContext.currentTime);
  saw.type = "sawtooth";
  saw.start();
  filter.type = "lowpass";
  filter.Q.setValueAtTime(10, audioContext.currentTime);
  lfoAmount.gain.setValueAtTime(150, audioContext.currentTime);



  //connecting
  saw.connect(filter);
  filter.connect(audioContext.destination);
  lfo.connect(lfoAmount);
  lfoAmount.connect(filter.frequency);

  createCanvas(400, 400);
}

function draw() {
  background(220);
  mouseXfloat = map(mouseX, 0, width, 0, 1);
  freq = 500;
  lfoFreq = map(mouseXfloat,0,1,0.5,4);
  lfoAmountValue = map(mouseY, height, 0, 0, 500);
  filter.frequency.setTargetAtTime(freq, audioContext.currentTime, 0.02);
  lfo.frequency.setTargetAtTime(lfoFreq, audioContext.currentTime, 0.2);
  lfoAmount.gain.setTargetAtTime(lfoAmountValue,audioContext.currentTime, 0.2);

}

function mousePressed(){
  audioContext.resume();
}