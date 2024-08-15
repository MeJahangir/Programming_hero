
function myFunction(one, two) {
    return  one + two;;
}
text = myFunction(100, 200);
console.log(text);

function myFunction() {
    console.log('Hello im from the functon');
}
myFunction();

function testFunction(x, y) {
    let sum = x + y;              
    return sum;
}

console.log(testFunction(100 , 100));

function welcomeMsg(names) { // Multy function add 
    console.log('Welcome M.r' + names);
    return function options(menu) {
        console.log('Do you like ' + menu + " " + 'M.r' + names);
    }
};
welcomeMsg(' jahangir alam')('Coffee');

function aFunc(a) {
    console.log('Before changing the Proparty ' + a.One);
    a.One = 'Two';
    console.log('After changing the proparty ' + a.One);
}

var a = {
    One: 'One'
}
aFunc(a)
console.log(a);


function aSimpleFunction () {
    console.log('A Simple Function');
}
aSimpleFunction();

function sumNumber(x, y) {
    var sum = x + y;
    console.log('Sum of ' + x + ' ' + 'and' + ' '  + y + ' '  + "is = " + sum);
}

sumNumber(10, 10);
sumNumber(12, 13);
sumNumber(100, 10);
sumNumber(101, 11);
sumNumber(26, 17);

test();
function test() {
    var a = 10;
    var b = 20;
    var sum = a + b;
    console.log('Sum: ' + sum);
}


// function 2 prokar
// 1. local function
//2. global function
function localFunction() {
    var local = 'I am local to my own function';
    console.log(local);
}
localFunction();

// global function add 
var globalvar = "I am a Global variable ";
function globalScope() {
    console.log('Inside a function: ' + globalvar );
}
globalScope();
console.log('Outside ' + globalvar);

//Multiple function add
function anoglobalFunction() {
    console.log("Global Function");
    function localFnc() {
        console.log('Local Function');
    }
    localFnc();
}
anoglobalFunction();

//global scope object add * sob jaygate add kora jabe
var person = {
    name: 'jahangir alam',
    age: 24
}
console.log(typeof(person));

//object function add * only functon er vitor add kora jabe
function objectFunction() {
    var localObject = {
        name : 'jahangir alam',
        age : 25
    }
    console.log(localObject);
}
objectFunction();
// console.log(localObject); // arror dibo, karon functon er baire call kora jabe na

//global variable add 
function autoVar() {
    myName = 'md jahangir alam';
}
autoVar();

console.log(myName);// sob jayga theke call korty parbo * global variable


// parent function and child function add 
function parentFuncton() {
    var m = 10;
    function childFunction() {
        var n = 5;
        console.log('Sum : ' + (m + n));
    }
   return childFunction;
}
var returnFun = parentFuncton();
returnFun();

function aParentFunc(A) {
    return function (B) {
        console.log('Sum : ' + (A + B));
    }
}
aParentFunc(10)(10);
//example 
var aParentVer = aParentFunc(10);
var total = aParentVer(11);

//IIFE Immediately invoked function expresion add 
function aDemoFunc() {
    console.log("Hello World");
}
aDemoFunc();

//example:
(function aDemoFunc() {
    console.log('Hello World');
})(); // same output return korbe

// this k console korle object dekhabe



function anyFunc(one, two) {
    var sum = one  + two;
    console.log(sum);
}
anyFunc(10, 29);



// Next task
// 1. function call and next page function mathord include add. 

function add (num1, num2) {
    console.log(num1 , num2);
    var sum = num1 + num2;
    return sum;
}
var total = add(40, 70);
console.log('Total = ', total);
