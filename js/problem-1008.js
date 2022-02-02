// https://www.beecrowd.com.br/judge/en/problems/view/1008

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [number, workedHours, receivedPerHour] = input.split('\n').map(value => Number(value));
let salary = workedHours * receivedPerHour;
console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);
