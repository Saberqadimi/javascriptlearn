// FOR LOOP

// for(let i = 0; i < 10; i++){

//     console.log('Number '+ i);

// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];


// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car){
//   console.log(car);
// });

// MAP
// const users  = [
//   {id: 1, name:'Ali'},
//   {id: 2, name: 'sadegh'},
//   {id: 3, name: 'mostafa'},
//   {id: 4, name: 'elina'},
//   {id: 5, name: 'sarina'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);

// FOR IN LOOP
const user = {
  firstName: 'Ali', 
  lastName: 'Sheikh',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}