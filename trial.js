const myPromise = new Promise((resolve,reject) =>{
    let isMale = true;

    if(!isMale){
        resolve('male');
    }else{
        reject('Not male');
    }
});

// myPromise.then();
myPromise.then(message =>{
    console.log(message);
}).catch(messageError =>{
    console.log(messageError);
})