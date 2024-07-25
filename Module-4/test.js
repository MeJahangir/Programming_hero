var Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

var Teacher = function (name , age , job) {
Person.call(this, name, age, job);
// this.subject = subject;
};
var anyObj = new Teacher ('xxxx', 000, 'xxx', 'xmm');
console.log(Person.name);