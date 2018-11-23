//Learning if statements and looping
var num = 20;

/*
== : Equal to
=== : Equal Value and type
!= : Does not equal
!== : does not equal value OR type

doing variable definition with conditions
variablename = (condition) ? value1:value2 
var ableToVote = (age < 18) ? false:true
*/
if (num === 20) {
    console.log("Num is equal to 20");
} else {
    console.log('Num is: ' + num);
}

//Switch statement is like case statement in bash

switch (new Date().getDay()) {
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    default:
        console.log('this is a default value')
    //etc...
}

