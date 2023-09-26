//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

let carValue;
console.log("Datatype of carValue is : "+ carValue);
// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/* Premitive Datatypes

             Type                                   typeof

i)            Number                              number
ii)           String                              string
iii)          Boolean                             boolean
iv)           Bigint                              bigint
v)            Symbol                              symbol
vi)           Null                                object
vii)          Undefined                           undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                               typeof

i)               Object                              object
ii)              Array                               object
iii)             Function                            function(object) /*

/* JS is Dynamic language because : You can create new variables at runtime, 
and the type of variables is determined at runtime */

// stack memory is all about primitive datatype
// Heap is all about non Primitive

// example of Stack
let myYoutubenme = "hiteshchoudharydotcom"      //stack myYoutube variable 

let anotherName = myYoutubenme                  // stcaak anotherName variabe

anotherName = "chaiaurcode"

console.log(myYoutubenme);
console.log(anotherName);

// example of Heap 

let usrOne = {
   email: "ajay@gmail.com",
   upi: "ajay@ybl"
}

let usrTwo = usrOne

usrTwo.email = "sharma@gmail.com"

console.log(usrOne.email);
console.log(usrTwo.email);
