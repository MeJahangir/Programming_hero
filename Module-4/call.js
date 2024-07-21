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