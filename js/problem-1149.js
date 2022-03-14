const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const numbers = input.split(' ').map(inp => Number(inp));
let total = 0;
if (numbers.length === 2)
{
    const [a, n] = numbers;
    for(let number = 0; number < n; number ++)
    {
        total += number + a;
    }

} else {
    const a = numbers.shift(), n = numbers.pop();
    for(let number = 0; number < n; number ++)
    {
        total += number + a;
    }
}

console.log(total);