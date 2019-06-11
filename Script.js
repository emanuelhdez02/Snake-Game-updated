var s;
var scl = 20;
var food;
var score = 0;
function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(10);
    pickLocation();

}

function pickLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}



function draw() {
    background(0,255,0);

    if (s.eat(food)){
        pickLocation();
    }
    s.death();
    s.update();
    s.show();


    fill(280, 50, 190);
    rect(food.x, food.y, scl, scl)
}

function keyPressed(e) {
    console.log(e.keyCode);
     if (e.keyCode === UP_ARROW) {
         s.dir(0, -1);
     }else if (keyCode === DOWN_ARROW){
         s.dir(0, 1);
     }else if (keyCode === RIGHT_ARROW){
         s.dir(1, 0);
     }else if (keyCode === LEFT_ARROW){
         s.dir(-1, 0);
     }
     if (keyCode === 87){
         s.dir(0, -1);
     }else if (keyCode === 83){
         s.dir(0, 1);
     }else if (keyCode === 68){
         s.dir(1, 0);
     }else if (keyCode === 65){
         s.dir(-1, 0);
     }
}

