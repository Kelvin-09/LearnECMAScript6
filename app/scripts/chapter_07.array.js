/**
 * Created by kelvin on 15-9-8.
 */
//console.log('from');
// babel 不支持 traceur 支持
//function fromArguments () {
//    return Array.from(arguments);
//}
//console.log(
//    '"string":', Array.from('string'),
//    '[1, 2, 3]:', Array.from([1, 2, 3]),
//    'Set(["a", "b"])', Array.from(new Set(['a', 'b'])),
//    'selector', Array.from(document.querySelectorAll('span')),
//    fromArguments('a', 'b', 'c'),
//    Array.from({ 0: 'a', 6: 'b', 2: 'c', length: 10 }),
//    Array.from([1, 2, 3], (x) => x * x));
//console.log('use like repeat:',
//    Array.from({ length: 2 }, () => 'repeat'));
// 避免 \uFFFF 以上字符算两个字符长度的 bug 的统计长度函数
//function countSymbols(string) {
//    return Array.from(string).length;
//}
//console.log('====================');
//console.log('of');
// 竟然又不支持...
//console.log(Array.of(3, 11, 8));
//console.log('====================');
//console.log('copyWithin);
// 还是不支持...
//console.log(
//    [1, 2, 3, 4, 5].copyWithin(0, 3),
//    [1, 2, 3, 4, 5].copyWithin(0, 3, 4),
//    [1, 2, 3, 4, 5].copyWithin(0, -2, -1),
//    [].copyWithin.call({length: 5, 3: 1}, 0, 3));
//console.log('====================');
//console.log('find');
// 依然不支持...
//console.log(
//    [1, 4, -5, 10].find((value, index, arr) => value < 0),
//    [1, 4, -5, 10].findIndex((value, index, arr) => value < 0));
//console.log('fill');
// 就是不支持...
//console.log(['a', 'b', 'c'].fill(7, 1, 2));
//console.log('====================');
console.log('for-of entries keys values');
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 莫名其妙的不支持 values
//for (let elem of ['a', 'b'].values()) {
//    console.log(elem);
//}
for (let [index, elem] of ['a', 'b'].entries()) {
    // 还可以用解构的
    console.log(index, elem);
}
let arrayEntries = ['a', 'b', 'c'].entries();
console.log(
    arrayEntries.next().value,
    arrayEntries.next().value,
    arrayEntries.next().value);
console.log('====================');
//console.log('includes');
// 又不支持...
//console.log(
//    '[1, 2, NaN] NaN:', [1, 2, NaN].includes(NaN),
//    '[1, 2, 3] 3 3:', [1, 2, 3].includes(3, 3),
//    '[1, 2, 3] 3 -1:', [1, 2, 3].includes(3, -1));
//console.log('====================');
// observe 以后再说