let score= "33abc" //created a NaN:not a number

console.log(typeof(score))    //checking by considering score through a method
console.log(typeof score)     //checking using the function

//conversion operations

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // converts the value into number, then let the value be a string or not apure number
console.log(valueInNumber) //gives NaN:Not a number 

/*
    @yashkirad1712 ➜ /workspaces/JavaScript/01_Basics (main) $ node 03_conversionOperations.js
    string
    string
    number
    NaN
*/

// "33" => 33
//"33abc" => NaN
// true => 1;false =>0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

//1 => true; 0 =>false
// "" => false; "absc" => true


/*****opertaions******/

console.log(2+2)
console.log(1 + "2")
console.log("1" + 2)
console.log("" + 2)

//prefix and postifx opertaions

let num1 = 1
const num2 = num1++;

console.log(num1, "|" , num2)

let num3 = 1
const num4 = ++num3; 

console.log(num3, "|" , num4)

