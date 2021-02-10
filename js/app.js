'use strict'

let score = 0;

let userName = prompt('what is your name');
alert('welcome ' + userName + ' lets play agussing game');



/* 1- do we have one head

2- we have 4 senses in the head
3- do we have one eyes
4- we listening by mouth
5- you have tow hand   
 */
function firstQuestion(){
let head = prompt('do we have one head');

switch (head.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log('that\'s correct');
        alert('that\'s correct');
        score++;
        break;
    case 'no':
    case 'n':
        // console.log('sorry that\'s incorrect');
        alert('sorry that\'s incorrect');
    default:
        break;

}
}
firstQuestion();

function secondQuestion(){
let senses = prompt('we have 4 senses in the head?');

switch (senses.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log('that\'s correct');
        alert('that\'s correct');
        score++;
        break;
    case 'no':
    case 'n':
        // console.log('sorry that\'s incorrect');
        alert('sorry that\'s incorrect');
    default:
        break;

}
}
secondQuestion();

function thirdQuestion(){
let eyes = prompt('do we have one eyes?');

switch (eyes.toLowerCase()) {
    case 'no':
    case 'n':
        // console.log('that\'s correct');
        alert('that\'s correct');
        score++;
        break;
    case 'yes':
    case 'y':
        // console.log('sorry that\'s incorrect');
        alert('sorry that\'s incorrect');
    default:
        break;

}
}
thirdQuestion();

function forthQuestion(){
let listening = prompt('we listening by mouth?');

switch (listening.toLowerCase()) {
    case 'no':
    case 'n':
        // console.log('that\'s correct');
        alert('that\'s correct');
        score++;
        break;
    case 'yes':
    case 'y':
        // console.log('sorry that\'s incorrect');
        alert('sorry that\'s incorrect');
    default:
        break;

}
}
forthQuestion();

function fifthQuestion(){
let hand = prompt('you have tow hand?');

switch (hand.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log('that\'s correct');
        alert('that\'s correct');
        score++;
        break;
    case 'no':
    case 'n':
        // console.log('sorry that\'s incorrect');
        alert('sorry that\'s incorrect');
    default:
        break;
}
alert('thank you for playing ' + userName);

}
fifthQuestion();


function sixthQuestion(){
for (var i = 0; i < 4; i++) {
    
    let number = prompt('what is the number of this question?', 'enter here');

    if (number == 6) {
        alert('Good!');
        score++;
        break;

    } else if (number > 6) {
        alert('it\s too high');

    }else if(number<6){
        alert ('it\s too low');
    }
    else{alert('please input a number');}

}
alert(' the correct answer is 6');
}
sixthQuestion();

    // if (number> 6){
    //    alert ('it\s too high');
    //    let input2 = alert("Guess the number in 4 tries");
    // for (var i = 0; i < 4; i++) {
    //     if (input2 == 6) {
    //       alert('Good!');
    //       score++;
    //     } else {
    //       input2 = prompt("Wrong, enter again!")
    //     }
    //   }

    // }else if(number<6){
    //    alert ('it\s too low');
    //    let input2 = alert("Guess the number in 4 tries");
    // for (var i = 0; i < 4; i++) {
    //     if (input2 == 6) {
    //       alert('Good!');
    //       score++;
    //     } else {
    //       input2 = prompt("Wrong, enter again!")
    //     }
    //   }


    //   alert(' the correct answer is 6');}


function seventhQueston(){
    let place = ['amazon forests', 'trebzon', 'australia farms', 'alquds', 'cyprus', 'yafa']
    let input3 = alert("Guess the place that i love to visit in 6 tries ")
    let correctAnswer = false;

    for (let i = 0; i < 6; i++) {
        let input3 = prompt('what my favorite place'+place);

        for (let ins = 0; ins <= place.length; ins++) {
            // console.log(ins);
             console.log(place[ins]);
            
            if (input3 === place[ins]) {
                alert('correct');

                correctAnswer = true;
                score++;
                break;

            }


        }
        if (correctAnswer == true) {
            // console.log(corectAnswer);
            break;
        }
        console.log(correctAnswer);








    }
    alert('your score is ' + score);
}
seventhQueston();








