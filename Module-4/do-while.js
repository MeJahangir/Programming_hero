//condition jotokhon sotto hobe toto somai do looping hobe, condition false hole while print hobe
var num = 10;
do{
    console.log("Inside the loop, Number is : " + num);
    num += 1;
}while (num <= 30) {
    console.log("Out side the loop");
};


var num = 30;
do{
    console.log("Inside the loop, Number is : " + num);
    //upore console print hobe er karon holo condition check korar age e console print hoye gase.
    num += 1;
}while (num <= 10) {
    console.log("Out side the loop");
};