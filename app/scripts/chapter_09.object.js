/**
 * Created by kelvin on 15-9-14.
 */
console.log('simply style of object');
let cart = {
    _wheels: 4,
    get wheels () {
        return this._wheels;
    },
    set wheels (value) {
        if (0 > value) {
            throw new Error('hey, too less wheels!');
        } else {
            this._wheels = value;
        }
    }
};
console.log('cart wheels:', cart.wheels);
console.log('====================');
console.log('property name');
let cart2 = {
    ['whe' + 'els']: 4,
    ['hel' + 'lo']() {
        return 'hi';
    }
};
console.log('cart2.wheels', cart2.wheels,
            '\ncart2.hello', cart2.hello());
console.log('====================');
console.log('function.name');
let hasOwnProperty = Object.prototype.hasOwnProperty.bind(cart);
let key1 = Symbol('description');
let obj1 = {
    [key1] () {}
};
console.log('cart.wheels:', cart.wheels.name,
            '\nhasOwnProperty:', hasOwnProperty.name,
            '\nobj1[key1]:', obj1[key1].name);
console.log('====================');
console.log('Object.is');
console.log('+0, -0:', Object.is(+0, -0),
            'NaN, NaN:', Object.is(NaN, NaN));
console.log('====================');
// 不支持...
//console.log('Object.assign merge object');
//let target = { a: 1 },
//    source1 = { b: 2 },
//    source2 = { a: 3 },
//    source3 = { b: 4 };
//console.log('Objcet.assign:', Object.assign(target, source1, source2, source3));
//console.log('====================');

