const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const numbers = input.split("\n").map(number => Number(number));

let max = -Infinity;
let maxIndex = -1;

numbers.forEach((number, index) => {
    if (number > max) {
        max = number;
        maxIndex = index;
    }
});

console.log(max);
console.log(maxIndex);