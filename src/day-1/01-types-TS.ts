// ---------------void---------------
// ---------------Кортеж--------------

// ---------------any---------------

// let anyVar: any;

// anyVar = 123;
// anyVar = {};
// anyVar = 'a';
// anyVar.a;

// ---------------unknow---------------

// let unknowVar: unknown = {a: ''};

// unknowVar.a;

// let numberVar: number = unknowVar;

// ---------------never---------------

// Парковк: что валидней never или void
// function someFunc(): never {
//     while (true) {
//       // что-то делаем)
//     }
//   }

// ---------------Литеральные типы---------------

// let fontWeight: 'bold' = 'bold';
// let fontWeight: 500 = 500;

// ---------------union---------------

// let fontWeight: 'bold' | 500 | 600 | 700 = 500;

// fontWeight = 'bold';
// fontWeight = 'adsfsdf';

// function calculateButtonSize(size: 's' | 'm' | 'l') {}

// calculateButtonSize('xs')

// let numberOrString: number | string = true;

// function getProperty(obj: {a: string, d: string} | {b: boolean, d: string}) {
//     obj.d
// }

// getProperty({d: 'str'});

// ---------------intersection---------------

// let testVar: number & string;
// let testVar: (100 | 200 | 300 | 400) & (300 | 400 | 500 | 600) = 300;

// let testObjVar: {a: string, b: number | string} & {b: string} = {
//     a: '',
//     b: 'str',
// };

/**
 * {title: string; duration: number} & {seasonsCount: number}
 *          |
 *          V
 * {title: string; duration: number; seasonsCount: number}
 */

/**
 * {title: string; duration: number} & {title: number, seasonsCount: number}
 *          |
 *          V
 * {title: never; duration: number; seasonsCount: number}
 */

/**
 * {title: string; duration: number} & {title: number | string, seasonsCount: number}
 *          |
 *          V
 * {title: string; duration: number; seasonsCount: number}
 */

/**
 * {title: string; duration: number} & {title: string, seasonsCount: number}
 *          |
 *          V
 * {title: string; duration: number; seasonsCount: number}
 */

// {filter: unknown} - параметры фильтрации
// {sort: unknown} - параметры сортировки
// {pagination: unknown} - параметры пагинации

// function test(parm: {title: string; duration: number} & {title: string, seasonsCount: number}) {

// }

// test({title: '', duration: 123, seasonsCount: 123});

// function requestUsers(apiParams: {filter: unknown} & {sort: unknown} & {pagination: unknown}) {

// }

// function requestMovies(apiParams: {filter: unknown} & {sort: unknown}) {

// }

// function requestSeries(apiParams: {sort: unknown}) {

// }

// requestUsers({filter: null, sort: null, pagination: null});
// requestMovies({filter: null, sort: null});
