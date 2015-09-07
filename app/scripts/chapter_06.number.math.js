/**
 * Created by kelvin on 15-9-7.
 */
console.log('binary and octonary');
console.log(
    'binary 0b111110111:', 0b111110111,
    'octonary 0o767:', 0o767);
console.log('====================');
console.log('isFinite');
console.log(
    '15:', Number.isFinite(15),
    '\n0.8:', Number.isFinite(0.8),
    '\nNaN:', Number.isFinite(NaN),
    '\nInfinity:', Number.isFinite(Infinity),
    '\n-Infinity:', Number.isFinite(-Infinity),
    '\n"foo":', Number.isFinite("foo"),
    '\n"15":', Number.isFinite("15"),
    '\ntrue:', Number.isFinite(true));
console.log('====================');
console.log('trunc');
console.log(
    '4.1:', Math.trunc(4.1),
    '-4.1:', Math.trunc(-4.1),
    '"string":', Math.trunc('string'));
console.log('====================');
console.log('sign');
console.log(
    '-5:', Math.sign(-5),
    '5:', Math.sign(5),
    '0:', Math.sign(0),
    '-0:', Math.sign(-0),
    'NaN:', Math.sign(NaN),
    '"string":', Math.sign('string'),
    '"5":', Math.sign('5'));
console.log('====================');
console.log('cbrt');
console.log(
    '-1:', Math.cbrt(-1),
    '27:', Math.cbrt(27));
console.log('====================');
console.log('clz32');
console.log(
    '0:', Math.clz32(0),
    '1:', Math.clz32(1),
    '1000:', Math.clz32(1000),
    '3.2:', Math.clz32(3.2),
    'null:', Math.clz32(null),
    'true:', Math.clz32(true));
console.log('====================');
console.log('imul');
console.log(
    'ordinary:', (0x7fffffff * 0x7fffffff)|0,
    'imul:', Math.imul(0x7fffffff, 0x7fffffff));
console.log('====================');
console.log('hypot');
console.log(Math.hypot(3, 4));
console.log('====================');
console.log('**');
let powerNumber = 3;
console.log(2 ** 2, powerNumber **= 3);
console.log('====================');
