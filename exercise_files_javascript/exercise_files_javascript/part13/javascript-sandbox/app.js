// FUNCTION DECLARATIONS


// function add(x=2 ,y=4) {
    
//     return x + y;
    
// }

// console.log( add(1) );



// FUNCTION EXPRESIONS

// const add = function(x=2 ,y=4) {
//     return x + y;
// };

// console.log( add() );


// ARROW FUNCTION EXPRESIONS

//   const add = (x,y) => x+y;
  

//   console.log(add(1,4));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })();

(function(name){
  console.log('Hello '+ name);
})('Ali');
