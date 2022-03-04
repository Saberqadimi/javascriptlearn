let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item');

val = listItem;
val = list;

// console.log(list,listItem);

// Get child nodes
// val = list.childNodes;

// console.log(val);

// Get children element nodes
// val = list.children;
// console.log(val);

// val = list.children[1];
// console.log(val);


// list.children[1].textContent = 'Hello';

// Children of children
// val = list.children[2].children[0];
// console.log(val);

// list.children[2].children[0].id = 'test-link';


// First child
// val = list.firstChild;
// console.log(val);

// val = list.firstElementChild;
// console.log(val);

// Last child
// val = list.lastChild;
// console.log(val);


// val = list.lastElementChild;
// console.log(val);

// Count child elements
// val = list.childElementCount;
// console.log(val);

// Get parent node
// val = listItem.parentNode;
// console.log(val);


// val = listItem.parentElement;
// console.log(val);


// val = listItem.parentElement.parentElement;
// console.log(val);

// Get next sibling
// val = listItem.nextSibling;
// console.log(val);

// val = listItem.nextElementSibling;
// console.log(val);


// Get prev sibling
// val = listItem.previousSibling;
// console.log(val);

val = listItem.nextElementSibling.nextElementSibling.nextElementSibling;
console.log(val);