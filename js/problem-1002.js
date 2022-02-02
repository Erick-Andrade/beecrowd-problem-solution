// https://www.beecrowd.com.br/judge/en/problems/view/1002

let r = Number(require('fs').readFileSync('/dev/stdin', 'utf8'));
const PI = 3.14159;
let a = PI * Math.pow(r, 2);
console.log(`A=${a.toFixed(4)}`);