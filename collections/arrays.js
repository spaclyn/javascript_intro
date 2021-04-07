//Arryas 
/*  -Arrays are used to store multiple values in a single variable.
    -there are arry methods that allow us to traverse, as well as mutate the date being stored within the array.
    -Array are 0 indexed, first value will have an index of 0, and the last item will have an array length -1
*/

let arr= ['first','second','third'];
console.log(arr[arr.length - 1]);


let arr2 = Array(3);
console.log(arr2.length);

// FOREACH

let boardGames = ['monopoly', 'sorry', 'risk', 'clue']

boardGames.forEach(function (game) {
    console.log(game)
})

// METHODS

/* Array.push()
        add an element to the end of an array  */
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']

console.log(shoppingList.push('salt'))
console.log(shoppingList);

//Array.pop()
/* removes the last element of our array, and it'll return that element  */
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
shoppingList.pop
console.log(shoppingList)

//Array.unshift()
/* adds a new element to the beginning of an array . */
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
shoppingList.unshift('salt')
console.log(shoppingList)

//Array.shift()
/* remove the first from the array and return that element */
let shoppingList = [('celery', 'limes', 'lemons', 'salt', 'oranges')]
shoppingList.shift()
console.log(shoppingList)

//Array.Map
/* transforms the elements in the original array by calling the given function once for each element in the array */
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList.map((item) => item.toUpperCase()))

//Array.filter()
//  Creates a new array with only the elements that pass the test in a given function .
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList.filter(item => item.startsWith('l')))

//Array.find()
//  returns the first element in an array that passes a test given as a function .
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList.find(item => item.startsWith('l')))

//Array.reduce()
//  executes a given function for each value of the array and returns a single value 
let costs = [2.00, 3.00, 4.00, 5.00]
console.log(costs.reduce((acc, currentValue) => {
    return acc + currentValue
}))

costs.reduce((acc, currentValue) => {
    console.log(acc, currentValue)
    return acc + currentValue;
})  

let costs2 = [1, 1, 1, 1, 1]
console.log(costs)

//Array.indexof()

//Array.()

//array.splice( )
//add/removes elements in an array and returns the removed elements . fir argument takes an interger and specifies as what index to add / removes the elemtns . Second argument takes in the number of items to be removed. Optional thirm argument takes in the  new elements to be added to the array.
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
shoppingList.splice(2,1,'cherries');
console.log(shoppingList);

//Array.sort()
//Sorts the items in an array. the sort order can either be alphabetic or numeric. and either ascending or descending. by default sort() order the values as strings in alphabetic and ascending order.Can take in a compare function whihc indicates if you sor by ascending for descending values 
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList.sort())

let costs = [3, 2, 67,5];
//console.log(costs.sort((a,b) => a - b));
console.log(costs.sort((a , b) => b - a))

//Array.reverse
//reverse the order of the lemetns in an array
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList.reverse())

//Array.toString()
//converts an array into a strong
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList.toString())
let stringArr = shoppingList.toString()
console.log(typeof stringArr)

//Array.Join()
//Converts the elemetns of an array into a string. can accept an option parameter. Seperaator , which indicaties how the elements will be separated. Default separator is a comma .
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList.join('!, and '))

//Spread Operator
//the spread operator , indicated by '...' 3 dotes , expands the contents of an array , and takes them out of the array structure.
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
let arr2 = [1,2,3,4]
let values = [...shoppingList, ...arr2]
console.log(values)