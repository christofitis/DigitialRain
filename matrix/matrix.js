let canW = 500;
let canH = 500;
let symbols = [];


function setup() {
    frameRate(10);
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(canW, canH);
}

function draw() {
    background(0);
    noStroke();
    fill(255);
        if (random(100) < 50 ){
                let char = new Char(random(canW), 0);
                symbols.push(char);
        }
        for (let i = symbols.length-1; i >= 0; i--) {
            symbols[i].show()
            symbols[i].move();
          
            if (symbols[i].getLocation() > canH){
                symbols.splice(i, 1);
            }
        }
        //console.log(chars);
}

