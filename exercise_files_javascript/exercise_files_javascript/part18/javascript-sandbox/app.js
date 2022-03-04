// Destructuring Assignment

let a, b;
// [a, b] = [100, 200];

// console.log(b);

// Rest pattern
// [a, b, c , ...rest] = [100, 200, 300, 400, 500];

// console.log(rest);

// ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(b);

// ({ a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(rest);

// Array Destructuring

// const people = ['Ali', 'sadegh', 'Navid'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);


// Object Destructuring

const person = {
  name: 'Ali Seikh',
  age: 27,
  city: 'foo',
  gender: 'Male',
  seyHello : function(){
    console.log('Hello')
  }
  
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// console.log(name, age, city);


// New ES6 Destructuring
const { name, age, city, seyHello } = person;

console.log(name, age, city);

seyHello();