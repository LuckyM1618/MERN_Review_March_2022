// Predict Destructuring
// For the following five blocks of code, predict the output.
// If a line of code will throw an error, state the error.

// 1.
const cars = ['Tesla', 'Mercedes', 'Honda'];
const [ randomCar ] = cars;
const [ ,otherRandomCar ] = cars;

//Predict the output
console.log(randomCar); // prints 'Tesla'
console.log(otherRandomCar); // print 'Mercedes'


// 2.
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

//Predict the output
console.log(name); // throws an error, no variable called 'name'
console.log(otherName); // prints 'Elon'


// 3.
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;

//Predict the output
console.log(password); // prints '12345'
console.log(hashedPassword); // 'person' has no attribute 'password', prints 'undefined'


// 4.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 'first' has value '2'
const [,,,second] = numbers; // 'second' has value '5'
const [,,,,,,,,third] = numbers; // 'third' has value '2'

//Predict the output
console.log(first == second); // prints 'false'
console.log(first == third); // prints 'true'


// 5.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // variable 'key' has value 'value'
const { secondKey } = lastTest; // variable 'secondKey' has value '[1, 5, 1, 8, 3, 3]'
const [ ,willThisWork] = secondKey; // variable 'willThisWork' has value '5'

//Predict the output
console.log(key); // prints 'value'
console.log(secondKey); // prints '[1, 5, 1, 8, 3, 3]'
console.log(secondKey[0]); // prints '1'
console.log(willThisWork); // prints '5'
