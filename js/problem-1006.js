// https://www.beecrowd.com.br/judge/en/problems/view/1006

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [a, b, c] = input.split('\n').map(value => Number(value));
let average = (a * 2 + b * 3 + c * 5) / 10;
console.log(`MEDIA = ${average.toFixed(1)}`);