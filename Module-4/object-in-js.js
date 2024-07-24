//Global variable declare.
//j kono jayga theke call kore data pawa jabe example : -
var a = 10, b = 20;
console.log('value of a : ' + 'and value of b: ' + b);
function test (a , b) {
    console.log('A : ' + a + ' B : ' + b);
    var temp = a;
    a = b;
    b = temp;
    console.log('A : ' + a + ' B : ' + b);
}
test(a, b);// function close, ar baire ai data print hobe na
console.log('A : ' + a + ' B : ' + b);// Ager data call hobe

//Local function call
var obj = {
    a : 10,
    b : 20,
};
console.log('a: ' + obj.a + ' b ' + obj.b);
function sowp(x) {
    console.log('fast ' + x.a);
}
sowp(obj)