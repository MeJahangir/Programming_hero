for (let index = 0; index < 10; index++) {
    const element = index ;
    console.log(element);
}


let num = 15;
do {
    console.log('Inside the loop , num is' + num);
    num++;
} while (num < 20);
console.log('Outsie the loop');

while (num > 6) {
    console.log('Inside the loop');
    num++;
    break;
}
console.log("Out of the loop");

const names = ['jahangir', 'alam','mehedi','nur','juwel','jakariya'];
console.log(names);
for (let x = 0; x < names.length; x++) {
    console.log(names[x]);
}

//for loop testing add 
for (let x = 0; x <= 20; x++) {
    // const element = x;
    console.log(x);
};
for (let m = 0; m <= 20; m++) {
    // const element = x;
    console.log(m);
};

// string type variable
var bottle = 'water';
var bottleColor = 'yollow';
//Number type variable
var sunglassPrice = 120;
var penColor = 'blue';
//boolean type variable
var isExpensive = true;

// array declare 
var tableItems = ['bottle', 'pen', 'mouse', 'sunglass', 'paper'];
var items = tableItems[3];// kono array k khuje pawa
console.log(items);
tableItems[4] = 'Notebook';// array value change.
console.log(tableItems);
console.log(tableItems.length);//length check result 5

// conditionals loops 
if (tableItems.length > 4) {
    console.log('pass');
} else if (tableItems[3] == 'pen') {
    console.log('good');
}else{
    console.log('nothing');
};