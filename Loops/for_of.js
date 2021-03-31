// For .. of Loop
/*
legend:
    keyword = 'for'
    var = some temp word you use to refer to the current item
    collection = some collection you want to go through  ex : Array or Obj or String

    *NOTE : this is better usually for arrays and strings if you want the items .

<keyword>(<var> of <collection>){
    //do something
}

*/
let students = ['amy', 'adam', 'blake', 'circe', 'drew']
for (let student of students){
    console.log(student)
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
for (let letter of alphabet){
    console.log(letter) // a good use of a for in loop
}

let person = {
    name: 'Atiyah',
    age: 25
}
for(let entry of Object.entries(person)){
    //console.log(property)
   // console.log(entry) // a good use of a for in loop
   console.log(`${k}:`)
}