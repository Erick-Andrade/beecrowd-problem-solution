using System; 
using System.Linq;

// https://www.beecrowd.com.br/judge/en/problems/view/1012

class URI {

    static void Main(string[] args) { 

            double[] values = Console.ReadLine().Split(' ').Select(value => double.Parse(value)).ToArray();
            double a = values[0], b = values[1], c = values[2];
            string[] geometricShapes = {"TRIANGULO", "CIRCULO","TRAPEZIO","QUADRADO","RETANGULO"};

            double rightTriangle = (a * c) / 2,
            circle = 3.14159 * Math.Pow(c, 2),
            trapezium = ((a + b) * c) /2,
            square = b * b,
            rectangle = a * b;
            double[] areas = {rightTriangle, circle, trapezium, square, rectangle};

            for(int i = 0; i < areas.Length; i++){
                Console.WriteLine($"{geometricShapes[i]}: {areas[i].ToString("0.000")}");
            }
    }
}