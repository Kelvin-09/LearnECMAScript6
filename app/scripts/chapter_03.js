/**
 * Created by kelvin on 15-9-5.
 */
console.log('deconstruction:');
var [a, b, c] = new Set(['a', 'b', 'c']);
console.log('a:', a, 'b:', b, 'c:', c);
console.log('====================');
// 我的 babel 不知道出了什么问题, 不能翻译 yield
// sign 现在没有翻墙, 有了翻墙查一下
// 好像是需要引入 polyfill, 但 grunt 这个插件不行啊
// 真是懒得再换 webpack 了
//console.log('fib and deconstruction:');
//var fibs = function * () {
//    var [a, b] = [0, 1];
//    while (true) {
//        yield a;
//        [a, b] = [b, a + b];
//    }
//}
//var [first, second, third, fourth, fifth, sixth] = fibs();
//console.log('sixth:', sixth);
//console.log('====================');
console.log('object destruction:');
var originObject = {
    foo: 'aaa',
    bar: 'bbb',
    outerObj: {
        value1: 1,
        innerObj: {
            value2: 2
        }
    }
};
var { foo, bar, outerObj: { innerObj } } = originObject;
let { foo: anotherFoo, anotherValue = 3 } = originObject;
console.log(
    'foo:', foo,
    'bar:', bar,
    'anotherFoo:', anotherFoo,
    'anotherValue:', anotherValue,
    'innerObj:', innerObj
);
console.log('====================');
console.log('use declared variable');
var declaredVariable;
// 满满的都是坑, 大括号如果在开头, 就会被解析成代码段了, 编译错误
({ declaredVariable } = { declaredVariable: 1 });
console.log('declaredVariable:', declaredVariable);
console.log('====================');
console.log('destruction with library:');
let { log, sin, cos, PI, E } = Math;
console.log('log(E):', log(E), 'sin(PI/2):', sin(PI / 2), 'cos(PI):', cos(PI));
console.log('====================');
console.log('destruction with string:');
let [str1, str2, str3] = 'Hello, world!';
console.log('str1:', str1, 'str2:', str2, 'str3:', str3);
console.log('====================');
console.log('destruction with function:');
var add = ([x, y]) => x + y;
console.log('add:', add([1, 2]));
var addObj = ({x = 0, y = 0} = {}) => x + y;
// 默认值要从内向外进行设置
console.log(
    'addObj({x,y}):', addObj({ x: 1, y: 2 }),
    'addObj({x}):', addObj({ x: 1 }),
    'addObj({y}):', addObj({ y: 2 }),
    'addObj({}):', addObj({}),
    'addObj():', addObj());
console.log('====================');
console.log('destruction from array to object:');
let { 0: abc, 1: def } = ['cba', 'fed'];
console.log('abc:', abc, 'fed:', def);
console.log('====================');
console.log('exchange value:');
// 作用1: 交换变量的值
var exchangeValue1 = 1, exchangeValue2 = 2;
[exchangeValue1, exchangeValue2] = [exchangeValue2, exchangeValue1];
console.log('exchangeValue1:', exchangeValue1, 'exchangeValue2:', exchangeValue2);
console.log('====================');
console.log('destruction with return value:');
// 作用2: 多返回值
let func1 = () => { return { foo: 1, bar: 2 }; };
let { foo: func1Foo, bar: func1Bar } = func1();
console.log('func1Foo:', func1Foo, 'func1Bar:', func1Bar);
console.log('====================');
console.log('unordered parameters (config?):');
let func2 = () => {};
console.log('====================');
