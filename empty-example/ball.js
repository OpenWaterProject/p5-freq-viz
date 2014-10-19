var mic, fft;
var max=0;
var imax=0;

function setup() {
//   createCanvas(710,400);
createCanvas(window.innerWidth,window.innerHeight-50);

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
   var ampmax=0;
   for (i = 0; i<spectrum.length; i++) {
    vertex(i*4, map(spectrum[i], 0, 255, height, 0) );
    if (spectrum[i]>ampmax) {
    //if (i>imax) imax=i;
      ampmax=spectrum[i];
      imax=i;
     }
   }
   endShape();
   stroke(0,0,255);
   fill(0,0,255,100);
//   ellipse(imax,map(ampmax,0,255,height,0),map(ampmax,0,255,height,0),map(ampmax,0,255,height,0));
ellipse(imax*4,map(ampmax,0,255,height,0),50,50);
//ellipse(imax,100,30,30);
    //var ss = sort(spectrum);
    //var ssmax = ss[ss.length-1];
    //if (ssmax > max) {
//	max = ssmax;
  //  }
    document.getElementById('number').innerHTML = "Frequency equals: " + imax;
    document.getElementById('number2').innerHTML = "Amplitude equals: " + ampmax;
}
