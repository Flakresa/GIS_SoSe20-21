//Aufgabe 1a)

function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1();
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}

//Aufgabe 1a) Es wird Alles Logo und Klar ausgegeben, 
//Augabe 1b) Als erstes kommt Zeile 6 , dann 7, dann 8 

//Aufgabe 1c) 

function a1(): void {
    let x: string = "Alles";
    console.log();
    func1(x);
    func2(x);
    console.log(x + " " + "Logo!");
}
a1();
function func1(x: string ): void {
    console.log(x + " " + "Klar?");
}
function func2(x: string): void {
    console.log(x + " " + "Gute!");
}






//Aufgabe 2a) Es zählt runter von 9 wenn die Zahl größer als 0 ist

function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();



//Aufgabe 4

let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}


//Aufgabe 4a) In der Konsol wird Hallo Bla Hallo Blub Test ausgegeben
//Aufgabe 4b) globale Variablen werden statisch angelegt (einmal für
// Programmablauf)
//lokale Variablen werden für jeden Methodenaufruf eigens
// angelegt


//Aufgabe 5a)



function multiply (x: number, y: number): void {
    let z: number = x * y;
    console.log(z);
}
multiply(x, y);

//AUfgabe 5 b)

function max (x: number, y: number): void {
    if (x < y) {
        console.log(y);
    }
    else {
        console.log(x);
    }
}
max(x, y);

//Aufgabe 5c)

function schleife(): void {
    let i: number = 1;
    let ergebnis: number = 0;
    while (i < 100) {
        ergebnis += i;
        i = 1;
    }
    console.log(ergebnis);
}
schleife();




