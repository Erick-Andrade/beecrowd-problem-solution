const number = Number(require('fs').readFileSync('/dev/stdin', 'utf8'));

for(let n = 1; n <= 10; n++)
{
    console.log(`${n} x ${number} = ${number * n}`);
}
