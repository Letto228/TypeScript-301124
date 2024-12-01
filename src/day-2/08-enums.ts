// enum Size {
//     s = 10, 
//     m = 22,
//     l,
// }

// enum Size {
//     s = 10, 
//     m = 22,
//     l,
// }

// const test = Size[10];

// function getButtonSize(size: Size) {}

// getButtonSize(Size.m);
// getButtonSize(10);

// Object.values(Size);

// enum Size {
//     s = 'small', 
//     m = 'medium',
//     l = 'long',
// }

// getButtonSize(Size.m);
// getButtonSize('medium');

// ------------------------------------

// type Size = 's' | 'm' | 'l';

// const sizeMap = {
//     's': 'small', 
//     'm': 'medium',
//     'l': 'long',
// } as const satisfies Record<Size, string>;

// type SizeValues = (typeof sizeMap)[Size];

// ------------------------------------

const sizeMap = {
    's': 'small', 
    'm': 'medium',
    'l': 'long',
} as const;

type Size = keyof typeof sizeMap;
// type SizeValues = (typeof sizeMap)[Size];
type SizeValues = (typeof sizeMap)[keyof typeof sizeMap];
