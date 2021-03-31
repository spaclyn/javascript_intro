// Conditional Statments

/* Conditionals are used to excute a piece of code if a condition is true . they allow our code to make decisions and carry out actions based on those decisions. 
*/

// -IF statements 
// -Switches
// - Ternaries

//If Statements 

let mathResults = 2 + 2 === 5
console.log(mathResults)

if(mathResults) console.log('this equates to true')

// Block Body + Else 

if(mathResults){
    console.log('This equates to true')
    }else{ 
        console.log('This Equates to false')
    }

// Chaining if/else statements 
// else ifs allow use to provide a new condition to test if the conditions above are not met .
let tempF = 'random';

if(tempF > 95){
    console.log("it's hot!")
} else if (tempF > 50){
    console.log("It's Warm")
} else if(tempF > 32){
    console.log("It's Chilly")
} else if (tempF <= 32){
    console.log("It's Freezing")
} else {
    console.log("I cannot provide the weather")
}

//Testing multiple conditions

let myName = "Atiyah"
let age = 25

if (myName === 'Atiyah'){
    console.log('Name Logged');
} else if ( age === 25 ){
    console.log('Age Logged')
} else if (myname === 'Atiyah' && age === 25){
    console.log('Name & Age Logged');
}


//Switches
// Run a block of code based of different cases 

tempF = 'random';

switch(true){
    case tempF > 95:
        console.log("It's Hot!");
        break;
    case tempF > 50:
        console.log("It's Warm");
        break
    case tempF > 32:
        console.log("It's Chilly")
        break
    case tempF <= 32:
        console.log("It's Freezing")
        break
    default:
        console.log("I cannot provide the weather")
}

let dog = 'Lab'
let dogLower = dog.toLowerCase();

switch(dogLower){
    case 'husky':
        console.log("The husky jumped in snow!")
        break
    case 'lab':
        console.log("The lab caught the ball!")
        break
    case 'shepard':
        console.log("The shepard wagged it's tail")
        break
}

let firstName = "Bob";
switch(firstName){
    case 'Justin':
    case 'Amit':
        console.log('They are an instructor')
        break
    default: console.log('They are a student')
}

//Ternaries
// Condition? True : False

let lightSwitch = false;

lightSwitch ? console.log('Lights are on') : console.log('Lights are off')

tempF = 55;

tempF > 95 ? console.log("it's hot"):
tempF > 50 ? console.log("it's warm"):
tempF > 32 ? console.log("It's Chilly"):
tempF <= 32 ? console.log("it's freezing"):
console.log("I cannot provide the weather!")