//For .. in Lopp
/*
legend:
    keyword = 'for'
    var = some temp word you use to refer to the current item
    collection = some collection you want to go through  ex : Array or Obj or String

<keyword>(<var> in <collection>){
    //do something
}
*/
let person = {
    name: 'Atiyah',
    age: 25
}
//A look ahead 
// console.log(person.name)
// console.log(person["name"])

for(let property in person){
    //console.log(property)
    console.log(person[property]) // a good use of a for in loop
}

let randomNums = [1, 9, 30, 31, 11, 29, 53]
for(let rand in randomNums){
    //console.log(rand)
    if (rand % 2 === 0){
    console.log(randomNums[rand])
    }
}

let fullName = "Atiyah Ellerbee"
for (let letterId in fullName){
    //console.log(letterId)
    console.log(fullName[letterId])
}