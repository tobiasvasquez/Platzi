//Arrays destructuring

let fruits = ['Banana', 'Apple', 'Strawberry', 'Orange'];

let [a,b] = fruits;

console.log(a,b);

//Object Destructuring

let user = {userName: 'Tob', age: 23};
let {userName, age} = user;
console.log(userName, age)

//Spread operator

let person = {name: 'Tob', age: 23};

let country = 'AR';

let data = {id: 1, ...person, country};

console.log(data);

//Rest parameters

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0])
    return num + values[0];
}

sum(1, 1, 2, 3) 