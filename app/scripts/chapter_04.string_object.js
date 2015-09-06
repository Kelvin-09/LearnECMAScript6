/**
 * Created by kelvin on 15-9-6.
 */
console.log('unicode character');
console.log('\u0061', '\u{20BB7}');
console.log('====================');
console.log('unicode variable');
let hello = 123;
console.log('hello\\u{6F}:', hell\u{6F});
console.log('====================');
console.log('multiple character');
console.log('\z', '\x7A', '\u007A', '\u{7A}');
console.log('====================');
console.log('character code bigger than 0xFFFF');
console.log('0x20BB7:', String.fromCodePoint(0x20BB7));
console.log('====================');
console.log('codePointAt and charCodeAt');
var doubleString = '𠮷a';
console.log('codePointAt(0):', doubleString.codePointAt(0),
            'codePointAt(1):', doubleString.codePointAt(1),
            'charCodeAt(2):', doubleString.charCodeAt(2));
console.log('====================');
console.log('function to judge if a character is 32 bit');
var is32Bit = (c) => c.codePointAt(0) > 0xFFFF;
console.log(is32Bit("𠮷"), is32Bit("a"));
console.log('====================');
console.log('音调');
console.log('\\u004F\\u030C:', '\u004F\u030C', 'length:', '\u004F\u030C'.length);
console.log('\\u01D1:', '\u01D1', 'length:', '\u01D1'.length);
console.log('====================');
console.log('normalize function');
console.log('normalize \\u01D1 and \\u004F\\u030C:', '\u01D1'.normalize() === '\u004F\u030C'.normalize());
console.log('====================');
console.log('startsWith endsWith includes function');
var includesString = 'Hello world!';
console.log('starstWith:', includesString.startsWith('Hello'),
            'endsWith:', includesString.endsWith('world!'),
            'includes(llo, 6):', includesString.includes('llo', 6));
console.log('====================');
console.log('repeat function');
console.log('hello'.repeat(3));
console.log('====================');
console.log('template string');
let name = 'Bob', time = 'tomorrow';
console.log(`Hello ${name},
            how are you ${time}`);
console.log('====================');
console.log('template operation');
let templateObject = { x: 1, y: 2 };
console.log(`${templateObject.x + templateObject.y}`);
console.log('====================');
console.log('template function');
let templateFunction = () => 'Hello world!';
console.log(`${templateFunction()}`);
console.log('====================');
console.log('template replaced with function')
let templateVariable1 = 5, templateVariable2 = 10;
let templateFunction2 = (stringArr, ...values) =>
    stringArr.map((item, index) =>
        item + (values[index] || '')).join('');
console.log(templateFunction2`Hello ${templateVariable1 + templateVariable2} world ${templateVariable1 * templateVariable2}!`);
console.log('====================');
console.log('escape special characters');
let sender = '<a href="http://www.baidu.com?a=1&b=2">click me</a>';
let saferHTML = (template, ...values) =>
// 至少知道暂时怎么平衡一下语句了
    console.log(template) ||
    template.map((item, index) =>
        item.replace(/&|<|>/g, (item) =>
            {
                switch(item) {
                    case '&':
                        return '&amp;';
                    case '<':
                        return '&lt;';
                    case '>':
                        return '&gt;';
                }
            }
        ) + (values[index] || '')
    ).join('') + template[template.length - 1];
console.log(saferHTML`<p>${sender} has sent you a message.</p>`);
console.log('====================');
console.log('raw string');
let firstEnd = 'yo', secondEnd = 'bower';
let rawString = (template) => template.raw;
console.log(rawString`First line\nSecond line.`);
console.log(String.raw`First line ${firstEnd}\nSecond line ${secondEnd}.`);
console.log(String.raw({ raw: ['first:', ' second:', ' thrid:'] }, ...[8, 5, 9, 3]));
console.log('====================');
