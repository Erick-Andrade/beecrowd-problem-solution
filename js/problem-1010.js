// https://www.beecrowd.com.br/judge/en/problems/view/1010

let input = require('fs').readFileSync('/dev/stdin', 'utf8'),
[product1, product2] = input.split('\n'),
[code1, units1, unitPrice1] = product1.split(' ').map(value => Number(value)),
[code2, units2, unitPrice2] = product2.split(' ').map(value => Number(value)),
price = units1 * unitPrice1 + units2 * unitPrice2;
console.log(`VALOR A PAGAR: R$ ${price.toFixed(2)}`)