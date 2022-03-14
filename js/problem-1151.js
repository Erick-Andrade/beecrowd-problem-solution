const n = Number(require('fs').readFileSync('/dev/stdin', 'utf8'));

const fibonacci = n => {
    let a = 0, b = 1, nextTerm;
    let sequence = "";

    for (let i = 1; i <= n; i++)
    {
        sequence += `${a} `
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    sequence = sequence.trim();
    return sequence;
}

console.log(fibonacci(n));