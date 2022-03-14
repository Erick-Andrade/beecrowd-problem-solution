const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [x, y] = input.split(' ').map(inp => Number(inp));
let i = 0;
let numbers = "";

for (let number =  1; number <= y; number++)
{  
    i++;
    numbers += `${number} `;

    if (i == x) {
        i = 0;
        numbers = numbers.trim();
        console.log(numbers);
        numbers = "";
    }
}