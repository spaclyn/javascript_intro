// What is a Boolean?
// true or false value  ;  they are either TRUE or FALSE

/*
x = 5  <----- never do this 
var x = 5 <---- don't do this either
let x = 5 <--- When you might change the value
const x = 5 <--- when you want the value to stay the same
*/
// creating a new variable ( 2 steps )
// Declaration
let y
// Initialization / variable assignment
y = 5

// How can we make booleans
let x = Boolean(5) // function that turns something into a bool
x = Boolean(0) // reassignment
console.log(x)

let z = false
z = true
console.log(typeof z)

let result = 5 > 4
console.log(result)
/* 
== checks for equality 
>=
>
<=
<

&& returns true if both (a && b) are true 
|| return true if either (a || b) are true
*/
let flippedBool = !true
//console.log(flippedBool)
// console.log(!true || false)

// Truthy / Falsey
// Truthy 'test', [1, 2], { test:5 }, 1
let testResult = Boolean([1,2])
testResult = Boolean("test")
console.log(testResult)

// Falsey [], 0, "", null, undefined, NaN
let falseyTest = Boolean(0)
// if you try to turn an empty [], {}
// you get back true
console.log(falseyTest)

// Bonus
let boolConv = !!(0)  // this is just for exposure
console.log(boolConv)

//Why are they useful?

// KEY 
// true && true = true 
// true && false = false 
// false && true = false 
// false && false = false 

// true || true = true 
// true  || false = true
// false || true = true 
// false || false = false 