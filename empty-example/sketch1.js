var mic, fft;
var max=0;
var imax=0;
var cityArray = {
  "Boston" : 0,
  "Chicago" : 0,
  "NYC": 0,
}

 var bosCallback = function(data) {
  var itc = data.query.results.channel.item.condition;
  console.log(itc.temp);
  cityArray.Boston = itc.temp;
  };

 var nyCallback = function(data) {
  var itc = data.query.results.channel.item.condition;
  console.log(itc.temp);
  cityArray.NYC = itc.temp;
  };

 var chicagoCallback = function(data) {
  var itc = data.query.results.channel.item.condition;
  console.log(itc.temp);
  cityArray.Chicago = itc.temp;
  };


function setup() {
   createCanvas(window.innerWidth,window.innerHeight-50);
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);

}

function draw() {
   background(200);
   stroke(255,0,0);
   /* Draw Temperature Lines here*/
   textSize(10);
   for (var key in cityArray) {
    var yPos = map(cityArray[key],30,120,0,height);
    text(key + " " + cityArray[key] + "F",0,height-yPos-20,150,100);
    line(0,height-yPos,width,height-yPos);
   }
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
rect(30,height,10,-1*map(imax,0,150,0,window.innerHeight-50));



    //var ss = sort(spectrum);
    //var ssmax = ss[ss.length-1];
    //if (ssmax > max) {
//	max = ssmax;
  //  }
    document.getElementById('number').innerHTML = "Frequency equals: " + imax;
    document.getElementById('number2').innerHTML = "Amplitude equals: " + ampmax;
}
