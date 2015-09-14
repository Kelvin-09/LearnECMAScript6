/**
 * Created by kelvin on 15-9-8.
 */
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
