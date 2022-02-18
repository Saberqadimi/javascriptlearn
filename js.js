console.log(12334);

console.log(Boolean);
console.log(true);

var saber = 'sssss';
console.log(saber);

// consol.table([1, 2, 3, 4]);
console.log({ a: 1, b: 2, c: 3 });

console.error('this is error');
console.clear();

console.time('time');
console.log('sssssss');
console.log('sssssss');
console.log('sssssss');
console.log('sssssss');
console.log('sssssss');
console.timeEnd('time');

// jalase 4 be bad

var name = 'saber qadimi';
console.log(name);

name = 'programmer';
console.log(name);
// ** /
var greating;

greating = 'hello';
console.log(greating);
/*** */
let qadimi;
qadimi = 'family';
console.log(qadimi);
qadimi = 'my family';
console.log(qadimi);
/** */
const developer = 'javascript language';
console.log(developer);
// developer = ' one language developer';
// console.log(developer);
/** */
const persone = {
    name: 'saber',
    age: 26
}

persone.name = 'saberqadimi';
persone.age = 27;

console.log(persone);

//** */

const number = [1, 2, 3, 4, 5, 6];

number.push(7);
console.log(number);

// jalase   5  
// String
const Name = 'saber qadimi oshakhlariiiii';
console.log(typeof Name);
// number 
const Number = 24;
console.log(typeof Number);
// Boolean 
const hasMen = true;
console.log(typeof hasMen);
// undefined 
let method;
console.log(typeof method);
// null = object 
const car = null;
console.log(typeof car);


// ReferenceType - object
// Array =object
const hobbies = ['movie', 'music'];
console.log(typeof hobbies);
// object 
const test1 = {
    name: 'mr',
    age: 45
}
console.log(typeof test1);

// jalase   6 
console.clear();
// Number to string 
// let val;
// val = 555;
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// Toooo string 
let val;
val = String(555);
console.log(val);
console.log(typeof val);
console.log(val.length);
//** */
let plus;
plus = String(3 * 2);
console.log(plus);
console.log(typeof plus);
console.log(plus.length);


console.clear();
/** */

// Blean to String 
fire = String(true);
console.log(fire);
console.log(typeof fire);
console.log(fire.length);
/** */
console.clear();
//** */
// Date to String  
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

console.clear();

// String to Number 
// prog = parseInt('6');
// console.log(prog);
// console.log(typeof prog);

// val = parseInt(true);
// console.log(val);
// console.log(typeof val);

/***/
// val = parseInt('Hello');
// console.log(val);
// console.log(typeof val);

///** */

val = parseInt('5663');
console.log(val);
console.log(typeof val);
//**  */
val = parseFloat('5663.3000');
console.log(val);
console.log(typeof val);
// outpot: 5663.3
console.log(val.toFixed(2));
// outpot:  5663.30
//** */
console.clear();
//**   */
const num1 = 20;
const num2 = 60;
let output;
output = num1 + num2;
output = num1 / num2;
output = num1 - num2;
output = num1 * num2;
output = num1 % num2;
console.log(output);

console.clear();
//**  */

//**رند میکنه */
val = Math.round(6.3);
console.log(val);
//**اعداد اعشاری رو به عدد بالاتر گرد میکنه ینی 7 */
val = Math.ceil(6.3);
console.log(val);

//**اعداد اعشاری رو به پایینترین عدداصلی گرد میکنه ینی 6 */
val = Math.floor(6.8);
console.log(val);
//** جزر اون عدد رو حسابمیکنه */
val = Math.sqrt(16);
console.log(val);

//**این عدد منفی رو به مثبت تبدیل میکنه */
val = Math.abs(-16);
console.log(val);


//**این عدد رو به توان میرسونه  */
val = Math.pow(6, 3);
console.log(val);

//**تو اعداد ما کمترین عدد رو پیدا میکنه و میده */
val = Math.min(6, 3, 5, 9, 3, 4);
console.log(val);

//**این هم بزرگترین عدد رو به ما میده */
val = Math.max(6, 3, 5, 9, 3, 4);
console.log(val);

//** یک عدد رندوم بین صفر و یک به ما میده هر دفعه */
val = Math.random();
console.log(val);

//**هر دفعه عدد رندوم بین 0 تا 7 میده */
val = Math.random() * 7;
console.log(val);

//**هر دفعه عدد رندوم میده بین صفر تا 7 ولی بدون اعشارش میده و به سمت عدد اصلی رند میکنه*
val = Math.floor(Math.random() * 7 + 1);
console.log(val);

