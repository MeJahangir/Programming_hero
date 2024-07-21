// brack use 

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        break;
    }
    console.log('Index is now at : ' + index);
};

// Continue use
for (let index = 0; index < 20; index++) {
    if (index === 5) {
        //condition check kore jokhon 5 hobe. 5 k skip kore porer condition print korbe.
        continue;
    }
    console.log('Index is now at : ' + index);
}