console.log(5 == 6);// result: false
console.log(5 != 6);// result: true
console.log(5 < 6);// result: true
console.log(5 > 6);// result: false
console.log(5 >=  6);// result: false
console.log(5 <=  6);// result: true

// comparison example add
let iphonePrice = 100000;
let myBudget = 95000;
if (iphonePrice > myBudget) {
    console.log('Iphone kine futani marbo');
}else{
    console.log('Amar iphone kinar taka nai');
};

//Multy condition check
let isGraduated = true;
let salary = 75000;
let cars = 1;

if (isGraduated == true && salary > 50000 && cars >= 1) {
    console.log('Eso biye kore fali');
}else{
    console.log('Tor kopale biya nai');
};

if (isGraduated == false && (salary > 76000 || cars >= 1)) { //bracket na dile kono akta right hobe true print hoito.
    console.log('You are right');
}else{
    console.log('You are Hrong');
}