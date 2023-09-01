function preload(){
    world_start = loadSound("./sons/world_start.wav");
    setSprites();
    MarioAnimation();
}
function setup(){
    canvas = createCanvas(1280,330);
    canvas.parent("canvas");

    instializeInSetup(mario);
}

function draw(){
    game()
}
function start(){

}