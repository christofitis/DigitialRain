class Char {
    constructor(x, y) {
        this.loc = createVector(x, y);
        this.color = "rgba(0, 255, 0, 1)"
        this.letters = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ012345789:・.=*+-<>"
        this.char = this.letters[floor(random(this.letters.length))];
        textSize(12);
        this.size = textSize() + 1;
        this.moveCount = 0;
        this.tailLength = random(20, 30);
        this.charList = [];
    }

    show() {
        noStroke();
        fill(255);
        text(this.char, this.loc.x, this.loc.y);
        for (let i = 1; i < this.tailLength; i++){
            fill(0, map(i, 0, this.tailLength, 255, 0), 0);
            text(this.charList[i], this.loc.x, this.loc.y-this.size*i);
        }
        if (random(100) < 25) {
            this.charList[floor(random(this.charList.length))] = this.letters[floor(random(this.letters.length))];
        }
    }

    move() {
        if (this.moveCount >= this.size){
            this.loc.y += this.size;
            this.moveCount = 1;
            this.char = this.letters[floor(random(this.letters.length))];
            this.charList.unshift(this.char);
            if (this.charList.length >= this.tailLength){
                this.charList.pop();
            }
        }
        this.moveCount += this.size;
    }

    getLocation() {
        return (this.loc.y-this.size*this.tailLength);
    }
}
