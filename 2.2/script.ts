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
        if (_x == ) {
            return false;
        }

        return isEven(_x - 2);
    }
    console.log(isEven(x));
