//Objects are just blocks of data
var person = {
    firstName:"Ethan",
    lastName:"Fowler",
    age: 19,

    //defining methods within objects
    //similar to classes within python
    get_fullName : function () {
        //"this" refers to self
        return this.firstName + " " + this.lastName;
    }
};

//accessing values
//objectname.keyvalue or objectname['keyvalue']
console.log(person.firstName);
console.log(person['firstName']);

//calling methods that are inside of objects
console.log(person.get_fullName());

//using "new" will define a variable as an object
//Dont do this to define strings, numbers, or boolean values
var otherPerson = new String();
console.log(otherPerson);