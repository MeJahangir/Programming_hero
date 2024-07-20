
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
    console.log('Welcome Mr' + names);
    return function options(menu) {
        console.log('Do you like ' + menu + 'Mr' + names);
    }
};
welcomeMsg(' jahangir alam')('Coffee');