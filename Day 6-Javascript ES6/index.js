//array functions and template literals

const greet = (name) => {
  //  console.log(`hello, ${name}`);
};

greet('Lumana');

//array methods
//push and pop
const numbers = [1,2,3,4,5];
numbers.push(10);
//console.log(numbers);

numbers.pop();
//console.log(numbers);

//map
const numberlist = [10, 20, 35, 60, 50];

const doubleNumbers=numberlist.map((number) => {
    //console.log(number);
    return number*2;
});

//console.log(doubleNumbers);

//filter
const evenNumbers = numberlist.filter((number) => {
    return number % 2 === 0;
});

//console.log(evenNumbers);

const totalsum=numberlist.reduce((accumulator, currentValue) => {
   // console.log (accumulator, currentValue);
    return accumulator+currentValue;
}, 0);

//console.log(totalsum);

//slice and spice

const fruits=['Apple', 'Banana', 'Cherry', 'Mango'];

//slice
const slicedfruits=fruits.slice(1,3);
//console.log(slicedfruits);

//splice
const splicedfruits=fruits.splice(1,2, 'Orange', 'Pineapple');
//console.log(splicedfruits);
//console.log(fruits);

//spread operator
const names = ['Alice', 'Bob', 'Charlie'];
//console.log(...names);

const updatedNames = [... names, 'David', 'Eve'];
//console.log(updatedNames);

//objects
const user = {
    name: 'Lumana',
    age: 25,
    address: 'Kathmandu, Nepal' ,
};

//spread operator

const updatedUser= {...user, isStudent: true};
//console.log(updatedUser);

//Destructuring
 

const [firstname, secondname] = names;

//console.log(firstname,secondname);

const {name, address} = user;

//console.log(name, address);