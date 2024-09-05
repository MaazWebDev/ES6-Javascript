// API :

// Appliction Programming Interface (API) . It is the medium to client side with the server side for data Storage in DataBases . The API allows us to communicate with the server and get data from it, and also to send data to it. It is like a "contract" between the client (the app or website) and the server (the database or other data storage).

// Example :

//As a real-world example, think about the electricity supply in your house, apartment, or other dwellings. If you want to use an appliance in your house, you plug it into a plug socket and it works. You don't try to wire it directly into the power supply — to do so would be really inefficient and, if you are not an electrician, difficult and dangerous to attempt.

//In the same way, if you want to say, program some 3D graphics,mit is a lot easier to do it using an API written in a higher-level language such as JavaScript or Python, rather than try to directly write low-level code (say C or C++) that directly controls the computer's GPU or other graphics functions.

// RestFull API :

// A RESTful API (Representational State Transfer API) are those which uses the same API URL but uses API Methods in order to ccordinate with server / databases .

// Methods To Call API :

// fetch("--------Url--------");  => Method to call Api

// There are four Methods to call Api :

// 1- GET Method :

// GET Method is used to fetch data from the server to admin .

fetch("https://dummyjson.com/products",{
    method: "GET",
})

// 2- POST Method :

// POST Method is used to send data from the admin to the server .

fetch("https://dummyjson.com/products", {
    method: "POST",
    body: JSON.stringify({
        // Body content as an object
        title: "Product Name",
        price: 123
    }),
    headers: {
        "Content-Type": "application/json"
    }
})


// 3- PATCH / PUT Method :

// PUT Method is used to modify the existing data from the server .
// It requires some special identification of existing data for executing modification

fetch("https://dummyjson.com/products/1", { // Assuming you are updating the product with ID 1
    method: "PATCH",
    body: JSON.stringify({
        price: 150 
    }),
    headers: {
        "Content-Type": "application/json"
    }
})


// 4- DELETE Method :

// DELETE Method is used to delete the existing data from the server .
// It requries some special identification of existing data for executing deletation.

fetch("https://dummyjson.com/products/1", { // Assuming you are deleting the product with ID 1
    method: "DELETE",
})

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));


// Alert :
    alert("Please check detail in Console !")