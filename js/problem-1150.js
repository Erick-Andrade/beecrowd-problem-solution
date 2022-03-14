const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const numbers = input.split('\n').map(inp => Number(inp));

const x = numbers.shift(), max = numbers.filter(number => number > x)[0];
let nextNumber = x;
let sum = 0;
let total = 0;

do {
    sum += nextNumber;
    total++;
    nextNumber++;
} while (sum < max);

console.log(total);