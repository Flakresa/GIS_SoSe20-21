 //Aufgabe 1
 // "langweilige Konsolenausgaben"

 console.log("Aufgabe 1");

 //Aufgabe_1a)
 console.log("Aufgabe_1a)");
 console.log(min(23, 45, 35, 96, 2, 47, 7, -4, 1));
 function min(..._num: number[]): number {
     let minimum: number = _num[0];
     for (let i: number = 0; i < _num.length;){
         if (_num[i] < minimum) {
             minimum = _num[i];
         }
     }
     return minimum;
 }

 //Aufgabe 1b)

 let x: number = 5;

    function isEven(_x: number): boolean {
        if (_x == 0) {
            return true;
        }
        if (_x == 0) {
            return false;
        }

        return isEven(_x - 2);
    }
    console.log(isEven(x));


 //Aufgabe 2a)

    let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
    function backwards(_input: number[]): number[] {
        let arr: number[] = new Array;
        for (let i: number = _input.length - 1; i >= 0; i--) {
            arr.push(_input[i]);
        }
        return arr;
    }
    console.log(backwards(arr));


    //Aufgabe 3

    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Canvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");

// heaven
context.fillStyle = "blue";
context.fillRect(0, 0, 600, 400);


// cloud
context.beginPath();
context.moveTo(170, 80);
context.bezierCurveTo(230, 100, 130, 150, 230, 150);
context.bezierCurveTo(250, 180, 350, 180, 340, 150);
context.bezierCurveTo(420, 150, 320, 120, 390, 100);
context.bezierCurveTo(430, 40, 370, 30, 340, 50);
context.bezierCurveTo(320, 10,250, 20, 250, 50);
context.bezierCurveTo(200, 50, 150, 20, 170, 80);
context.fillStyle = "lightgrey";
context.fill();
context.closePath();

// tree
context.fillStyle = "#8B5A2B";
context.fillRect(190, 100, 70, 300);
context.beginPath();
context.fillStyle = "green";
context.arc(200, 150, 75, 1, 6 * Math.PI, false);
context.fill();
context.closePath();

// house
context.fillStyle = "pink";
context.fillRect(400, 170, 410, 200);
context.beginPath();
context.fillStyle = "orange";
context.moveTo(390, 190);
context.lineTo(730, 200);
context.lineTo(600, 100);
context.fill();
context.closePath();
 
    class rechteck {
    x1: number;
    y1: number;
    x2: number;
    y2: number;

    maxWidth: number = 600;
    maxHeight: number = 300;

    constructor() {
        this.x1 = this.getRandomInt(0, this.maxWidth);
        this.x2 = this.getRandomInt(this.x1, this.maxWidth);
        this.y1 = this.getRandomInt(0, this.maxHeight);
        this.y2 = this.getRandomInt(this.y1, this.maxHeight);
    }

    getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    drawRect(): void {
        context.beginPath();
        context.fillStyle = "white";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2, this.y1);
        context.lineTo(this.x2, this.y2);
        context.lineTo(this.x1, this.y2);
        context.closePath();
        context.stroke();
        context.fill();
        context.closePath();
    }
}

let rechtArray: rechteck [] = [new rechteck(), new rechteck(), new rechteck()];
for (const recht of rechtArray) {
    recht.drawRect();
}
