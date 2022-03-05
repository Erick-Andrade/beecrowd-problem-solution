// https://www.beecrowd.com.br/judge/en/problems/view/1016

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let minutes = (60 * input) / 30;
console.log(`${minutes} minutos`);