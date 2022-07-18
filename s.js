var player,playerimg

var enemy,enegroupe,enemyImg

var block = [],hblock,blockGroup,blockimg

var moving = 0

var aaa

var jump = 0
function preload(){
blockimg = loadImage("./assets/ee.png.png");
playerimg = loadImage("./assets/eeeee.png");
enemyImg = loadImage("./assets/enemy.png");

}

function setup(){
createCanvas(1480,800)
gbrX(100,100,4)
gbrY(0,100,3)
enemy = createSprite(250,-50,90,90)
enemy.addImage("enemy",enemyImg)
aaa = createSprite(mouseX,mouseY,30,30)
player = createSprite(400,-50,90,90)
player.addImage("player",playerimg)
blockGroup = new Group();
}

function draw (){
background(100)
//console.log(jump)
console.log("x: "+mouseX)
console.log("y: "+mouseY)
camera.position.x= player.position.x
camera.position.y= player.position.y
player.collide(block)
player.position.y += 0
block.debug =true
//aaa.position.x = mouseX
//aaa.position.y = mouseY

follow()
moveP()
blockmove()
drawSprites()
}
function gbrX(x2,y2,q2){

for(var i=0;i<q2;i++){
block = createSprite(x2+i*150,y2,150,150)
block.addImage("block",blockimg)
block[i] = new Block()
}
}
function gbrY(x2,y2,q2){

    for(var i=0;i<q2;i++){
block = createSprite(x2,y2+i*-150,150,150)
block.addImage("block",blockimg) 
block[i] = new Block()

}
}

function moveP(){
    //if(){
    if (keyDown("space")&&jump <99999999999){
        player.position.y -= 10
        moving = 1
        jump +=1
        if(player.collide(block)){
            jump = 0
       }
    }
    else{
        setTimeout(() => {
            moving = 0
          }, 250);
    }
    if (keyDown("d")){
        player.position.x += 10
        moving = 1
    }
    else{
        setTimeout(() => {
            moving = 0
          }, 250);
    }
    if (keyDown("a")){
        player.position.x -= 10
        moving = 1
    }
    else{
        setTimeout(() => {
            moving = 0
          }, 250);
    }
    if (keyDown("s")){
        player.position.y += 10
    moving = 1
    }
    else{
        setTimeout(() => {
            moving = 0
          }, 250);
    }
    if (keyDown(DOWN_ARROW)){
        aaa.position.y += 10
    }
    if (keyDown(UP_ARROW)){
        aaa.position.y -= 10
        }
        if (keyDown(RIGHT_ARROW)){
            aaa.position.x += 10
            }
            if (keyDown(LEFT_ARROW)){
                aaa.position.x -= 10
                }
    
    //}

}
function blockmove(){
    if (keyDown("e")){
    block.position.x = aaa.position.x
    block.position.y = aaa.position.y
    }
    }
    function follow(){
        setTimeout(() => {
            enemy.position.x = player.position.x+ 190       
          }, 1000);
              
     }