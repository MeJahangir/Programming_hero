var Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
};

var Teacher = function (name, age, job, subject) {
    Person.call(this, name, age, job);
    this.subject = subject; // Fix: initialize the subject property
};
console.log(Person.age);
var anyObj = new Teacher('xxxx', 0, 'xxx', 'xmm');
console.log(anyObj); // Fix: log the created object
