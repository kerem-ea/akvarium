let fishes = [];


function setup() 
{
    initializeCanvas();
}

function draw() {
    frameRate(1);
    background(0, 0, 75);
    createFish(); 
    showFish();  
}

function createFish() { 
    let fish = new Fish();
    fishes.push(fish); 
}

function showFish() {
    for (let i = 0; i < fishes.length; i++) {
        let fish = fishes[i];
        fish.chooseColor();
        fish.spawnFish();
    }
}

function initializeCanvas() {
    const canvas = createCanvas(windowWidth * 0.7, windowHeight * 0.7);
    const canvas_x = (windowWidth - width) / 2;
    const canvas_y = (windowHeight - height) / 2;
    canvas.position(canvas_x, canvas_y);
    return canvas;
}


