// let variable: type = value;

// let variable: type;
// variable = value;

// ---------------boolean---------------

// let isTrue: boolean = true;

// let isTrue: boolean;

// isTrue = true;
// isTrue = false;

// isTrue = '';
// isTrue = 123;

// ---------------number--------------

// let num: number = 123;
// let float: number = 12.56;
// float = num;
// let binary: number = 0b1101;

// ---------------bigint--------------
// Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER

// let bigNumber: bigint = 100n;

// let bigNumber: bigint = 123;
// let num: number = 123n;

// ---------------string--------------

// let str: string = 'string, hello';

// str = '';
// str = 123;

// ---------------symbol--------------

// let sym: symbol = Symbol();

// sym = '';

// ---------------null/undefined--------------

// let nullVar: null = null;

// nullVar = 123;
// nullVar = undefined;

// let undefinedVar: undefined = undefined;

// undefinedVar = null

// ---------------object--------------

// let objectVar: object = {};
// let objectVar: {} = {};

// let objectVar: {readonly a: string; b?: number; c: {d: boolean}} = {
//     a: '',
//     // b: 123,
//     c: {
//         d: true,
//     }
// };

// objectVar.a = '';
// objectVar.b = 123;

// ---------------array--------------

// let arrayVar: Array<...> = ;
// let arrayVar: string[] = ['str', '123'];

// let arrayVar: (string[])[] = [['str'], ['123', '456']];

// Variant 1
// type Arr<T> = T | Array<Arr<T>>;

// const arr: Arr<number> = [1, [2, 3], [[4]]];

// Variant 2
// type PossibleTypes = number;
// type Arr = (Arr | PossibleTypes)[];

// const a: Arr = [1, [2, 3], [[1], 2]];

// ---------------Кортеж--------------

// let tuple: [string, number, {a: boolean}] = ['', 123, {a: true}];

// ---------------Function---------------

// function sum(a: number, b: number): number {
//     return a + b;
// }

// const sum: (x: number, y: number) => number = (a: number, b: number): number => {
//     return a + b;
// }

// const result: number = sum(13, 56);

// function invoke(callback: (a: number, b: number) => number): void {
//     callback(1, 2);
// }

// invoke(sum);
// invoke(function (x: number, y: number): number {return x + y});

// function log(message?: string): void {
//     console.log(message);
// }

// log();
