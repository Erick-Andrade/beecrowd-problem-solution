const t = Number(require('fs').readFileSync('/dev/stdin', 'utf8'));
let currentValue = 0;

for (let number = 0; number < 1000; number++)
{
    console.log(`N[${number}] = ${currentValue}`);
    currentValue++;
    if (currentValue === t) currentValue = 0;
}
