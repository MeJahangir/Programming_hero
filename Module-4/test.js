var Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
};

//--------//
var info = {
    name : 'jahangir alam',
    age : 25, 
    job : 'privit'
};

var Teacher = function (name, age, job, subject) {
    Person.call(this, name, age, job);
    this.subject = subject; // Fix: initialize the subject property
};
console.log(info.name);
var anyObj = new Teacher('xxxx', 0, 'xxx', 'xmm');
console.log(anyObj); // Fix: log the created object
