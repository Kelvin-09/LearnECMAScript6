/**
 * Created by kelvin on 15-9-8.
 */
'use strict';
console.log('default parameter');
let functionDefault1 = (x, y = 'World') => x + y;
console.log(functionDefault1('Hello,'));
let functionDefault2 = (url, { method = 'GET'} = {}, text = 'text') => console.log(url, method, text);
functionDefault2('www.baidu.com', {}, '123');
let throwIfMissing = () => { throw new Error('Missing parameter') };
let functionDefault3 = (param1, param2 = throwIfMissing()) => param1;
console.log(functionDefault3('param', 'param2'));
let defaultParam = 1;
let functionDefault4 = (defaultParam, y = defaultParam) => y;
console.log(functionDefault4(2));
console.log('====================');
console.log('rest parameter');
function functionRest1 (...values) {
    let sum = 0;
    for (let i = 0, l = values.length; i < l; ++i) {
        sum += values[i];
    }
    return sum;
}
console.log('sum 1, 2, 3:', functionRest1(1, 2, 3));
console.log('====================');
console.log('spread operator');
let unCurryingPush = (array, ...items) => array.push(...items) && array;
console.log('array:[1, 2] push: 3, 4, 5:', unCurryingPush([1, 2], 3, 4, 5));
console.log('====================');
console.log('spread & destruction');
let [let1, ...letRest] = [1, 2, 3, 4];
console.log('let1:', let1, 'letRest:', letRest);
console.log('====================');
// babel 不支持...
//console.log('spread string');
//console.log('hello:', [...'hello']);
//console.log('====================');
// 跟数组相关的好像都不支持...
//console.log('spread with map');
//let map = new Map([
//    [1, 'one'],
//    [2, 'two'],
//    [3, 'three']
//]);
//console.log([...map.keys()]);
//console.log('====================');
//console.log('spread with generator');
//let go = function* () {
//    yield 1;
//    yield 2;
//    yield 3;
//};
//console.log([...go()]);
//console.log('====================');
console.log('arrow function');
let getTempItem = id => ({ id: id, name: 'temp item'});
let toStringTempItem = ({ id, name }) => `id:\t\t${id}\nname:\t${name}`;
console.log(toStringTempItem(getTempItem(1211101)));
console.log('====================');
// 箭头函数的 this 对象一直指向定义的位置这点就不用再重复了
console.log('arrow pipe');
const pipeline = (...funcs) =>
        initial => funcs.reduce((res, func) =>
            func(res), initial);
const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);
console.log('addThenMult', addThenMult(5));
function pipelineClassic () {
    var functions = Array.prototype.slice.call(arguments, 0);
    return function (initial) {
        return functions.reduce(function (lastResult, thisFunction) {
            return thisFunction(lastResult);
        }, initial);
    }
}
const addThenMult2 = pipelineClassic(plus1, mult2);
console.log('addThenMult2', addThenMult2(5));
console.log('====================');
console.log('尾调用/递归优化');
// 尾调用优化就是高级版的尾递归优化?
// 它是安全的, 因为它并不会破坏 js 本身的作用域链
// 开启严格模式才能开启尾递归优化?
function tailFactorial (n, total) {
    if (1 === n) {
        return total;
    } else {
        return tailFactorial(n - 1, n * total);
    }
}
function factorial (n) {
    return tailFactorial(n, 1);
}
console.log('factorial(5):', factorial(5));
function newFactorial (n, total = 1) {
    if (1 === n) {
        return total;
    } else {
        return tailFactorial(n - 1, n * total);
    }
}
console.log('newFactorial(5)', newFactorial(5));
console.log('====================');
