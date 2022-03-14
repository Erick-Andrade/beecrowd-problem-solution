const n = Number(require('fs').readFileSync('/dev/stdin', 'utf8'));

for(let number = 1; number < 10000; number++)
{
    if (number % n === 2) console.log(number);
}