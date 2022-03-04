// Create element
const li = document.createElement('li');

// console.log(li);

// Add class
li.className = 'list-group-item d-flex align-items-center';

// console.log(li);
//  Add id
li.id = 'new-item';

// console.log(li);

// Add attribute
li.setAttribute('title', 'New Item');

// console.log(li);


// Create text node and append
li.appendChild(document.createTextNode('تسک 4'));

// console.log(li);

// Create i element
const i = document.createElement('i');

// console.log(i);


// Add class
i.className = 'fas fa-times text-danger mr-auto delete-item';

// console.log(i);

// Append the i to li
li.appendChild(i);

// console.log(li);

// Append li as child to ul
document.querySelector('ul.list-group').appendChild(li);

console.clear();











































///** */