const accountId = 2988;                   // const cannot be change once's declared 
let accountEmail = "ajay@gmail.com"       // let rule on scope cannot be changed out of scope 
var accountPassword = "989898923"         // cwe can change it 
var $ = "jjksjk"                         // dollar sign is an type of string
accountCity = "Udaipur"                // by default js declared variables if you not declared 

// console.log(typeof($));                // typeof operator to find the data type of a JavaScript variable


// testing which variable can be changed by below code 

// accountId = 99821298;                 //cannot changed due to const   
accountEmail = "ajaysharma@gmail.com"    // changed but we cannont create another let variable of accountEmail again dueb to scope
// let accountEmail =  "kdkdjkddsd";     // as you can see it will give error while creating same named let variable 
accountPassword = "12122"                // changed      
$ = "dollar" 


console.table([accountId, accountEmail , accountPassword, $]);


/* NOTE
Prefer not to use var
because of issue in block scope and functional scope
*/