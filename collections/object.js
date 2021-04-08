// OBJECTS 

/*
    syntax:
        {
            k1 : v1,
            k2 : v2
        }

        keys can be in "" but dont have to be if they are valid var names,  
        i.e they don't start with a "number" or have invalid chars
*/
let obj1 = {
    name: "atiyah"
}

let obj2 = {
    "2name": "elliot"
}
//there are two ways to get things out objects "dot" notation and 
//"square bracket" notation

console.log(obj1.name)
console.log(obj1["name"])

let car = {
    make: "jeep",
    model: "wrangler",
    year: 2020,
    miles: 10_000,
    owners: [
        { name: "amy" },
        { name: "josh" }
    ]
}
console.log(car.miles)
console.log(car["miles"])
console.log(car.owners[0].name) // obj can hold more then just primitive types

let person = {
    fName: "Atiyah",
    lName: "Ellerbee",
    age: 25,
    fullName: function () {
        return `${this.fName} ${this.lName}`
    },
    greet: function (greetWord) {
        return `${greetWord}, ${this.fName}`
    }
}

console.log(person.fName)
console.log(person.fullName())
console.log(person.greet("hello"))

//This Demo shows that we can add new keys through assignment
let builderObj = {}  // an empty obj
console.log(builderObj)
builderObj.name = "Atiyah"
builderObj["age"] = 25
builderObj.greet = function (greetWord) {
    return `${greetWord}, ${this.name}`
}