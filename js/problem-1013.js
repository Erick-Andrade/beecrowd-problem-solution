// https://www.beecrowd.com.br/judge/en/problems/view/1013

let input = require('fs').readFileSync('/dev/stdin', 'utf8'),
[a, b, c] = input.split(' ').map(value => Number(value)),
maiorAb = (a + b + Math.abs(a - b)) / 2,
max = (maiorAb + c + Math.abs(maiorAb - c)) / 2;
console.log(`${max} eh o maior`);