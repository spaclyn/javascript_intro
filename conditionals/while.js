//WHILE LOOPS
/* 
legend:
    keyword = while 
    1 = some eval or expression that is true of false

    <keyword(<1>){
        //do something
    }
*/

let i=0
while(i <= 10){
    console.log(i)
    i++
}

for(let x=0; x<=10; x++){
    for(let y=0; y<=10; y++){
        console.log(x, y, x * y)
    }
} //for loop nesting

while(true){
    console.log("Help this loop is always true")
    break; // What does this do ? Breaks the loop
}


let names = ["Justin", "Adam", "Kate", "Jim", "Amy"]
for (let name in names){
    let curName = names[name]
    console.log(curName)
    if (curName == "Kate"){
        break;
    }
}

// Break / Continue
let counter = 0
while(counter <=20 ){
    if (counter % 2 === 1 ) {
        counter++
        continue // ? what is this
    } 
    console.log(counter)
}

for(let tmp=100; tmp<=0; tmp -=5){
    console.log(tmp)
}

let tmp = 100
while(tmp >= 0){
    console.log(tmp)
    tmp -= 5
}