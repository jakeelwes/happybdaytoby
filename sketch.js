numFiles = 2751;
var counter =  Math.floor(Math.random() * numFiles);
var img;
var p = 6;
var pw = 25;



function setup() {
  createCanvas(windowWidth, windowHeight);
  newPics();
}

function draw() {



  // for (var i = 1; i <= 5; i++) {
  //   var img = img+str(i);
  // }
  // console.log(img.width, img.height)
  up = -70;
  offset = ((width/25)*23)/5
  image(img1, width/pw, height/p+up, (height-height/p)*(img1.width/img1.height), height-height/p+up);
  image(img2, width/pw+offset, height/p+up, (height-height/p)*(img2.width/img2.height), height-height/p+up);
  image(img3, width/pw+2*offset, height/p+up, (height-height/p)*(img3.width/img3.height), height-height/p+up);
  image(img4, width/pw+3*offset, height/p+up, (height-height/p)*(img4.width/img4.height), height-height/p+up);
  image(img5, width/pw+4*offset, height/p+up, (height-height/p)*(img5.width/img5.height), height-height/p+up);


  fill(255);
  noStroke();
  rect(0,0,width,height/p+up);
  rect(0,height-height/p+up,width,height);
  rect(0,0,width/pw,height);
  rect(width-width/pw,0,width,height);
  //
  // textSize(80);
  // fill(255,50);
  // textAlign(CENTER,CENTER);
  // textFont("Helvetica");
  // text("HAPPY BIRTHDAY TOBES", width/pw, height/p, width-width/pw, height-height/p-80);


  newPics();

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function newPics() {
  if(frameCount%Math.floor(Math.random() * 100)==0){
    counter =  Math.floor(Math.random() * numFiles);
    img1 = loadImage("Pics/"+counter+".jpg");
    console.log("bang")
  }
  if(frameCount%Math.floor(Math.random() * 100)==0){
    counter =  Math.floor(Math.random() * numFiles);
    img2 = loadImage("Pics/"+counter+".jpg");
  }
  if(frameCount%Math.floor(Math.random() * 100)==0){
    counter =  Math.floor(Math.random() * numFiles);
    img3 = loadImage("Pics/"+counter+".jpg");
  }
  if(frameCount%Math.floor(Math.random() * 100)==0){
    counter =  Math.floor(Math.random() * numFiles);
    img4 = loadImage("Pics/"+counter+".jpg");
  }
  if(frameCount%Math.floor(Math.random() * 100)==0){
    counter =  Math.floor(Math.random() * numFiles);
    img5 = loadImage("Pics/"+counter+".jpg");
  }
}
