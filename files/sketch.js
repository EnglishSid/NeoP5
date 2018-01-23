var textX=30;
var textY=40;
function preload(){
  //var words = ["Saab", "Volvo", "BMW"];
  data = loadJSON("files/words.json")
}

function setup() { 
    createCanvas(640, 700);
  } 
  

  function draw() { 

    background(50);
    textSize(72);
    textAlign(CENTER, CENTER);
    //for (var i = 0; i < words.length; i++) {
    //  fill(random(255));
    //  text(words[i], random(width), random(height));
   // }

var mywords=data.words;    
    
for (var i = 0; i < mywords.length; i++ ) {
  fill(random(255));
  
  var wordCount=mywords[i].count;
  for (var j = 0;j < wordCount.length; j++) {
    textSize(wordCount[j]*10); 
  }
  textAlign(CENTER, CENTER);
  text(mywords[i].word,textX,textY);
  textX=textX+40
  textY=textY+20
}
  

//end draw function
}

