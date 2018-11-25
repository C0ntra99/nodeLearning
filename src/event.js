//chapter 2 in node.js in action
var fs = require('fs');
var events = require('events');

//            using new will create an instance of event.EventEmitter(); 
var emitter = new events.EventEmitter();

//Functions are defined just like variables but with function as the value
var myEventHandler = function(){
    console.log("Event has been triggered");
}

emitter.on('trigger', myEventHandler);

var rs = fs.createReadStream('./page.html');
rs.on('open', function() {
    console.log('file has been open');
    emitter.emit('trigger');
});

//HTML events

//<element event='some javascript'></element>
/*
onchange 	An HTML element has been changed
onclick 	The user clicks an HTML element
onmouseover 	The user moves the mouse over an HTML element
onmouseout 	The user moves the mouse away from an HTML element
onkeydown 	The user pushes a keyboard key
onload 	The browser has finished loading the page
*/

