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
        {name:"amy"},
        {name:"josh"}
    ]
}
console.log(car.miles)
console.log(car["miles"])
console.log(car.owners[0].name) // obj can hold more then just primitive types

let person = {
    fName: "Atiyah",
    lName: "Ellerbee",
    age: 25,
    fullName: function(){
        return `${this.fName} ${this.lName}`
    },
    greet: function (greetWord){
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
builderObj.greet = function (greetWord){
    return `${greetWord}, ${this.name}`
}
console.log(builderObj)
console.log(builderObj.greet("Hello"))

// A look ahead at "classes", special type of way to build an obj
let spot = {
    breed: "Rott",
    age: 3,
    bark: function(){
        return 'The ' + this.breed + ' Barks'
    }
}

console.log(spot.bark())


class Dog{
    constructor(breed, age){
        this.breed = breed
        this.age = age
    }
    bark = fuction() {
        return 'The ' + this.breed + ' Barks!'
    }


let fido = new Dog ("lab", 25)
let lucky = new Dog("corgi", 12)
let dogs = [new Dog("lab", 25), new Dog("corgi", 25)]
dogs.forEach(dog => console.log(dog.bark()))
