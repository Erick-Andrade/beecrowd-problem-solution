// https://www.beecrowd.com.br/judge/en/problems/view/1015

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [p1, p2] = input.split('\n');
let [x1, y1] = p1.split(" ").map(item => Number(item));
let [x2, y2] = p2.split(" ").map(item => Number(item));
let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(distance.toFixed(4));