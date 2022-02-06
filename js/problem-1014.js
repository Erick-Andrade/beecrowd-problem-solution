// https://www.beecrowd.com.br/judge/en/problems/view/1014

let input = require('fs').readFileSync('/dev/stdin', 'utf8'),
[distanceTraveled, spentFuel] = input.split('\n').map(value => Number(value)),
averageConsumption = distanceTraveled / spentFuel;
console.log(`${averageConsumption.toFixed(3)} km/l`);