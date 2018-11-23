//Objects are equal to dictionaries in python
var obj = { key1:"1", key2:"1", "key3":{hiddenkey:1}}

//Find all keys
console.log(Object.keys(obj));
//find all values
console.log(Object.values(obj));


console.log(typeof(obj));
//showing nested objects
console.log(obj.key3.hiddenkey);

console.log(typeof(1));

var testArray = [1,2,3];
console.log(typeof(testArray));
console.log(testArray[0]);

//redefining an array index 
testArray[0] = 5;
console.log(testArray);

//Defining functions with arguemtns
//Javascript does not allow for default values
//Default values must be set within the function 
var add = function(x,y) {
    return x+y;
}

console.log(add(1,2));

//Turnning an array of variables into and array of values
let [a,b,c] = [1,2,3];
console.log(a,b,c);

//defining variables with ley vs with var
//https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable-in-jav
//Using let will allow the variable to be limited to the block of code it is within (i.e a loop)
function allyIlliterate() {
    //tuce is *not* visible out here
    
    for( let tuce = 0; tuce < 5; tuce++ ) {
        console.log("Inside of loop: " + tuce);
        //tuce is only visible in here (and in the for() parentheses)
        //and there is a separate tuce variable for each iteration of the loop
    }
    //console.log("Outside of loop: " + tuce);
    //tuce is *not* visible out here
}

function byE40() {
    //nish *is* visible out here

    for( var nish = 0; nish < 5; nish++ ) {
        console.log("Inside of loop: " + nish);
        //nish is visible to the whole function
    }
    console.log("Outside of loop: " + nish)
    //nish *is* visible out here
}

allyIlliterate()
byE40()

//Strings
var str = "this is a string";
console.log("String is: " + str);
console.log("Length of the string is: " + str.length);


//finding the index of a char
var abc = 'abc';
console.log(abc.indexOf('c'));

//slicing
console.log(abc.slice(0,1));

//replacing
str.replace("string", "no a string");

//uppercase 
str.toUpperCase()
//Special characters that must be escaped
// \ " '
// escape character is "/"

//Creating variables as objects instead of their defined type
var strObj = new String("String Object");
var numObj = new Number(123);

