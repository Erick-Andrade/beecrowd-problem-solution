// https://www.beecrowd.com.br/judge/en/problems/view/1174

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let numbers = input.split('\n').map(number => parseFloat(number).toFixed(1));


numbers.forEach((number, index) => {
    if(number <= 10) console.log(`A[${index}] = ${number}`);
});