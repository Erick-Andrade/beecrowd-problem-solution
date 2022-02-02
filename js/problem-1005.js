// https://www.beecrowd.com.br/judge/en/problems/view/1005

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [a, b] = input.split('\n').map(value => Number(value));
let average = (a * 3.5 + b * 7.5) / 11;
console.log(`MEDIA = ${average.toFixed(5)}`);