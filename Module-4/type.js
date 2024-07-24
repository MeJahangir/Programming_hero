// type check
var romantic;
console.log(romantic); // result undifined

var num1 = 0.1;
var num2 = 0.2;

var sum = num1 + num2;
sum = sum.toFixed(3);// result er por koto gulo 0 add hobe 
// tofiexed sob somai string k return kore  er jonno parseFloat use korty hobe
sum = parseFloat(sum); // akhon number kore print korbe
console.log(sum); // result : result er por 9 ta 0 add hobe;
