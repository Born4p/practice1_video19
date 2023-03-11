'use strict';
const numberOfFilms = +prompt('скільки фільмів ви переглянули?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

// const a = prompt("Last film", ''),
//       b = prompt("Mark? ", ''),
//       c = prompt("Last film", ''),
//       d = prompt("Mark? ", '');

// personalMovieDB.movies[a] = b;

for (let i = 0; i < numberOfFilms; i++) {
	const a = prompt('Last film? ', ''),
		b = prompt('Mark? ', '');
	if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
		console.log('дякую за відповідь!');
		alert('дякую за відповідь!');
		personalMovieDB.movies[a] = b;
	} else {
		console.log('відповідь не вірна, повторіть вашу відповідь');
		alert('відповідь не вірна, повторіть вашу відповідь');
		i--;
	}
}
console.log(personalMovieDB);

if (personalMovieDB.count < 10){
	alert('Переглянуто малу кількість фільмів! ');
} else if (personalMovieDB.count <= 30) {
	alert('а ви любите кінематограф!');
} else if (personalMovieDB.count > 30){
	alert('ви кіноман');
} else alert('помилка');