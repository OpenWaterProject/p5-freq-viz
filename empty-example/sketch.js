var mic, fft;

function setup() {
   createCanvas(710,400);
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
}

function draw() {
   background(200);
   stroke(255,0,0);
   var spectrum = fft.analyze();

   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();
    document.getElementById('number').innerHTML = spectrum[0];
}
