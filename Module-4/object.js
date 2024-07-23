var jahangir = {
    fullName : 'Md jahangir alam',
    age : 25,
    address : "Dhaka",
    job : 'Job Holder'
};
jahangir.code = 1216 // new value add
jahangir.welcomeMsg = function () {
    console.log("Hello There");
}

jahangir.welcomeMsg();
console.log(jahangir.welcomeMsg);// object er value check


const testObj = {
        names : 'jahangir alam',
        age : 24,
        job : 'Student',
        nur : {
            names : 'Nurmohammad',
            age : 40,
            job : 'Privet job holder',
            House : 'Barahar',
            Sobur : {
                names : 'Sobur miya',
                age : 11,
                job : 'Privet job holder',
                House : 'Defolbari',
                Msg : function () {
                    console.log('Your information : ' + this.names);
                }
            }
        }
    };
    
testObj.nur.Sobur.Msg();

// Call mathord diye object declear 
var callFunc = {
    Name : 'Md jahangir alam',
    age : 22,
    address : 'Barahar Defolbari',
    phone : '01909597475',
    anotherObj : {
       Name : 'alam jahangir',
        value : function () {
            console.log('My name is '+this.Name);// jodi (this) k call kori tahole fast object print hobe
        }//.call(callFunc)
    }
};
callFunc.anotherObj.value.call(callFunc); // call mathord add.


var karim = {
    name : "Rahim abdu",
    dob: 1986,
    age : function(currentYear, msg){
        console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob)+ 'years old!');// print korbe aitar niyom onujay.
    }
}

var rahim = {
    name : 'Karim abdu',
}
var rahimAge = karim.age.bind(karim, 2024);
rahimAge('Hello...');
var rahimAgeCalculate = karim.age.bind(rahim);
rahimAgeCalculate(2016,'hello ahmed');
rahimAgeCalculate(2015, 'test masage');