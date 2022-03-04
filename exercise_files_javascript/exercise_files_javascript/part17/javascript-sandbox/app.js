// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'Ali'});
set1.add(true);


// console.log(set1);

// const set2 = new Set([1, true, 'string']);

// console.log(set2);


// Get count
// console.log(set1.size);


// Check for values
// console.log(set1.has(100));

// console.log(set1.has({name: 'Ali'}));

// Delete from set
// console.log(set1.delete(100));
// console.log(set1);



set1.clear();
console.log(set1);

