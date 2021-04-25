"use strict";
//Aufgabe 1a)
function a1() {
    let x = "Alles";
    console.log(x);
    func1();
    console.log("Logo!");
}
a1();
function func1() {
    console.log("Klar?");
}
//Aufgabe 1a) Es wird Alles Logo und Klar ausgegeben, 
//Augabe 1b) Als erstes kommt Zeile 6 , dann 7, dann 8 
//Aufgabe 1c) 
function a1() {
    let x = "Alles";
    console.log();
    func1(x);
    func2(x);
    console.log(x + " " + "Logo!");
}
a1();
function func1(x) {
    console.log(x + " " + "Klar?");
}
function func2(x) {
    console.log(x + " " + "Gute!");
}
//Aufgabe 2a) Es zählt runter von 9 wenn die Zahl größer als 0 ist
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
//Aufgabe 4
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
//Aufgabe 4a) In der Konsol wird Hallo Bla Hallo Blub Test ausgegeben
//Aufgabe 4b) globale Variablen werden statisch angelegt (einmal für
// Programmablauf)
//lokale Variablen werden für jeden Methodenaufruf eigens
// angelegt
//Aufgabe 5a)
function multiply(x, y) {
    let z = x * y;
    console.log(z);
}
multiply(x, y);
//AUfgabe 5 b)
function max(x, y) {
    if (x < y) {
        console.log(y);
    }
    else {
        console.log(x);
    }
}
max(x, y);
//Aufgabe 5c)
function schleife() {
    let i = 1;
    let ergebnis = 0;
    while (i < 100) {
        ergebnis += i;
        i = 1;
    }
    console.log(ergebnis);
}
schleife();
//# sourceMappingURL=script.js.map