// variables in javascript
var fullName= 'Lumana Manandhar';
let address = 'Kathmandu,Nepal';
const bloodGroup = 'AB+';

console.log(fullName);
console.log(address);
console.log(bloodGroup);

//data types

let name = 'Lumana';
let age = 21;
let isStudent = true;
let hobbies = ['coding', 'internet surfing', 'sleeping', 'cleaning'];

console.log(hobbies[0]);

//object
let user={
    name: 'Lumana',
    age: 21,
    isStudent: true,
    hobbies: ['coding', 'internet surfing', 'sleeping', 'cleaning'],
};

console.log(user['name']);
console.log(user.age);

//function

function greet(name){
    console.log('Hello',name);
}
greet('lumana');

const headingElementById=document.getElementById('heading-2');
console.log(headingElementById);

const headingElementByQuery=document.querySelector('#heading-2');
const paragraphElement=document.querySelector('.para');

paragraphElement.textContent = 'This is updated paragraph';
paragraphElement.style.color = 'blue';

const buttonElement = document.querySelector('.btn');
buttonElement.textContent = 'Click here';
buttonElement.addEventListener('click', function() {
    alert('Button clicked!');
    console.log('button clicked');
});