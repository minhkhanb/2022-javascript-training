var a = 5;
var b = ++a;

// 1. b = a copy = 5, 2. a + 1 = 6
// 1. b = a copy + 1 = 6, a + 1 = 6

// console.log('a = ', a);
// console.log('b = ', b);

var reference = [1];

var arr = reference;

arr.push(3);

// console.log('reference: ', reference);
// console.log('arr: ', arr);

var human = {
    name: 'Khang'
};

var person = human;

human.age = 12;

console.log('human: ', human);
console.log('person: ', person);

