/**
 * Created by kelvin on 15-9-7.
 */
console.log('32 bit regular expression support');
console.log('\\uD83D & \\uD83D\\uDC2A with u:', /^\uD83D/u.test('\uD83D\uDC2A'));
console.log('\\uD83D & \\uD83D\\uDC2A without u:', /^\uD83D/.test('\uD83D\uDC2A'));
console.log('====================');
console.log('32 bit with point support');
var bigUnicodeCharacter = '𠮷';
console.log('with u:', /^.$/.test(bigUnicodeCharacter));
console.log('without u:', /^.$/u.test(bigUnicodeCharacter));
console.log('====================');
console.log('unicode with brace');
// 加了 u 可以使 i 兼容非标准大小写字符
console.log('without u:', /\u{61}/.test('a'));
console.log('with u:', /\u{61}/u.test('a'));
console.log('with u:', /\u{20BB7}/u.test('𠮷'));
console.log('====================');
//console.log('y decoration');
// 不支持...
// 作用就是匹配和连续匹配的时候, 会从开始位置开始匹配, 而不是匹配后面存在 (非紧跟) 的内容
// 相当于隐含了一个 ^ 标记
// y 的用处就是保证在匹配时不会漏掉任何一个字符
// 可以用在 jquery 的 json 合法性检测上
//let decorationY = 'aaa_aa_a';
//let regexY1 = /a+/g,
//    regexY2 = /a+/y;
//console.log(
//    'first time:', regexY1.exec(decorationY),
//    'first time:', regexY2.executeSql(decorationY));
//console.log(
//    'second time:', regexY1.exec(decorationY),
//    'second time:', regexY2.executeSql(decorationY));
//console.log('====================');
//console.log('sticky property');
//let regexSticky = /hello\d/y;
//console.log(regexSticky.sticky);
//console.log('====================');
console.log('source and flags');
let regexSourceFlags = /abc/ig;
console.log(
    'source:', regexSourceFlags.source,
    'flags:', regexSourceFlags.flags);
