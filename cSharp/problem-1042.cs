using System;
using System.Linq;

class URI {

    static void Main(string[] args) { 

        int[] numbers = Console.ReadLine().Split().Select(inp => int.Parse(inp)).ToArray();
        foreach(int number in numbers.OrderBy(i => i))
        {
            Console.WriteLine(number);
        }
        Console.WriteLine();
        foreach(int number in numbers)
        {
            Console.WriteLine(number);
        }

    }

}