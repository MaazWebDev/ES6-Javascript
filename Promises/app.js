// Producing Code :
// Producing code is a code contains that can take some time .

// Consuming Code :
// Consuming code is a code that must wait for the result .

// Promises :

// A Promise is an object that links Producing and consuming code .

// ----------------Or--------------

// The promise object represents the eventual completation (or failure) of an asynchoronous function and its resulting value .

// Syntax :

let myPromise = new Promise(function(myReslove , myReject){
// Produing code (May take some time)

myReslove(); // when successfull 
myReject(); // when error
});

myPromise.then(
    function(value){/*code if successful*/},
    function(error){/*code if error */}
);

// A promise is in one of these states :

// Pending : Initial state , neither full filled nor rejected
// Fullfilled : meaning that the operation was completed successfully
// Rejected : meaning that the operation failed

// Example :

const arrowFunc = (name)=>{
    setTimeout(console.log(`Hello ${name}`),2000);
    return new Promise((resolve,reject)=>{
        if(name === "Maaz"){
            resolve("Promise resolved !")
        }else{
            reject("Promise rejected !")
        }
    })
}

arrowFunc("Maaz").then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})

// Alert :
alert("Please check detail in Console !")