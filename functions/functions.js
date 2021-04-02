// name (data) => data out
// f(x) = x * x // sqr function 
/* 
way one : 
<keyword> <yourName> (<what i want to work>){
    //what i do
    return <something> // what i want to give bakc 
}
 */

// Two ways to write a function in js 
function sqr(x){
    return x * x
}

console.log(sqr(5))

let aSqr = (x) => {
    return x * x  // explicit return
}

let bSqr = (x) => x * x
let cSqr = x => x * x  // implicit return 

function greet (){ // needs no parameters to work 
    console.log("hello world")
}
greet()
function betterGreat(fName){ // this is a one arguement function
    console.log("Hello " + fName)
}
betterGreat("Atiyah")

let createFullName = (fName, lName) =>  `${fName} ${lName}`
let fullName = createFullName("Atiyah", "Ellerbee")
console.log(fullName)




function add2(x, y){
    let z = 5 // this line is not returned from the function call 
    x + y 
}
console.log(add2(3, 5))