const numberOfFilms = +prompt('How many films you already watched?', '');

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
	personalMovieDB.movies[prompt('Last film? ', '')] = prompt('Mark? ', '');
}

console.log(personalMovieDB.movies);