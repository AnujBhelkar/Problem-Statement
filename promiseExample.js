/**
 * @description : TO create for Promise Example
 * @file        : promiseExample.js
 */

 /**
  * @description : Here i creating a promise with 2 parameter
  * @param {*} resolve
  * @param {*} reject
  */
    const promise = new Promise((resolve,reject) => {
        var a = 10;
        if(a === 10){
            resolve('Promise Resolved Succesfully')
        }else{
            reject('Promise Rejected')
        }
    })

    /**
     * @description : Here i calling Promises
     */
     promise
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })


/**
 * @description : nested promises
 */

new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(1)
    },1000)
})
.then(res => {
    console.log(res);
    return res*3
})
.then(res => {
    console.log(res);
    return res*3
})
.then(res => {
    console.log(res);
    return res*3
})