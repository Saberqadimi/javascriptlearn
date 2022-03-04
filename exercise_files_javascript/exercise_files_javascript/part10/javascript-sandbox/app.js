const person = {
    firstName : 'Ali',
    lastName: 'Sheikh',
    age: 27,
    email: 'ali@gmail.com',
    hobbies: ['music', 'sports'],
    address: {
      city: 'foo',
      state: 'bar'
    },
    getBirthYear : function(){
      return 1398 - this.age;
    }
  }
  
  let val;
  
//   val = person;
//   console.log(val);


  // Get specific value
//   val = person.firstName;
//   console.log(val);


//   val = person['lastName'];
//   console.log(val);


//   val = person.age;
//   console.log(val);

//   val = person.hobbies[1];
//   console.log(val);


//   val = person.address.state;
//   console.log(val);


//   val = person.address['city'];
//   console.log(val);


  val = person.getBirthYear();
  console.log(val);

  

