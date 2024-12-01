// ------------------typeof------------------

// function toUpperCase(a: number | string | boolean | undefined): string {
//     const prop = typeof a === 'string';

//     if (prop) {
//         return a.toUpperCase();
//     }

//     return `${a}`.toUpperCase();
// }

// ------------------Истинность------------------

// interface Movie {
//     duration: number
// }

// function playMovie(movie?: Movie): number | undefined {
//     // 1
//     // if (movie) {
//     //     return movie.duration;
//     // }

//     // 2
//     // if (!movie) {
//     //     return;
//     // }

//     // return movie.duration;

//     // 3
//     // return movie?.duration;

//     // 4 - bad practic по факту - приведение типов
//     // return movie!.duration;

//     // 5
//     // return movie ? movie.duration : undefined;

//     // 6
//     // return movie && movie.duration;
// }

// ------------------Равенство------------------

// function calculate(x: number | string, y: number | boolean): number {
//     if (x === y) {
//         // typeof x & typeof y
//         return x + y;
//     }

//     return 0;
// }

// ------------------in------------------

// type Dog = {
//     bark: () => void;
// };

// type Cat = {
//     meow: () => void;
// };

// type Wolf = {
//     run: () => void;
//     bark: () => void;
// }

// function makeSomeNoise(pet: Dog | Cat | Wolf): void {
//     if ('bark' in pet) {
//         pet.bark();
//     }

//     if ('meow' in pet) {
//         pet.meow();
//     }
// }

// ------------------instanceof------------------

// function log(date: Date | string): void {
//     if (date instanceof Date) {
//         console.log(date.toISOString());

//         return;
//     }

//     console.log(date);
// }

// ------------------type predicate------------------

// type Film = {
//     title: string;
//     duration: number;
// };

// type Responce = {
//     status: string;
//     result: unknown;
// };

// function getFilm(): Film | null {
//     const responce: Responce = {
//         status: '',
//         result: {title: '', duration: 123},
//     };

//     const result = responce.result;

//     if (isFilm(result)) {
//         return result;
//     }

//     return null;
// }

// function isFilm(entity: unknown): entity is Film {
//     const film: Film = entity as Film;

//     return (
//         !!film &&
//         typeof film.title === 'string' &&
//         typeof film.duration === 'number'
//     );
// }

// ------------------discriminated union------------------

// type Film = {
//     __typename: 'Film';
//     title: string;
//     duration: number;
// };

// type TvSeries = {
//     __typename: 'TvSeries';
//     seasonCount: number;
// };

// type TvShow = {
//     __typename: 'TvShow';
//     episodeCount: number;
// };

// type Catchup = {
//     __typename: 'Catchup';
//     endDate: string;
// };

// type Collection = {
//     title: string;
//     items: (Film | TvSeries | TvShow | Catchup)[];
// };

// function play(collectuion: Collection): void {
//     collectuion.items.forEach(item => {
//         // if (item.__typename === 'Film') {
//         //     item
//         // }

//         // switch(item.__typename) {
//         //     case 'Film':
//         //         item
//         // }
//     })
// }

// ------------------satisfies------------------

// const test = {
//     a: 123,
//     b: 'str',
//     c: 45,
//     d: 'undefined',
// } as const satisfies Record<string, string | number>;

// type Size = 's' | 'l';

// const sizeMap = {
//     s: 20,
//     l: 40,
// } as const;

// type SizeValue = typeof sizeMap[Size];

// test.b
