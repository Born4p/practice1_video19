'use strict';

function sayHello(name) {
	return `Привіт, ${name}!`;
}
sayHello('Антон');

function returnNeightboringNumbers(number){
	let obj = [];
	for (let i = 0; i < 3; i++) {
		obj[i] = number - 1;
		number++;
	}
	console.log(obj);
	return obj = [];
}
returnNeightboringNumbers(10);

function getMathResult(base, number){
	if (typeof(number) != 'number' || number <= 0 ){
		return base;
	} else {
		let str = `${base}`;
		for (let i = 2; i <= number+1; i++) {
			let baseCount = base * i;
			str += `--${baseCount}`;
		}   
		console.log(str);
		return str;
	}
}

getMathResult(3, 5);