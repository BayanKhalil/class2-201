'use strict'

let userName = prompt('what is your name');
alert('welcome ' + userName + ' lets play agussing game');



/* 1- do we have one head

2- we have 4 senses in the head
3- do we have one eyes
4- we listening by mouth
5- you have tow hand   
 */
let head = prompt('do we have one head');

switch (head.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log('that\'s correct');
        alert('that\'s correct');
        break;
    case 'no':
    case 'n':
        // console.log('sorry that\'s incorrect');
        alert('sorry that\'s incorrect');
    default:
        break;

}


let senses = prompt('we have 4 senses in the head?');

switch (senses.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log('that\'s correct');
        alert('that\'s correct');
        break;
    case 'no':
    case 'n':
        // console.log('sorry that\'s incorrect');
        alert('sorry that\'s incorrect');
    default:
        break;

}


let eyes = prompt('do we have one eyes?');

switch (eyes.toLowerCase()) {
    case 'no':
    case 'n':
        // console.log('that\'s correct');
        alert('that\'s correct');
        break;
    case 'yes':
    case 'y':
        // console.log('sorry that\'s incorrect');
        alert('sorry that\'s incorrect');
    default:
        break;

}

let listening = prompt('we listening by mouth?');

switch (listening.toLowerCase()) {
    case 'no':
    case 'n':
        // console.log('that\'s correct');
        alert('that\'s correct');
        break;
    case 'yes':
    case 'y':
        // console.log('sorry that\'s incorrect');
        alert('sorry that\'s incorrect');
    default:
        break;

}

let hand = prompt('you have tow hand?');

switch (hand.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log('that\'s correct');
        alert('that\'s correct');
        break;
    case 'no':
    case 'n':
        // console.log('sorry that\'s incorrect');
        alert('sorry that\'s incorrect');
    default:
        break;
}
alert('thank you for playing ' + userName);



