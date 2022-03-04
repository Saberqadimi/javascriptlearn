// MAPS = key-value pairs - can use ANY type as a key or value

let person = new Map();

person.set('person1',{
  firstname : 'firstName1',
  lastName : 'lastName1'
});

// console.log(person);

person.set('person2',{
  firstname : 'firstname2',
  lastName : 'lastName2'
});

// console.log(person);


// console.log(person.get('person1').firstname);


// person.set('String','just a text');

// console.log(person);

// console.log(person.get('String'));

// person.set( 'Trigger' , function(){ console.log('hello') } );

// person.get('Trigger')();



// console.log(person.size);
// console.log(person);


// console.log(person.has('person2'));
// console.log(person);


// console.log(person.delete('person1'));
// console.log(person);

person.clear();
console.log(person);