// type IdLabel = {
//     id: number;
// };

// type NameLabel = {
//     name: string;
// };

// function createLabel<Value extends string | number>(value: Value): NameOrId<Value> {
//     throw 'createLabel';
// }

// const idLabel = createLabel(123);
// const nameLabel = createLabel('str');

// type NameOrId<Value extends string | number> = Value extends number ? IdLabel : NameLabel;

// type Size = 's' | 'l';

// type MyExclude<Keys, ExludedKeys extends Keys> = Keys extends ExludedKeys ? never : Keys;

// type Test = MyExclude<Size, 's'>;

// type HasntKey<ExcludedKeys, Key> = Key extends ExcludedKeys ? never : Key

// type MyOmit<Entity extends object, ExcludedKeys extends keyof Entity> = {
//     [Key in keyof Entity as HasntKey<ExcludedKeys, Key>]: Entity[Key]
// }

// type Test = MyOmit<{title: string; name: string; age: number}, 'name' | 'title'>;
// type Test = Omit<{title: string; name: string; age: number}, 'name' | 'title'>;
