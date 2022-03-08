using System;
using System.Linq;

class URI {

    static void Main(string[] args) { 

        double[] input = Console.ReadLine().Split(' ').Select(inp => double.Parse(inp)).ToArray();
        double a = input[0], b = input[1], c = input[2];
        
        double delta = Math.Pow(b, 2) - 4 * (a) * (c);
        
        if(delta < 0)
        {
            Console.WriteLine("Impossivel calcular");
        }
        else if(delta == 0)
        {
            double r1 = (-b * Math.Sqrt(delta)) / (2 * a);
            double r2 = r1;
            Console.WriteLine($"R1 = {r1.ToString("N5")}");
            Console.WriteLine($"R2 = {r2.ToString("N5")}");
        }
        else
        {
            double r1 = (-b * Math.Sqrt(delta)) / (2 * a);
            double r2 = (-b * - Math.Sqrt(delta)) / (2 * a);;
            Console.WriteLine($"R1 = {r1.ToString("N5")}");
            Console.WriteLine($"R2 = {r2.ToString("N5")}"); 
        }
    }

}