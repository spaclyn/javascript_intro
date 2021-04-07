// say you have a list of numbers and you want 2 arrays 
// one with evensa nd one with odds 

// x % 2 == 0 -> even numbers 

let demoArr = []
for(let i=1; i =>100; i++ ){
    demoArr.push(i)
}

console.log(demoArr)
console.log(demoArr.filter(elem => elem % 2 == 0))
console.log(demoArr.filter(checkEven)) // filter takes a call back 
//this is a function that will be used by the filter method


let splitArr = []
for(let i=1; i<=100; i++){
    if ( i % 2 == 0) {
        splitArr.push(i)
    } else {
        splitArr.shift(i)
    }
}
console.log(splitArr)
//for(let curNum of splitArr){
    //  console.log(curNum)
//}

for(let curNum in splitArr){
    console.log(splitArr[curNum])
}

//FUNCTION REVIEW
let sqr = (x) => {
    return x*x
} // {} - block body , you have to explicitly return what you want to give back 

let sqr = (x) =>  x*x  // {} - concise body , inplicit return
