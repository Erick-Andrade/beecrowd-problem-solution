using System;
using System.Linq;

class URI {

    static void Main(string[] args) { 

        double[] input = Console.ReadLine().Split().Select(inp => double.Parse(inp)).ToArray();
        double x = input[0], y = input[1];
        if (x == 0 && y != 0)
        {
            Console.WriteLine("Eixo Y");
        } else if (x != 0 && y == 0)
        {
            Console.WriteLine("Eixo X");
        } else if (x == 0 && y == 0)
        {
            Console.WriteLine("Origem");
        } else if (x > 0 && y > 0){
            Console.WriteLine("Q1");
        } else if (x > 0 && y < 0){
            Console.WriteLine("Q4");
        } else if (x < 0 && y > 0){
            Console.WriteLine("Q2");
        } else if (x < 0 && y < 0){
            Console.WriteLine("Q3");
        }       

    }

}