let day = 'monday';

switch (day) {
    case 'saturday':
        console.log("today is saturday");
        break;

    case 'sunday':
        console.log("today is sunday");
        break;    

    case 'monday':
        console.log("today is monday");
        break;      


    default:
        console.log("today is default day");
        break;
}


let num = 1000;
switch(num){
    case 1000:
        console.log('I am 1000');
        break;
    case 500:
        console.log('I am 500');
        break;
    case 100:
    case 200:
        console.log('I am either 100 & 200');
        break;
    default:
        console.log("I don't know who you are");
}