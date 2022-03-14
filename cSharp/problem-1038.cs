using System;
using System.Linq;
using System.Collections.Generic;

class URI {

    static void Main(string[] args) { 

        int[] input = Console.ReadLine().Split().Select(inp => int.Parse(inp)).ToArray();
        int code = input[0], quantity = input[1];
        Dictionary<int, double> products = new Dictionary<int, double>();
        products.Add(1, 4);
        products.Add(2, 4.5);
        products.Add(3, 5);
        products.Add(4, 2);
        products.Add(5, 1.5);
        double total = products[code] * quantity;
        Console.WriteLine($"Total: R$ {total.ToString("0.00")}");

    }

}