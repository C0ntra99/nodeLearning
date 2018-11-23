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
} else if (num ==21) {
    console.log("Num is 21");
} else {
    console.log('Num is: ' + num);
}

//Switch statement is like case statement in bash

//Switch uses strict comparision "===" in order to compare for its comparison
console.log(new Date().getDate());
switch (new Date().getDay()) {
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;

    //values that share the same code block
    case 2:
    case 3:
        console.log("2 and 3 triggered")
    default:
        console.log('this is a default value')
    //etc...
}