'use strict';

let a = 5;
let b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
	a: 5,
	b: 1
};

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
	let objCopy = {};

	let key;
	for(key in mainObj){
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}


const numbers = {
	a: 17,
	b: 20,
	c: {
		x: 7,
		y: 5
	}
};

const newNumbers = copy(numbers);

console.log(newNumbers);
console.log(numbers);

const add = {
	d: 17,
	e: 20
};