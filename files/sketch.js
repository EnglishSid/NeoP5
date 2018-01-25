
particles = [];
//var worddata;
//data = MyWordlist;

function preload(){
  //data = loadJSON("files/words.json", gotdata)
  //data = MyWordsList;
}

function setup() { 
    createCanvas(600,600);
    background (0);

//    var mywords=MyWordlist.words;    
    
for (var i = 0; i < MyWordlist.length; i++ )
{
    x = random(width*0.75);
    y = random(height*0.75);
   fill(random(255));
  var sizes=MyWordlist[i].count;
  textSize(map(sizes.low, 0, 20, 5,50));
  text(MyWordlist[i].word,x,y);
  } 
}

  function gotdata(data){
    worddata=data;
    WordsList=data;
  }