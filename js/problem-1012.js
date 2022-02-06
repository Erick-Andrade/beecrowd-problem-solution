// https://www.beecrowd.com.br/judge/en/problems/view/1012

const GEOMETRIC_SHAPES = ["TRIANGULO","CIRCULO","TRAPEZIO","QUADRADO","RETANGULO"];
let input = require('fs').readFileSync('/dev/stdin', 'utf8'),
[a, b, c] = input.split(' ').map(value => Number(value)),
rightTriangle = (a * c) / 2,
circle = 3.14159 * Math.pow(c, 2),
trapezium = ((a + b) * c) / 2,
square = b * b,
rectangle = a * b,
areas = [rightTriangle, circle, trapezium, square, rectangle];

for(let i = 0; i < areas.length; i++){
    console.log(`${GEOMETRIC_SHAPES[i]}: ${areas[i].toFixed(3)}`);
}