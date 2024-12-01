// function sum(x: number, y: number): number {
//     return x + y;
// }

// function getFilms(): Responce<Film[]> {
//     throw 'getFilms';
// }

// function getFilm(): Responce<Film> {
//     throw 'getFilm';
// }

// function getUser(): Responce {
//     throw 'getUser';
// }

// type Film = {
//     title: string;
//     duration: number;
// }

// type ResponceStatuses = 'suyccess' | 'error' | 'pending';
// type ResponceStatuses = 200 | 400 | 500 | 404 | 403;

// type Responce<Result = unknown, Status = ResponceStatuses> = {
//     isSuccess: boolean;
//     status: Status;
//     result: Result;
// }

// interface Responce<Result = unknown, Status = ResponceStatuses> {
//     isSuccess: boolean;
//     status: Status;
//     result: Result;
// }

// type FilmsResponce = Responce<Film[]>;
/**
 * {
 *  isSuccess: boolean;
 *  status: number;
 *  result: Film[];
 * }
 */

// type FilmResponce = Responce<Film>;

// --------------------------------------------------------

// function playMovie<MovieD>(movie: MovieD): MovieD {
//     let newMovie: MovieD;

//     return movie;
// }

// playMovie<{title: string; time: number}>({time: 200, title: ''});

// type BaseMovie<Director> = {
//     title: string;
//     director: Director;
//     awards: string[];
// }

// type Film<Director = string> = BaseMovie<Director> & {
//     duration: number;
// }

// type TvSeries<Director = string> = BaseMovie<Director> & {
//     sesonCount: number;
// }

// function playTvSeries<Movie = TvSeries>(movie: Movie): Movie {
//     let newMovie: Movie;

//     return movie;
// }

// const tvSeries: TvSeries<string> = {
//     title: '',
//     director: '',
//     sesonCount: 3,
//     awards: [],
// }

// playTvSeries<TvSeries>({
//     title: '',
//     director: 'Egor',
//     sesonCount: 3,
//     awards: [],
// })

// const playEpisode = <Episode>(episode: Episode): Episode => {
//     return episode;
// }

// function getProperty(entity: object, key: string): unknown {
//     return entity[key];
// }

// function getProperty<
//     Entity extends object,
//     Key extends keyof Entity
// >(entity: Entity, key: Key): Entity[Key] {
//     return entity[key];
// }

// const arg1 = {title: '', director: '', awards: ['test']};
// const arg2 = 'awards';

// type TypeArg1 = typeof arg1;
// type TypeArg2 = typeof arg2;

// const value = getProperty<TypeArg1, TypeArg2>(arg1, arg2);

// const baseMovie: BaseMovie<string> = {title: '', director: '', awards: []};

// const value = getProperty(baseMovie, 'director');

// --------------------------------------------------------
