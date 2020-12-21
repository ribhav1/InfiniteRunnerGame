var player;
var obs = [];
var obstacle;

var cameraX, cameraY;

var leftside, rightside;

function setup(){
    createCanvas(1000, 800);

}

function draw(){
    background(170);


    cameraX = camera.position.x;
    cameraY = camera.position.y;

    leftside = cameraX - 500;
    rightside = cameraX + 500;

    if(frameCount % 30 === 0){
        obstacle = createSprite(random(rightside, rightside + 100), random(0, 800), random(10, 50), random(10, 50));
        obs.push(obstacle);
    }
    for(var i = 0; i < obs.length; i++){
        if(obs[i].position.x < leftside){
            //how to destroy objects if they go offscreen
        }
    }
    camera.position.x += 5;
    drawSprites();
}

 