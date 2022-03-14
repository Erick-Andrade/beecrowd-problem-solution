using System;
using System.Linq;

class URI
{
    static void Main(string[] args)
    {
        double[] input = Console.ReadLine().Split().Select(inp => double.Parse(inp)).ToArray();
        double a = input[0], b = input[1], c = input[2];
        bool conditionalA = (Math.Abs(b - c) < a) && (a < b + c);
        bool conditionalB = (Math.Abs(a - c) < b) && (b < a + c);
        bool conditionalC = (Math.Abs(b - a) < c) && (c < b + a);
        bool conditional = conditionalA && conditionalB && conditionalC;
        if(conditional){
            double perimeter = a + b + c;
            Console.WriteLine($"Perimetro = {perimeter.ToString("N1")}");
        } else {
            double area = ((a + b) * c) / 2;
            Console.WriteLine($"Area = {area.ToString("N1")}");
        }
    }
}