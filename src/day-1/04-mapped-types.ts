// const movie = {
//     title: 'string',
//     director: '',
//     awards: [],
// };

// const movieKeys = Object.keys(movie);

// const newMovie = movieKeys.reduce(
//     (movieCopyAcc, key) => ({...movieCopyAcc, [key]: movie[key]}),
//     {},
// )

// interface Movie {
//     title: string;
//     readonly director: string;
//     awards?: string[];
// }

// type PickMovie = Pick<Movie, 'title' | 'awards'>
// type MapTest = Record<'test' | 'name', string>;

// type TitleType = Movie['title'];

// type MovieKeys = keyof Movie; // 'title' | 'director' | 'awards'

// type MovieCopy = {
//     [Key in keyof Movie]: Movie[Key] extends string ? number : Movie[Key]
// }

// type OptionalMovie = {
//     [Key in keyof Movie]?: Movie[Key];
// }

// type RequerdMovie = {
//     [Key in keyof Movie]-?: Movie[Key];
// }

// type ReadonlyMovie = {
//     readonly [Key in keyof Movie]: Movie[Key];
// }

// type EditableMovie = {
//     -readonly [Key in keyof Movie]: Movie[Key];
// }

// type TestCap = Capitalize<'test'>

// type MovieSetters = {
//     readonly [Key in keyof Movie as `set${Capitalize<Key>}`]-?: (value: Movie[Key]) => void;
// }

// type MovieGetters = {
//     readonly [Key in keyof Movie as `get${Capitalize<Key>}`]-?: () => Movie[Key];
// }

// type CompletedMovie = Movie & MovieGetters & MovieSetters;

// class MovieClass implements CompletedMovie {
//     title = 'string';
//     director = 'string';
//     awards = [];
//     getTitle: () => string;
//     getDirector: () => string;
//     getAwards: () => string[] | undefined;
//     setTitle: (value: string) => void;
//     setDirector: (value: string) => void;
//     setAwards: (value: string[] | undefined) => void;
// }

// type DeepPartial<T> = T extends object
//   ? { [K in keyof T]?: DeepPartial<T[K]> }
//   : T;

// type TypeTest = Capitalize<never>;
// type TypeTest = `${never}`;

// type EntitySetters<Entity extends object> = {
//     readonly [Key in keyof Entity as `set${Capitalize<Key & string>}`]-?: (value: Entity[Key]) => void;
// }

// type EntityGetters<Entity extends object> = {
//     readonly [Key in keyof Entity as `get${Capitalize<Key & string>}`]-?: () => Entity[Key];
// }

// type CompletedEntity<Entity extends object> = Entity & EntityGetters<Entity> & EntitySetters<Entity>;

// class MovieClass implements CompletedEntity<Movie> {
//     title: string;
//     director: string;
//     awards?: string[] | undefined;
//     getTitle: () => string;
//     getDirector: () => string;
//     getAwards: () => string[] | undefined;
//     setTitle: (value: string) => void;
//     setDirector: (value: string) => void;
//     setAwards: (value: string[] | undefined) => void;
// }
