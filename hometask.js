'use strict';

// for (let i = 20; i >= 10; i--) {
//     console.log(i);
//     if (i === 13) break;
// }

// for (let i = 2; i <= 10; i++){
//     if (i % 2 === 0) console.log(i);
// }

// let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0){
//         continue;
//     } else {
//         console.log(i);
//     } i++;
// }

// const arr = [];

// for (let i = 5; i <= 10; i++) {
//     arr[a] = i;

// }
// console.log(arr);


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'string'){
//         data[i] += ' - done';
//     } else {
//         data[i] *= 2;
//     }
// }
// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// let j = 0;

// for (let i = data.lenght-1; i >= 0; i--) {
//     result[j] = data[i];
//     j++;
// }

// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
// 	for (let j = 0; j < lines - i; j++) {
// 		result += ' ';
// 	}
// 	for (let j = 0; j < 2 * i + 1; j++) {
// 		result += '*';
// 	}
// 	result += '\n';
// }
// console.log(result);

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
	for (let j = 0; j < lines - i; j++) {
		result += ' ';
	}
	for (let j = 0; j < 2 * i + 1; j++) {
		result += '*';
	}
	result += '\n';
}
console.log(result);


