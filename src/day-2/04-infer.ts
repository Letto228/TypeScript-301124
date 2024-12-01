// let example = '';

// example = 's';

// const defaultUser: {name: string} = {name: ''} 

// class TestClass {
//     private readonly user = defaultUser;
// }

// function calculate(a: number) {
//     if (a > 0) {
//         return;
//     }

//     return a;
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

// function call<
//     Arguments extends unknown[],
//     ReturnType
// >(cb: (...args: Arguments) => ReturnType, ...args: Arguments): ReturnType {
//     return cb(...args);
// }

// const callback = (a: boolean, b: string, c: number) => {
//     return {a: 123, c: {d: ''}}
// }

// const result = call(callback, true, 'str', 123)

// ------------------------infer------------------------

// type MyReturnType<Func extends (...args: any[]) =>  unknown> = Func extends (...args: any[]) => infer Result
//     ? Result
//     : never;
// type MyArguments<Func extends (...args: any[]) => unknown> = Func extends (...args: infer Arguments) => unknown
//     ? Arguments
//     : never;

// function call<
//     Func extends (...args: any[]) => unknown
// >(cb: Func, ...args: MyArguments<Func>): MyReturnType<Func> {
//     return cb(...args);
// }

// const callback = (a: boolean, b: string, c: number) => {
//     return {a: 123, c: {d: ''}}
// }

// const result = call(callback, false, 'true', 321);

// type CallbackReturnValue = ReturnType<typeof callback>
// type CallbackArguments = MyArguments<typeof callback>

// type TestAwaited = Awaited<Promise<boolean>>;
