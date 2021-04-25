function a1(): void {
    const x: string = "Alles";
    console.log(x);debugger;   
    func1();
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}

//K Aufgabe 1b) 
// Funktion in Zeile zwei "let x: string = "Alles";" wird als erstes ausgeführt, danach "console.log(x)", 
// dann "debugger;", dann "console.log("Klar?");"
// und als letztes "console.log("Logo!");"

// Aufgabe 1c)

function a1(): void {
    const x: string = "Alles";
    console.log(x);debugger;   
    func1();
    
}

a1();

function func1(): void {
    console.log("Gute!");
}

function a1(): void {
    const y: string = "Alles";
    console.log(y);
    func1();
}

a1();
 function func1(): void {
     console.log("Klar!");
 }

// Aufgabe 2 

function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while( i > 0);
}

a2();


// AUfgabe 4 

let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void{
    y = "Bla";
    console.log(y);
}

function func2(): void{
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void{
    x = "Test";
}

// Ich denke Erst kommt Hallo 