console.clear();
// jalase  8 

const firstName = 'saber';
const lastName = 'qadimi';

let demo;

demo = firstName.concat(' ', lastName);
console.log(demo);

//** */
demo = `hello my name is ${firstName} and my family is ${lastName}.`
console.log(demo);

//** */
demo = firstName.toUpperCase();
console.log(demo);
//** */
demo = firstName.indexOf('b');
console.log(demo);
demo = firstName[2];
console.log(demo);
//** */
// میره ببینه داخل ایندکس کلمه شماره ایندکس 1 چه حرفیه
demo = firstName.charAt('1');
console.log(demo);

//** */
// این میره حروف رو از عدد ایندکس 0 تا 3 میکشه بیرون
demo = firstName.substring(0, 3);
console.log(demo);
// این هم همون کار رو میکنه
demo = firstName.slice(0, 5);
console.log(demo);
//** */
// این به اراه تبدیل میکنه و با فاصلهسپریت 
// که بهش میدیم اونهارو جدا میکنه

// const str = 'hello my name is saber';
// val = str.split(' ');
// console.log(val);
//** */
const str = 'hello my name is saber';
val = str.replace('saber', 'Amo saber');
console.log(val);

///** جلسه 9 به بعد */
const n1 = [1, 2, 3, 4, , 'sssss', 5, 67, 8, 9]
const n2 = [33, 21]

val = Array.isArray(n1);
console.log(val);

//** */
val = n1.indexOf(5);
console.log(val);
//** */
// این یک عدد رو به اخر ارایه اضافه میکنه
n1.push(300);
console.log(n1);
// این یک عدد رو به اول ارایه اضافه میکنه 
n1.unshift(100);
console.log(n1);
// این اخرین عدد ارایه رو حذف میکنه 
n1.pop();
console.log(n1);
// این اولین ارایه رو پاک میکنه 
n1.shift();
console.log(n1);
// این از عدد هایی که بهش میدیم
// از ایندکس 11  رو انتخاب میکنه و 6 تا ایندکس ینی از 0 تا 6 تا ایندکس میشماره تو ارایه و خذف میکنه
n1.splice(1, 6);
console.log(n1);
// این اعداد داخل ارایه رومعکوس میکنه
n1.reverse();
console.log(n1);
// این اعداد رو باهم اضافه میکنه ینی ارایه
// n1رو با n2
// اضافه میکنه
val = n1.concat(n2);
console.log(val);
// این ارایه استرینگ رو به ترتیب حروف الفبا میچینه
const ss = ['apple', 'fruit', 'banan', 'orange'];
val = ss.sort();
console.log(val);
// در اعداد هم از کوچیک به بزرگمیچینه
const numbers = [1, 9, 6, 5, 3, 5, 0, 33, 65]
val = numbers.sort();
console.log(val);
// به این صورت اعداد رو که اگر یکان دهگان باشن به صورت همون از یکان از کوچیک میچینه تا دهگان
val = numbers.sort(function(x, y) {
    return x - y;
});
console.log(val);


console.clear();
// console.log(false == '0');
//** */jalase 10 be bad


// const id = 60;

// if (id) {
//     console.log(`The Id Is ${id}`);
// } else {
//     console.log('this is the false');
// }

//** */
const age = 26;
// if (age >= 12 && age <= 29) {
//     console.log('yes this is IF');
// } else if (age > 78 && age > 12) {
//     console.log('yes this is else if');

// } else {
//     console.log('not the if 0r else if');
// }

// console.log(age === 60 ? 'yes this is 60' : 'no this is no true');
//*** */
switch (age) {
    case 26:
        console.log('yes true');
        break;
    case '28':
        console.log('no this is the false');
        break;
    default:
        console.log('not 28 or 26');
        break;
}
//** */

// function add(x, y) {
//     return x * y;

// }
// console.log(add(3, 6));
//outpot 18;

// console.log(add());

// function add(x = 3, y = 4) {
//     return x * y;

// }

// تو مدل بالا میتونیک کنسول رو قبل از فانکشن
// هم استفاده کنیم ولی تو مدل پایین حتما بعد متغیر و فانکشن باید کنسول بگیریم
// outpot 12;

// const example = function(x = 8, y = 16) {
//     return y + x;
// };
// console.log(example());
// outpot 24;

//*********** */
// Arrow function expersion

