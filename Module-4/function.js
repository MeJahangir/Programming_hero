
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