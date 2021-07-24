
var bgImg;
var cat;
var mouse;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg4 = loadAnimation("images/mouse4.png");
    catImg4 = loadAnimation("images/cat4.png");
;}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale = 0.15;
    cat = createSprite(900,600);
    cat.addAnimation("catSleeping",catImg1);
    cat.scale = 0.25;
    
    makeCatWalk()

}

function draw() {

    background(bgImg);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg4); 
        cat.x =300; 
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg4);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage"); 
    }
    drawSprites();
}


function makeCatWalk(){ 
    mouse.addAnimation("mouseTeasing", mouseImg2) 
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
    cat.velocityX = -5; 
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning"); }
