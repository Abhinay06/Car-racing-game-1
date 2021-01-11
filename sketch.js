var database;
var position;
var form,game,player;
var gameState=0;
var playerCount;
var allPlayers;
var distance=0;

var form;
var player;
var game;
var car1,car2,car3,car4;
var car1Image,car2Image,car3Image,car4Image;
var cars;
var track,trackImage;
var endCount;
var rank=0;

function preload(){
  car1Image=loadImage("images/car1.png");
  car2Image=loadImage("images/car2.png");
  car3Image=loadImage("images/car3.png");
  car4Image=loadImage("images/car4.png");
  trackImage=loadImage("images/track.jpg");
}


function setup(){
  database = firebase.database();
  //console.log(database);
  createCanvas(windowWidth,windowHeight);
  form=new Form();
  player=new Player();
  game=new Game();
  player.getCount();
  player.getendCount();

  car1=createSprite(300,200,20,20);
  car2=createSprite(350,200,20,20);
  car3=createSprite(400,200,20,20);
  car4=createSprite(450,200,20,20);

  car1.addImage(car1Image);
  car2.addImage(car2Image);
  car3.addImage(car3Image);
  car4.addImage(car4Image);

  cars=[car1,car2,car3,car4];
}

function draw(){
  background("white");
  
    form.display();

    if(playerCount===4 && gameState === 0){
       gameState=1;
       game.update(gameState);
       
    }

    if(gameState===1){
      game.play();
    }

    if(gameState===2){
       background(220);
       greeting1=createElement('h3');
       greeting1.html("Rank "+rank);
       greeting1.position(200,200);
    }
}

