// Hoist - Practice reading Javascript the same way as the interpreter reads it

// ***Example***
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// *Same as example, with ES6 syntax
console.log(example);
let example = "I'm the example!";
// let example;
// console.log(example);
// example = "I'm the example!";
// var will run and print undefined, but this will throw an error saying "cannot access 'example' before initialization"


// 1.
console.log(hello);
var hello = 'world';

// var hello;
// console.log(hello);
// hello = 'world';
// Output: will print out 'undefined'


// 2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle; // creates a global variable called 'needle'
// needle = haystack
// test();
// function test() {
//     var needle; // creates a variable called 'needle' within the scope of the function test()
//     console.log(needle); // prints the needle variable local to the test() scope
// }


// 3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan; // declares variable called 'brendan' in the global scope
// brendan = 'super cool'; assigns the string 'super cool' to the globally scoped variable 'brendan'
// function print() {
//     brendan = 'only okay'; // assigns the string 'only okay' to the globally scoped variable 'brendan'
//     console.log(brendan); // prints 'only okay'
// }
// console.log(brendan); // prints 'super cool'
// *note*: print() is never called in the function

// 4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food; // declares globally scoped variable 'food'
// food = 'chicken; // initializes global 'food'
// console.log(food); // prints 'chicken', the value of global 'food'
// eat(); // calls eat() function, defined below it
// function eat() {
// var food; // declares 'food' variable scoped locally to the eat() function
// food = 'half-chicken'; // initializes locally scoped 'food'
// console.log(food); prints 'half-chicken', the value of locally scoped food
// food = 'gone'; // assigns 'gone' to locally scoped food


// 5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// var mean; // declares globally scoped variable 'mean'
// mean(); // throws an error, because mean hasn't been declared as a function yet
// console.log(food); // throws an error, because food is not accessible outside of the scope of the mean() function
// mean = function() {
//     var food; // declares 'food' variable locally scoped to the mean() function
//     food = 'chicken' // initializes locally scoped 'food'
//     console.log(food); // prints 'chicken'
//     food = 'fish'; // assigns 'fish' to locally scoped 'food'
//     console.log(food) // prints 'fish'
// }
// console.log(food); // throws an error, food is not defined in the scope


// 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre; // declares globablly scoped variable 'genre'
// console.log(genre); // prints 'undefined'
// genre = 'disco'
// rewind(); // calls the function rewind() defined below
// function rewind() {
//     var genre; // declares variable 'genre' locally scoped to rewind() function
//     genre = 'rock';
//     console.log(genre); // prints 'rock'
//     genre = 'r&b';
//     console.log(genre); // prints 'r&b'
// }
// console.log(genre); // prints 'disco'


// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo = 'san jose'; // without var, declares 'dojo' as a global variable
// console.log(dojo); // prints 'san jose'
// learn();
// function learn() {
//     var dojo; // declares variable 'dojo' locally scoped to learn() function
//     dojo = 'seattle';
//     console.log(dojo); // prints 'seattle'
//     dojo = 'burbank';
//     console.log(dojo); // prints 'burbank'
// }
// console.log(dojo); // prints 'san jose', since it's accessing the global 'dojo'


// 8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {}; // declares and initializes const variable 'dojo'; is immutable and can't be changed by normal assignment, but objects and arrays can be modified
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // cannot overwrite a const variable by reassignment; throws an error
    }
    return dojo;
}

