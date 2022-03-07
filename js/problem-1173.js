let initialValue = Number(require('fs').readFileSync('/dev/stdin', 'utf8'));
let array = [initialValue];

for (let i = 1; i < 10; i ++)
{
    initialValue *= 2;
    array[i] = initialValue;
}

array.forEach((num, index) => console.log(`N[${index}] = ${num}`));