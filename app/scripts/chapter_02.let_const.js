'use strict';

// arrow function
console.log('Arrow function:');
console.log([1, 2, 3].map((x) => x * x));
console.log('====================');
// class support
console.log('Class support:');
class classA {
    constructor (a) {
        console.log('constructor of classA!');
        this.a = a;
    }
    add (b) {
        return this.a + b;
    }
}
var objectA = new classA(5);
console.log(objectA.add(3));
console.log('====================');
// let variable
console.log('Let variable:');
{
    let valueLet = 'valueLet';
    var valueVar = 'valueVar';
}
//console.log('valueLet', valueLet);
console.log('valueLet:', 'will throw an exception.');
console.log('valueVar:', valueVar);

console.log('====================');

for (var varI = 0; varI < 3; ++varI) {
    console.log('varI:', varI);
}
console.log('varI:', varI);

for (let letI = 0; letI < 3; ++letI) {
    console.log('letI:', letI);
}
//console.log('letI', letI);
console.log('letI:', 'will throw an exception.');
console.log('====================');

var letArray = [];
for (let letI = 0; letI < 10; ++letI) {
    letArray[letI] = function () {
        console.log('letI:', letI);
    }
}
letArray[6]();
console.log('====================');

function letFunction () {
    console.log(letVariable);
    let letVariable = 2;
}
letFunction();
console.log('====================');

if (true) {
    // traceur will throw exception
    // babel will output undefined
    console.log(typeof letVariable);
    let letVariable = 1;
}
console.log('====================');

var scopeTestVariable = 123;
if (true) {
    console.log('before set value:', scopeTestVariable);
    scopeTestVariable = 'abc';
    // 这里和标准中不同, 因为模拟器是使用 var 来模拟 let 的行为, 所以无法做到不进行声明提前
    console.log('before let declaration:', scopeTestVariable);
    let scopeTestVariable;
    console.log('after let declaration:', scopeTestVariable);
}
console.log('out of the scope:', scopeTestVariable);
console.log('====================');
// 在这个地方 babel 就比 traceur 做的聪明, babel 会生成一个外包函数
// 在该函数中处理参数, 并将实际函数包装一层, 并调用, 将其结果返回
let fooLet = 'outer';
function letFunction2(func = x => fooLet) {
    let fooLet = 'inner';
    console.log(func()); // outer
}
letFunction2();
console.log('====================');

// 重复声明将会引发编译错误, 因为确实没办法模拟出重复声明的报错来
//function letFunction3() {
//    let fooLet = 'inner';
//    let fooLet = 'anohter';
//}
// 就连这样也会报错, 因为 es6 闲着没事干把参数都改成 let 声明了
//function letFunction4(arg) {
//    let arg; // 报错
//}
// babel 和 traceur 都是采用重命名变量的方法模拟的块级作用域
function letFunction5() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}
letFunction5();
console.log('====================');