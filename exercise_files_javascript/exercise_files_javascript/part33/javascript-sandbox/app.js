const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');



// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
taskInput.addEventListener('input', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

//    console.log(e.target.value);

//    heading.innerText = e.target.value;

//   e.preventDefault();
}