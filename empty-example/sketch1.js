var mic, fft;
var max=0;
var imax=0;

function setup() {
   createCanvas(710,400);
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);

var query = escape('CAXX0518'),
    url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json&callback=?"; 

$.getJSON(url, function(data) {
  console.log( data );
});

}

function draw() {
   background(200);
   stroke(255,0,0);
   var spectrum = fft.analyze();
   var ampmax=0;
   for (i = 0; i<spectrum.length; i++) {
    if (spectrum[i]>ampmax) {
    //if (i>imax) imax=i;
      ampmax=spectrum[i];
      imax=i;
     }
   }
   fill(255,0,0,100);
   //ellipse(imax,map(ampmax,0,255,height,0),map(ampmax,0,255,10,100),map(ampmax,0,255,10,100));
//ellipse(imax,map(ampmax,0,255,height,0),30,30);
//ellipse(imax,100,30,30);
rect(30,height,10,-imax);



    //var ss = sort(spectrum);
    //var ssmax = ss[ss.length-1];
    //if (ssmax > max) {
//	max = ssmax;
  //  }
    document.getElementById('number').innerHTML = "Frequency equals: " + imax;
    document.getElementById('number2').innerHTML = "Amplitude equals: " + ampmax;
}
