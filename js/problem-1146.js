const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const numbers = input.split('\n').map(inp => Number(inp));
let sequence = "";

for (let i = 0; i < numbers.length; i++)
{
    if (numbers[i] === 0) break;
    
    for (let number = 1; number <= numbers[i]; number++)
    {
        sequence += `${number} `
    }

    sequence = sequence.trim();
    console.log(sequence);
    sequence = "";
}