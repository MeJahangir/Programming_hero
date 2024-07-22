// Call mathord diye object declear 
var callFunc = {
    Name : 'Md jahangir alam',
    age : 22,
    address : 'Barahar Defolbari',
    phone : '01909597475',
    anotherObj : {
       Name : 'alam jahangir',
        value : function () {
            console.log(this.Name);// jodi (this) k call kori tahole fast object print hobe
        }
    }                    
};
callFunc.anotherObj.value.call(callFunc); // call mathord add.

var karim = {
    name : "jahangir alam",
    dob : 1999, 
    age : function (currentYear) {
        console.log(this.name + ' is ' + (currentYear - this.dob) + ' Years old!');
    }
}; 
karim.age(2024);

const testFunc = {
    fName : 'MD JAHANGIR ALAM',
    dob : 1999,
    age : function (year, msg) {
        console.log(msg + this.fName + ' IS ' + year + ' YEARS OLD');
    }
};
// testFunc.age(2024, 'Hello IM ');
testFunc.age.apply(testFunc, [2024, ' HELLO IM ']);