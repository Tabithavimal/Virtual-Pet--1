//Create variables here
var dog,happyDog
var database
var foodS,foodStock;
var dogImg,dogImg1;


function preload()
{
dogImg=loadImage("images/dogImg.png")

dogImg1=loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(500, 500);
  
  database=firebase.database();
dog=createSprite(400,300,20,40)
dog.addImage(dogImg)
dog.scale=0.2

foodStock=database.ref('Food')
foodStock.on("value",readStock)

}

function draw() {  
background("green")

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImg1)
  
  }

  drawSprites();
  fill("white")
  text("Food Remaining :"+foodS,150,100)
text("Note: Press UP_ARROW Key to feed Drago Milk",150,50)



}

function readStock(data)
{
foodS=data.val();
}
function writeStock(x){

if(x<-0){
x=0;
}

else{
  x=x-1
}

database.ref('/').update({
Food:x

})
}


