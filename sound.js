function setupSound(){

lfo.frequency.setValueAtTime(3, audioContext.currentTime);
lfo.start();
saw.frequency.setValueAtTime(80,audioContext.currentTime);
saw.type = "sawtooth";
saw.start();
filter.type = "lowpass";
filter.Q.setValueAtTime(8, audioContext.currentTime);
lfoAmount.gain.setValueAtTime(150, audioContext.currentTime);




//connecting
saw.connect(filter);
filter.connect(masterGain);
masterGain.connect(audioContext.destination);
lfo.connect(lfoAmount);
lfoAmount.connect(filter.frequency);
}

function updateSound(){
    mouseXfloat = map(mouseX, 0, width, 0, 1);
    freq = map(mouseY, height, 0, 0, 1200)
    lfoFreq = map(mouseXfloat,0,1,0.5,8);
    lfoAmountValue = map(mouseY, height, 0, 0, freq);
    filter.frequency.setTargetAtTime(freq, audioContext.currentTime, 0.02);
    lfo.frequency.setTargetAtTime(lfoFreq, audioContext.currentTime, 0.2);
    lfoAmount.gain.setTargetAtTime(lfoAmountValue,audioContext.currentTime, 0.2);

    if(mouseIsPressed){
        masterGain.gain.setTargetAtTime(0.6, audioContext.currentTime, 0.02);
    }
    else{
        masterGain.gain.setTargetAtTime(0, audioContext.currentTime, 0.05);
    }

    
    
}