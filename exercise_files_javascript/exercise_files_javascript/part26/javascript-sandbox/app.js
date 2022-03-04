// document.getElementById()

// console.log(document.getElementById('task-title'));

// Get things from the element
// console.log(document.getElementById('task-title').id);

// console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');


// Change styling
// taskTitle.style.background = '#333';

// taskTitle.style.color = '#fff';

// taskTitle.style.padding = '5px';

// taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'تسک';

taskTitle.innerText = 'تسک من';

taskTitle.innerHTML = '<span style="color:red">تسک های علی</span>';


// document.querySelector()

console.log(document.querySelector('#task-title'));

console.log(document.querySelector('.list-group'));

console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';

document.querySelector('ul li').style.color = 'blue';


document.querySelector('li:last-child').style.color = 'red';


document.querySelector('li:nth-child(3)').style.color = 'yellow';

