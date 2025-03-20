class Fish {
    constructor() {
        this.x = random(0.1, 0.5) * windowWidth;
        this.y = random(0.1, 0.5) * windowHeight;
        this.size = windowWidth * 0.05;
        this.color = this.chooseColor();
    }
    
    chooseColor() {
        const colors = [[255, 0, 0], [0, 255, 0], [0, 0, 255]];
        return random(colors);
    }

    spawnFish() {
        fill(this.color);
        circle(this.x, this.y, this.size);
    }
    
}

