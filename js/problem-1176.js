const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [n, ...values] = input.split('\n');

const fib = num => {
    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= num; i ++)
    {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    return n1;
}

values.forEach(value => {
    value = parseInt(value);
    console.log(`Fib(${value}) = ${fib(value)}`);
})