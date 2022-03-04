// REPLACE ELEMENT


// Create Element
const newHeading = document.createElement('h2');

// console.log(newHeading);

// Add id
newHeading.id = 'task-title';

// console.log(newHeading);

// New text node
newHeading.appendChild(document.createTextNode('تسک های من'));

// console.log(newHeading);

// Get the old heading
const oldHeading = document.getElementById('task-title');

// console.log(oldHeading);

//Parent
const cardBody = document.querySelector('.card-body');

// console.log(cardBody);


// Replace
cardBody.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');

// Remove list item
lis[0].remove();


const list = document.querySelector('ul');

// Remove child element
list.removeChild(lis[2]);


