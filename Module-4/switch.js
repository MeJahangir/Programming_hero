var weekDay = "Friday";
switch (weekDay) {
    case 'Saturday':
        console.log('Suturday ! Today is closed');      
        break;
    case 'Sunday':
        console.log('Sunday! It is normol day');
    case 'Monday':
        console.log('Monday ! Today is normol day');      
        break;
    case 'Tuesday':
        console.log('Tuesday! It is normol day');
    case 'Wednesday':
        console.log('Wednesday ! Today is normol day');      
        break;
    case 'Thurseday':
        console.log('Thurseday! It is normol day');
    case 'Friday':
        console.log('Friday ! Today is closed');      
        break;
default:
        console.log('Not a day');
}


var day = 'friday';
switch (day) {
    case 'sunday':
        console.log('off day');
        break;
    case 'saturday':
        console.log('Off day');
        break;
    case 'friday':
        console.log("Jumma mubarak");
        break;
    default:
        console.log('ajke amar mon valo nai');
        break;
};

// credit and debit info switch cash
let paymentMethod = "credit";

switch (paymentMethod) {
  case "cash":
    console.log("You chose to pay with cash.");
    break;
  case "credit":
    console.log("You chose to pay with credit.");
    break;
  case "debit":
    console.log("You chose to pay with debit.");
    break;
  default:
    console.log("Unknown payment method.");
}
