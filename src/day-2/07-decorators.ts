import 'reflect-metadata';

// ------------------------vcsv------------------------

// class Calculator {
//     @MeasureTime()
//     sum(x: number, y: number): number {
//         return x + y;
//     }
// }

// // function MeasureTime<T>(): MethodDecorator<T> {
// function MeasureTime() {
//     return (
//         _target: object,
//         propertyName: string,
//         descriptor: PropertyDescriptor
//     ): void => {
//         const originMethod = descriptor.value;

//         descriptor.value = function(...args: unknown[]) {
//             console.time(propertyName);

//             const result = originMethod.apply(this, args);

//             console.timeEnd(propertyName);

//             return result;
//         }
//     }
// }

// const calculator = new Calculator();

// ------------------------vcsv------------------------

// type ServiceMetadata = {
//     isSingleton: boolean;
// }

// type Constructor = new (...args: unknown[]) => any;

// @Service({
//     isSingleton: true
// })
// class UserService {}

// function Service(metadata: ServiceMetadata) {
//     return (ctor: Constructor) => {
//         Reflect.defineMetadata('service', metadata, ctor);
//     }
// }

// function isServiceMetadata(entity: unknown): entity is ServiceMetadata {
//     const serviceMetadata: ServiceMetadata = entity as ServiceMetadata;

//     return serviceMetadata && typeof serviceMetadata.isSingleton === 'boolean';
// }

// const instanceStorage = new Map();

// function getInstance<ServiceConstructor extends Constructor>(
//     Service: ServiceConstructor
// ): InstanceType<ServiceConstructor> {
//     let metadata: unknown = Reflect.getMetadata('service', Service);

//     if (!isServiceMetadata(metadata)) {
//         return new Service();
//     }

//     if (!metadata.isSingleton) {
//         return new Service();
//     }

//     if (!instanceStorage.get(Service)) {
//         instanceStorage.set(Service, new Service());
//     }

//     return instanceStorage.get(Service);
// }

// getInstance(UserService);
