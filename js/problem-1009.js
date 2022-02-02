// https://www.beecrowd.com.br/judge/en/problems/view/1009

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');
let name = lines.shift();
let [fixedSalary, sale] =  lines.map(value => Number(value));
let salary = fixedSalary + (sale * 0.15);
console.log(`TOTAL = R$ ${salary.toFixed(2)}`);