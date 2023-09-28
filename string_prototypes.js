// **String prototype anchor()
const gameName = new String('Assian Greed')
console.log(gameName.anchor("Ajay"));
//output - <a name="Ajay">Assian Greed</a>


// **String prototype at()
const mainChar = 0
console.log(`i am playing a game of ${gameName} the Main Char start from ${gameName.at(mainChar)} `);
//output i am playing a game of Assian Greed the Main Char start from A 



// **String prototype big()
console.log(gameName.big());  
//output - <big>Assian Greed</big>



// **String prototype blink()
console.log(gameName.blink());
//output <blink>Assian Greed</blink>


// **String prototype bold()
console.log(gameName.bold());
//output : <b>Assian Greed</b>


// **String prototype charAt()
console.log(`My Game Name is ${gameName} so first letter of that Game is ${gameName.charAt(0)}`);
//output: My Game Name is Assian Greedso first letter of tat Game is A


// **String prototype charCodeAt()
let index = 5
console.log(gameName.charCodeAt(index));


// **string prototype concat()
let Exa = "Mistry"
console.log(gameName.concat(` ` + Exa));  //output ->> Assian Greed Mistry
console.log(`${gameName} ${Exa}`);        //output ->> Assian Greed Mistry


// **string prototype endsWith() & startwith()
let email = "assian@gmail.com"
console.log(email.endsWith('@gmail.com'));   //true
console.log(gameName.endsWith('reed'));      //true
console.log(gameName.startsWith('As'));      //true
console.log(gameName.endsWith('assian'));    //false

// **string prototype fixed()
console.log(gameName.fixed());
//output <tt>Assian Greed</tt>


// **string prototype fontcolor() & fontsize()
console.log(gameName.fontcolor('blue')); 
console.log(gameName.fontsize('22px'));
//output <font color="blue">Assian Greed</font>


// **string prototype includes()
let EnterCoupnCode_Field = "20OFF"
let couponCode = "20OFF"
console.log(`The word ${EnterCoupnCode_Field.includes(couponCode) ? 'Coupon is Active Now Press Enter' : 'Coupon is not valid'}`);
//output The word Coupon is Active Now Press Enter
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(`${sentence.includes('quick')}`);   //true

//starteith()

console.log(couponCode.startsWith('20'));  //true




// **string prototype indexOf

const paragraph = new String('The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?');

console.log(paragraph);

const searchTerm = 'dog';

const indexOfFirst = paragraph.indexOf(searchTerm); // 40

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, indexOfFirst + 1)}`);
//  Expected output: "The index of the 2nd "dog" is 52"



// **string prototype valueOf()

const legDay = new String("Leg curl & leg Extension")
console.log(legDay.valueOf());
//output returns the value of string datatype - Leg curl & leg Extension


// **string prototype trim()

const usrName = "    Ajay Sharma     "
const customerName = "      Ajy shatasha"
const peopleName = "Akash yadav       "
console.log(usrName.trim());
console.log(customerName.trimStart());
console.log(peopleName.trimEnd());



// **string prototype toLowerCase()

const moneyCuts = "Dubai based Hair cut saloon"
console.log(moneyCuts.toLowerCase()); //dubai based hair cut saloon
console.log(moneyCuts.toUpperCase()); //DUBAI BASED HAIR CUT SALOON


// **string prototype substring()

const debitCard_Last_four_digit = "1298326465236573"
console.log(debitCard_Last_four_digit.substring(12, 16)); // output 6573
console.log(debitCard_Last_four_digit.substring(3));












