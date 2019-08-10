var fs = require('fs')
var object = fs.readFileSync('./File.json')
var data = JSON.parse(object)
console.log("object is ==>",object,data);
var writeData = {
    login : {
        email : 'sam123.dom@gmail.com'
    }
}
var JSONStringfyData = JSON.stringify(writeData)
console.log("JSONStringfyData ==> ",JSONStringfyData);

fs.writeFileSync('./File.json',JSONStringfyData,'utf-8',() => {
    console.log('done',writeData);   
})