// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// const groceryList = groceries.map( item => `<li>${item}</li>` );
// console.log(groceries,groceryList)

// const values = [1, 2, 3, 4, 5];
// const cubes = values.map( val => val**3 );
// console.log(values, cubes)

// const values = [1, 2, 3, 4, 5];
// // filter returns a copy, iterates through each index of the array and keeps the results at the indexes where the callback function returns true;
// const evens = values.filter( val => val % 2 == 0 )
// const odds = values.filter( val => val % 2 != 0 )
// console.log(values, evens, odds);

// const values = [1, 2, 3, 4, 5];
// const oddCubes = values.filter( val => val % 2 !== 0).map( val => val**3 );
// // console.log(values, oddCubes);

// const init_val = 0;
// // if reduce is not given an initial value, it defaults to [0] index of the array
// const values_reduced = values.reduce( (prev_val, cur_val) => prev_val + cur_val, init_val )
// console.log(values, values_reduced);

const groceries = Object.freeze(["pearl onions", "cremini mushrooms", "thyme"]);
console.log(groceries.filter( item => item.includes("o") ));
