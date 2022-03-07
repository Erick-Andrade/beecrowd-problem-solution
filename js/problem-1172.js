// https://www.beecrowd.com.br/judge/en/problems/view/1172

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let numbers = input.split('\n').map(number => Number(number));

numbers = numbers.map(number => (number <= 0) ? 1: number);

numbers.forEach((number, index) => console.log(`X[${index}] = ${number}`));
