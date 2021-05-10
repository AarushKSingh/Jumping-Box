var canvas;
var music;
var blue,yellow,green,red
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blue = createSprite(100,590,180,10);
    blue.shapeColor = "blue";
    yellow = createSprite(300,590,180,10)
    yellow.shapeColor = "yellow"
    red = createSprite(500,590,180,10)
    red.shapeColor = "red"
    green = createSprite(700,590,180,10)
    green.shapeColor = "green"



    //create box sprite and give velocity
   box = createSprite(random(20,720),150,50,50)
   box.shapeColor = "White"
   box.velocityX = 4
   box.velocityY = 2
   


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    box.bounceOff(edges)
music.stop()
    if(blue.isTouching(box)){
        box.shapeColor = "blue"
        music.play()
        box.bounceOff(blue)
    }

    if(yellow.isTouching(box)){
        box.shapeColor = "yellow"
        music.play()
        box.bounceOff(yellow)
    }

    if(red.isTouching(box)){
        box.shapeColor = "red"
        music.play()
        box.bounceOff(red)
    }


    if(green.isTouching(box)){
        box.shapeColor = "green"
        music.play()
        box.bounceOff(green)
    }











    blue.display();
    yellow.display();
    red.display();
    green.display();
    box.display();





    //add condition to check if box touching surface and make it box
}
