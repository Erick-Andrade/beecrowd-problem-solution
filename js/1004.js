// https://www.beecrowd.com.br/judge/en/problems/view/1004

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [x, y] = input.split('\n').map(value => Number(value));
let prod = x * y;
console.log(`PROD = ${prod}`);