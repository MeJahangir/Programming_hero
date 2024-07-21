console.log(typeof(this));
// console.log(this === window);

function unName() {
    this.name = "jahangir alam";
}
unName();
console.log(name);

var name = 'joy';
console.log(name);

// function er vitor object call er rulse
var myCustomObj = {
    name : 'jahangir alam',
    age : 21,
    job : 'Student', 
    anotherObj : {
        name : 'alam jahangir',
        msg: function () {
            console.log('My name is : ' + this.name);
        }
    }
};
myCustomObj.anotherObj.msg();