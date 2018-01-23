var worddata;

function preload(){
  //var words = ["Saab", "Volvo", "BMW"];
  data = loadJSON("files/words.json", gotdata)
}

function setup() { 
    createCanvas(600,600);
    background (0);

    var mywords=worddata.words;    
    
for (var i = 0; i < mywords.length; i++ )
{ 
  
    x = random(width*0.75);
    y = random(height*0.75);
   fill(random(255));
    textSize(mywords[i].count*2);
   text(mywords[i].word,x,y);
  } 

}

  function gotdata(data){
    worddata=data;
  }
  
  function draw() { 

//end draw function
}