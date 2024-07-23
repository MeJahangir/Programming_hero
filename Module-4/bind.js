// bind methord add 
var myCustomObj = {
    names : 'Zonayed Ahmed',
    age : 21, 
    job : 'Sutdent',
    anotherObj : {
        names : 'Ahmed Zonayed',
        value : function () {
            console.log('My name is : ' + this.names);
        }
    }
};
myCustomObj.anotherObj.value.bind(myCustomObj);
console.log(typeof(myCustomObj.anotherObj.value.bind(myCustomObj)));// function hoye thakbe, pore j kono somai variable store korty parbo example:-
var storeVariable = myCustomObj.anotherObj.value.bind(myCustomObj);
console.log(storeVariable());

// Example:- (Bind) kono object er data k function kore varible er vitor store kore rakha jay, next time varible k call korle full data pawa jabe. 
