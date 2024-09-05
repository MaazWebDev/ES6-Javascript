// Fetch :

// Fetch is a build in Method of JavaScript which is used to call "API" via "API URL";

// The fetch() method returns a Promise that resolves to a Response object.

// Fetch returns two promises if get resolved 
// It always returns Encrypted data Object which should have to be decrypted for Further Uses

// Example :
fetch("https://dummyjson.com/products").then((res) =>{
    return res.json()}
).then((data) =>{
    console.log(data);
})

// Alert :
alert("Please check detail in Console !")