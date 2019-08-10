/**
 * @description : Example of Event Emitter.
 * @file        : eventEmitter.js 
 */

const events = require('events')
const Event = new events.EventEmitter();
/**
 * @description : Here i have bind event with function
 * @param { events } play : here we can create any name as event
 * @param { value } a & b : this 2 are function value 
 */
Event.on('play',(a,b) => {
    var c = a + b
    console.log("Addition is ==>",c,a,b);
})
/**
 * @description : Here i write event name that i have to call and passed function value
 * @param { value }  
 */
Event.emit('play',40,50)