
var death = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//adicione velocidade para fazer o carro se mover.
car1.velocityY =3;
car2.velocityY =3;
car3.velocityY =-3;
car4.velocityY =-3;
function draw() {
   background("white");
  text("mortes: " + death,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
// crie a função rebater, para fazer o carro rebater nos limites
car1.bounceOff(boundary1);
car2.bounceOff(boundary1);
car3.bounceOff(boundary1);
car4.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary2);
car3.bounceOff(boundary2);
car4.bounceOff(boundary2);
    
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
if (keyDown("right")) {
  sam.x +=4;
}
if (keyDown("left")) {
  sam.x -=4;
}

car1.setAnimation("car10");
car2.setAnimation("car10");
car3.setAnimation("car10");
car4.setAnimation("car10");
playSound("sound://category_background/town.mp3");
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
  if (sam.isTouching(car1)|| sam.isTouching(car2)|| sam.isTouching(car3)|| sam.isTouching(car4)) {
   sam.x =20; 
   sam.y =190;
   
    death += 1;
  }
  
 drawSprites();
}