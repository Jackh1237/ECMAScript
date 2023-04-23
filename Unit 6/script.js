/////////////////////////////////////////////////////
// Fat Arrows
// TODO: Re-create the following function using the ES6 fat arrow syntax.
/*
function powered2() {
    let values = []
    for (let i = 0; i < 100; i++) {
        let x = Math.pow(i, 2)
        values.push(x);
    }
    return values;
}
*/
let powered2 = () => {
    let values = []
    for (let i = 0; i < 100; i++) {
        let x = Math.pow(i, 2)
        values.push(x);
    }
    return values;
}
console.log(powered2());



/////////////////////////////////////////////////////
// Anonymous Functions
// TODO: Create an anonymous function that prints the square root of a number.
// Hint: Use the built-in JavaScript Math function, sqrt().


(function (number)  {
    let num = Math.sqrt(number);
    let msg = "The square root of " + number + " is:"+ num
    
    console.log(msg)

}) (4);


/////////////////////////////////////////////////////
// Default Parameters
// TODO: Create a function called player() and set up default parameters for the name, health, strength, and defense stats
// Hint: In the function, print out the player's name and stats.
function player(name = "Name", health = 0, defense = 0, strength = 0) {
    console.log("Welcome " + name + "! \nHealth:"+ health + " Defense:" + defense+ " Strength:" + strength);
}
player()


/////////////////////////////////////////////////////
// Destructuring Assignment
// TODO: Store the first 5 array values in separate variables and the remaining values in the "rest" variable.
function getCosine() {
    let values = []
    for (let i = 0; i < 10; i++) {
        let x = Math.cos(10);
        values.push(x);
    }
    let a,b,c,d,e,rest
    [a,b,c,d,e,...rest] = values
    console.log(a + "\n" +b + "\n" + c + "\n" + d + "\n" + e + "\n" +  rest);
    // Add your code here
    
    
}
getCosine();