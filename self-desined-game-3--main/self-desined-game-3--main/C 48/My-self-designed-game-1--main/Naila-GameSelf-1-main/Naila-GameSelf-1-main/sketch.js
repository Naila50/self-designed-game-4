var form;
var gameState= 0;
var database;
var score = 0;

function preload(){
  back_img = loadImage("images/image main shinchan.jpg")
}
function setup() {
  createCanvas(1260,580);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState();
}

function draw() {
  background();
  
}

