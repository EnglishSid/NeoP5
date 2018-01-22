


function setup() { 
    createCanvas(640, 700);
    noLoop();
  } 
  
  function draw() { 
    background(50);
    textSize(72);
    textAlign(CENTER, CENTER);
    for (var i = 0; i < words.length; i++) {
      fill(random(255));
      text(words[i], random(width), random(height));
    }

//end draw function
}

