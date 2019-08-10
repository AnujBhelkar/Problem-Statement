/**
 * @description : This file create for callback example.
 * @file        : callbackEx.js
 * @author      : Anuj
 * @since       : 09-08-2019
*/

 /**
  * @param { value } x 
  * @param { value } y 
  * @param { function } callback 
  */
function Example(x,y,callback) {
    var c = x + y
   callback(c)    
}
function display(c) {
    console.log("Output of addition is -->",c);    
}
Example(10,20,display)
