// https://www.beecrowd.com.br/judge/en/problems/view/1175

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const numbers = input.split('\n').map(number => Number(number));
numbers.reverse();

numbers.forEach((number, index) => console.log(`N[${index}] = ${number}`));