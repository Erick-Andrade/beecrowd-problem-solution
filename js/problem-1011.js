// https://www.beecrowd.com.br/judge/en/problems/view/1011

const PI = 3.14159;
let radius = Number(require('fs').readFileSync('/dev/stdin', 'utf8')),
sphereVolume = (4 / 3) * PI * Math.pow(radius, 3);
console.log(`VOLUME = ${sphereVolume.toFixed(3)}`);