// https://www.beecrowd.com.br/judge/en/problems/view/1001

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [a, b] = input.split('\n').map(value => Number(value));
let x = a + b;
console.log(`X = ${x}`);