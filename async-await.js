/**
 * @description : here i create for async await example  
 */

 /**
  * @description : Here i wirte a function that return promise
  * @param {value} x 
  */
function square(x) {
    return new Promise((resolve,reject) => {
        if(x % 2 === 0){
            setTimeout(() => {
                resolve(Math.pow(x,2))
            },2000)
        }
        else{
            reject('value is odd')
        }
    }) 
}
async function value(x){
    await square(x)
        .then(value => {
            console.log('value is -->',value);
        })
        .catch(err => {
            console.log(err);
        })
}
value(9)