const templates = (x, y) => x * y;
console.log(templates(6, 15));
//  outpot 90
const month = x => {
    return x;
};
console.log(month(6));
//  outpot 6

//**   **
(function(name) {
    console.log('Hello ' + name);
})('saber');
// outpot  Hello saber

//** */
for (let i = 0; i <= 10; i++) {
    console.log('number ' + i);
}
// outpot  *
// number 0
//  number 1
//  number 2
//  number 3
//  number 4
//  number 5
//  number 6
//  number 7
//  number 8
//  number 9
//  number 10
console.clear();
//***** */
let p = 6;
while (p <= 10) {
    console.log('number ' + p);
    p++;
}
// outpot 
// number 6 
// number 7 
// number 8 
// number 9 
// number 10

//** */

let R = 12;
do {
    console.log('number ' + R);
    R++;
}
while (R < 16);
// outpot 
// number 12
// number 13
// number 14
// number 15

///***** */

const cars = ['ferrari', 'Lamborgini', 'porche', 'citroen', 'Hiloxe'];

cars.forEach(function(car) {
        console.log(car);
    })
    // outpot 
    // ferrari 
    // Lamborgini 
    // porche 
    // citroen 
    // Hiloxe
console.clear();
//** *
const users = [
    { id: 1, name: 'saber' },
    { id: 2, name: 'ali' },
    { id: 3, name: 'erfun' },
    { id: 4, name: 'farhad' },
    { id: 5, name: 'Qazal' },
];

const ids = users.map(function(user) {
    return user.id;
});
console.log(ids);
// outpot 
// Array(5)[1, 2, 3, 4, 5]​
// 0: 1​
// 1: 2​
// 2: 3​
// 3: 4​
// 4: 5​
// length: 5

//**** */
console.clear();
const user = {
    firstName: 'Saber',
    lastName: 'Qadimi',
    age: '26',
    statse: 'karaj',
}
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
// outpot 
// firstName: Saber 
// lastName: Qadimi 
// age: 26 
// statse: karaj

//**** */

console.clear();
//اگر از 
// var
//     داخل ایف استفاده کنیم اون
// var
//     اولی ما که مثلا یک بودش برابر مبشه بهمقداری که داخل
// ایف هستش چون
// var
//     میتونه عوض بشه ولی
// const,
// let
//     عوض نمیشه

var a = 3;
let k = 7;
const w = 2;

if (true) {
    var a = 1;
    let k = 9;
    const w = 6;

    console.log('If Scope: ', a, k, w);
}
console.log('Global Scope: ', a, k, w);
// outpot 
// If Scope: 1 9 6
// Global Scope: 1 7 2

//** */
for (var a = 1; a < 10; a++) {
    console.log(`Loop: ${a}`);
}
console.log('Global Scope: ', a, k, w);
// outpot 
// Loop: 1
// Loop: 2
// Loop: 3
// Loop: 4
// Loop: 5
// Loop: 6
// Loop: 7
// Loop: 8
// Loop: 9
// Global Scope: 10 7 2

console.clear();
// jalase 16
// Map in javascript 
//** */
let person = new Map();

person.set('user1', {
        firstName: 'SaberQadimi',
        mobile: 09039106953,
    })
    // console.log(person);
    // outpot 
person.set('user2', {
        firstName: 'Ali',
        mobile: 9025928703,
    })
    // console.log(person.get('user2').mobile);

person.set('Trigger', function() {
    console.log('HelloWorld')
});
person.get('Trigger')();
// outpot : HelloWorld 

console.log(person);
// outpot: 3 maps ;

console.clear();
// jalase 17  Set();
//** */
const set1 = new Set();

set1.add(26);
set1.add('saber');
set1.add({ city: 'Tehran' });
set1.add(true);
console.log(set1);
// outpot: 4 set() ;
console.log(set1.delete(true));
console.log(set1.size);
set1.clear();
console.log(set1);
// outpot: 4 ;
console.clear();

/// jalase 18
//*** */
//Rest Pattern
let j, f;
[j, f, t, ...rest] = [100, 300, 600, 912, 403, 501, 462];
console.log(rest);
// outpot:Array(4) [ 912, 403, 501, 462 ]

// Array Destructuring 
const people = ['Ali', 'Saber', 'Erfun'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);
// outpot : Ali Saber Erfun 

const bio = {
    person5: 'saber',
    person6: 26,
}
const { person5, person6 } = bio;
console.log(person5, person6);
// outpot: saber 26 ;

























///