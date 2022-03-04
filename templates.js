// jalase 23

// if (confirm('Are you sure to delete file?')) {
//     console.log('yes i want to delete this file');
// } else {
//     console.log('NO');
// }


//**example next */
let height = window.outerHeight;
let width = window.outerWidth;

console.log(height, width);

console.clear();
//*** next  */
let val;
val = window.location.hostname;
val = window.location.port;
// val = window.location.href = 'http://probe.saberqadimi.ir';
console.log(val);

console.clear();

// window.location.reload();
//**jalase 25 */

// val = document.scripts[0].getAttribute('src');
// console.log(val);

// console.log(document.getElementById('form-task'));
// console.log(document.getElementById('form-task').className);

const taskform = document.getElementById('form-task');
taskform.style.backgroundColor = 'pink';
const taskbtn = document.getElementById('btn-create');
taskbtn.innerHTML = '<span>تسک جدید</span>'
    ///** */
console.log(document.querySelector('#form-task'));
console.clear();
console.log(document.getElementsByClassName('list-group-item'));
console.clear();

const listItem = document.querySelector('ul').getElementsByClassName('list-group-item');

console.log(listItem[1]);
listItem[1].style.backgroundColor = 'yellow';
listItem[1].style.color = 'blue';
console.clear();
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('ul.list-group li.list-group-item');

items.forEach(function(item, index) {
    item.textContent = `${index}: HEllo`;
});

console.clear();

//*jalase 28

const list = document.querySelector('ul');

const liforul = document.querySelector('li');
console.log(list);
// output : <ul class = "list-group" >
console.log(list.firstElementChild);
// output:li class = "list-group-item " > < /li>

//**این متود سیبلینگ ایتم بعدی ایدی که بهش دادیم رو به ما برمیگردونه 
// نباشه نال میده  */
console.log(liforul.nextElementSibling);
// output: < li class = "list-group-item" style = "background-color: yellow; color: blue;" > < /li>


console.clear();
//// jalase 28 create item 
// Create element
const li = document.createElement('li');

// console.log(li);

// Add class
li.className = 'list-group-item  align-items-center';

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


///**  end jalase 28  */


// jalase 31 

document.querySelector('.taskdelete').addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault();
    let val
    val = e;

    val = e.target.className;
    console.log(val);
}

/// jalase32 
console.clear();

const clearbtn = document.querySelector('.taskdelete');
const cardform = document.querySelector('.card');
const lable = document.querySelector('.form-label');

clearbtn.addEventListener('click', runEvent);
clearbtn.addEventListener('dblclick', runEvent);
clearbtn.addEventListener('mouseup', runEvent);
cardform.addEventListener('mouseenter', runEvent);
cardform.addEventListener('mousemove', runEvent);



function runEvent(e) {
    console.log(`Event type: ${e.type}`);
    lable.textContent = `MouseX: ${e.offsetX} MouseY:${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY} , 30)`;

}

console.clear();
// jalase33 

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const label = document.querySelector('h4');



form.addEventListener('submit', runEvent);

Keydown
taskInput.addEventListener('keydown', runEvent);
Keydown
taskInput.addEventListener('keyup', runEvent);
Keypress
taskInput.addEventListener('keypress', runEvent);
Focus
taskInput.addEventListener('focus', runEvent);
Blur
taskInput.addEventListener('blur', runEvent);
Cut
taskInput.addEventListener('cut', runEvent);
Paste
taskInput.addEventListener('paste', runEvent);
Input
taskInput.addEventListener('input', runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    console.log(e.target.value);

    //    heading.innerText = e.target.value;

    //   e.preventDefault();
}











































//** */