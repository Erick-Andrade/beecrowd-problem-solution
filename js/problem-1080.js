const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const numbers = input.split("\n").map(number => Number(number));

let max = -1;
let maxPosition = -1;

for (let position = 1; position < 101; position++)
{
    if (numbers[position - 1] > max) {
        maxPosition = position;
        max = numbers[position - 1];
    } 
}

console.log(max);
console.log(maxPosition);