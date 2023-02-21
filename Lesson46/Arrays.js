/*Task 1

var array = [];
var n = parseInt(prompt("Number: "));
for (var i = 0; i < n; i++){
    array.push(2 * i + 1);
}
alert(array);*/

/*
Task 2

var array = [];
var n = parseInt(prompt("Number: "));
for (var i = 0; i < n; i++){
    array.push(2 ** (i + 1));
}
alert(array);*/

/*
Task 3

var array = [];
var a = parseInt(prompt("A: "));
var d = parseInt(prompt("D: "));
var n = parseInt(prompt("Number: "));
for (var i = 0; i < n; i++){
    array.push(a + d * i);
}
alert(array);
*/

/*
Task 6

var arrays = [1, 2, 3, 4, 5];
arrays.reverse();
alert(arrays);
*/

/*var array = [];
for (let i = 0; i < 10; i++){
    array.push(Math.floor(Math.random()*11));
}
console.log(array)
con = false;
for (let i = 0; i < array.length; i++){
    if (array[i] < array.at(-1)){
        con = true;
        console.log(array[i] + " " + i);
        break;
    }
}
if (!con) console.log(0);*/

const users = ["Tom", "Sam", "Bob"];
console.log(...users);  // Tom Sam Bob

console.log(users);     //  ["Tom", "Sam", "Bob"]


