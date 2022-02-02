// https://www.beecrowd.com.br/judge/en/problems/view/1007

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [a, b, c, d] = input.split('\n').map(value => Number(value));
let difference = (a * b - c * d);
console.log(`DIFERENCA = ${difference}`);