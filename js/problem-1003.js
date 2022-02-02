// https://www.beecrowd.com.br/judge/en/problems/view/1003

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [a, b] = input.split('\n').map(value => Number(value));
let soma = a + b;
console.log(`SOMA = ${soma}`);