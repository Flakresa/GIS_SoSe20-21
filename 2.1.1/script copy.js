"use strict";
function a1() {
    const x = "Alles";
    console.log(x);
    debugger;
    func1();
    console.log("Logo!");
}
a1();
function func1() {
    console.log("Klar?");
}
//K Aufgabe 1b) 
// Funktion in Zeile zwei "let x: string = "Alles";" wird als erstes ausgeführt, danach "console.log(x)", 
// dann "debugger;", dann "console.log("Klar?");"
// und als letztes "console.log("Logo!");"
// Aufgabe 1c)
function a1() {
    const x = "Alles";
    console.log(x);
    debugger;
    func1();
}
a1();
function func1() {
    console.log("Gute!");
}
function a1() {
    const y = "Alles";
    console.log(y);
    func1();
}
a1();
function func1() {
    console.log("Klar!");
}
// Aufgabe 2 
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
// AUfgabe 4 
let x = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
// Ich denke Erst kommt Hallo 
//# sourceMappingURL=script%20copy.js.map