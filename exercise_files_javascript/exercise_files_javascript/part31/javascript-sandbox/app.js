// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

// //   e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){

//   console.log('Clicked');
e.preventDefault();


let val;

  val = e;


  // Event target element
  val = e.target;
//   console.log(val);

  val = e.target.id;
//   console.log(val);

//   val = e.target.className;
//   console.log(val);


  val = e.target.classList;
//   console.log(val);

  // Event type
//   val = e.type;
//   console.log(val);


  // Coords event relative to the window
  val = e.clientY;
//   console.log(val);

  val = e.clientX;
//   console.log(val);

  // Coords event relative to the element
  val = e.offsetY;
//   console.log(val);

//   val = e.offsetX;
//   console.log(val);


}