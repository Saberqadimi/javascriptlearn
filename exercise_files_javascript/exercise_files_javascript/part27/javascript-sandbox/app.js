// document.getElementsByClassName

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);

// console.log(items[0]);
// items[0].style.color = 'red';
// items[2].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('list-group-item');

// console.log(listItems[0]);




// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis[0]);


// document.querySelectorAll
const items = document.querySelectorAll('ul.list-group li.list-group-item');
// console.log(items);
items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

