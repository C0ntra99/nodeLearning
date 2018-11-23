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

