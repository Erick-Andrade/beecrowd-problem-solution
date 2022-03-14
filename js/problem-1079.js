const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split("\n");
const n = Number(lines.shift());

for (let i = 0; i < n; i++)
{
    let [n1, n2, n3] = lines[i].split(" ").map(number => Number(number));
    let average = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
    console.log(average.toFixed(1));
}