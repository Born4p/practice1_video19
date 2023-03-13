'use strict';

function calculateVolumeAndArea (value){
	if(!Number.isInteger(value) || value < 0){
		return console.log('Помилка');
	} else {
		const a = value * value * value;
		const b = 6 * (value * value);
		return console.log(`Обʼєм куба: ${a}, площа куба: ${b}`);
	}
	
}

//calculateVolumeAndArea (5);


function getCoupeNumber (number) {
	if(!Number.isInteger(number) || number < 0){
		return console.log('Ошибка. Проверьте правильность введенного номера места');
	} else if (number === 0 || number > 36) {
		return console.log('Таких мест в вагоне не существует');
	} else {
		return console.log(Math.ceil(number / 4));
	}
}
//getCoupeNumber (100);

function getTimeFromMinutes(time) {
	if (!Number.isInteger(time) || time < 0) return 'Ошибка, проверьте данные';
	else {
		let a;
		const fullValue = Math.floor(time / 60);
		if (fullValue === 0 || fullValue > 4) a = 'часов';
		else if  (fullValue === 1) a = 'час';
		else a = 'часа';
		return `Это ${fullValue} ${a} и ${time % 60} минут`;
	}
}
getTimeFromMinutes(333);

function findMaxNumber (first, second, third, fourth) {
	if (!isNaN(first, second, third, fourth)) return 0;
	else return Math.max(first, second, third, fourth);
}
findMaxNumber(5, 6, 7);

function fib(number){
	if (number <= 0 || !Number.isInteger(number)){
		return '';
	}
	let a = 0, 
		b = 1,
		stringFib = ''; 
	for (let i = 0; i < number; i++) {
		if (i + 1 === number){
			stringFib += `${a}`;
		} else {
			stringFib += `${a} `;
			a+=b;
			b = a - b;
		}
	}
	return stringFib;
}
fib(8);