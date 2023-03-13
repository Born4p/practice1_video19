'use strict';
let numberOfFilms;

function start(){
	numberOfFilms = +prompt('скільки фільмів ви переглянули?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('скільки фільмів ви переглянули?', '');
	}
}

start();

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



function rememberMyFilms(){
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
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10){
		alert('Переглянуто малу кількість фільмів! ');
	} else if (personalMovieDB.count <= 30) {
		alert('а ви любите кінематограф!');
	} else if (personalMovieDB.count > 30){
		alert('ви кіноман');
	} else alert('помилка');
}

detectPersonalLevel();

function showMyDB(hidden){
	if (!hidden){
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

console.log(personalMovieDB);

function writeYourGenres (){
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`ваш улюблений жанр ${i}`);
		personalMovieDB.genres[i - 1] = genre;
	}
}

writeYourGenres();