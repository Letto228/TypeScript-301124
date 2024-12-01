import {caculate} from 'external-library';

caculate(12, 34);

window.playVideo();

type Func = Function

const cb: Function = () => ''

function test<Func extends (...args: any[]) => any>(cb: Func) {
    cb(123, 43224);
}

test<() => string>(() => 'sdf');

new Object();

const obj: Object = {};
const testObj: object = {};
