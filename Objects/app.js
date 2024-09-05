// Object :

// The object type represents one of javascript's data types . It is used to store various collection and more complex entities .Object can be created using object() constructor or the object initializer/literal syntax .

// ----------------------Or--------------------

// Objects in JavaScript are collections of key-value pairs. Each key is a string, and each value can be any JavaScript value. Objects are created using the object() constructor, or by enclosing key-value pairs within curly braces.

// Example :

const Car = {
    type:"Sedan",
    model:"2000",
    color:"White"
};

document.getElementById("demo").innerHTML = "The car type is " + Car.type + " and its model is " + Car.model ;

// Output : The car type is Sedan and its model is 2000

// Note : It is a common practice to declare objects with the const keyword.

// Object Properties :

// Properties are the mst important part of javascript . Properties can ce changed , deleted , added ad some are read only .

// Syntax :

// let age = person.age; objectName.property

// let aae = person["age"]; objectName["property"]

// let age = person[x]objectName[expression] 

// Example :

const person = {
    name:"Maaz",
    age:20,
    city:"Karachi"
}; 

    document.getElementById("demo1").innerHTML = person.name + " live in " + person.city;

// Adding Object Property :

// You can add new properties in existing object by simply giving it a value .

// Example :

person.gender = "Male";

    document.getElementById("demo2").innerHTML = person.name + " is " + person.age + " years old and he is a " + person.gender;

// Deleting Object Property :

// You can delete a property from an object by using the delete keyword .

// Example :

delete person.gender;

    console.log(person.gender); // it shows undefined because the property is deleted 

// Object Method :

// Object method are the action that can be performed on objects . A method is a function definiton store as property value .

// Example :

const person1 = {
    firstName:"Maaz",
    lastName:"Khan",
    age:20,
    city:"Karachi",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

document.getElementById("demo3").innerHTML = person1.fullName();




