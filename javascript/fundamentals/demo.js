// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

// function convertCoinChange(money) {
//     // declare variables for different denominations (quarter, dime, nickel, penny)
//     q = 0 // each variable holds the count of each coin
//     d = 0
//     n = 0
//     p = 0 

//     // multiply input by 100 : 3.21 == 321
    
//     // take new number (321) and divide by 25 to get the number of quarters
//     // make sure to round down to get a whole number
//     // subtract the (# of quarters * 25) from the overall input # and then check the next denomination
//     // repeat for different denominations
//     // print and then return the data you collected
// }

function generateCoinChange(input) {
    
    console.log(`Money Recieved: $${input}`);
    // prints 3.21

    // initialize output object
    var change = {"Quarters":0,"Dimes":0,"Nickels":0,"Pennies":0};

    // var centsStarting = input * 100;
    var centsStarting = Math.round(input * 100);
    // centStarting = 321
    // console.log(input, centsStarting);
    
    change["Quarters"] = Math.floor(centsStarting/25)
    // Math.floor(centsStarting/25) => Math.floor(321/25) => Math.floor(12.84) => 12
    remainder = centsStarting%25;
    // 12 quarters, 21 cents left
    // remainder = centsStarting - (#Q * 25)
    // remainder = 321 - (12 * 25)
    // remainder = 21
    
    change["Dimes"] = Math.floor(remainder/10);
    remainder = remainder%10;
    // 2 dimes, 1 cent left
    // remainder = remainder - (#D * 10)
    // remainder = 21 - (2 * 10)
    // remainder = 1
    
    change["Nickels"] = Math.floor(remainder/5);
    // Math.floor(remainder/5) => Math.floor(1/5) => Math.floor(.2) => 0
    remainder = remainder%5;
    // 0 nickels, 1 cent
    // remainder = remainder - (#N * 5)
    // remainder = 1 - (0 * 5)
    // remainder = 1
    
    change["Pennies"] = remainder;
    
    for (const key in change) {
        console.log(`${key}: ${change[key]}`);
    }

    return change;
}

console.log(generateCoinChange(3.21))
