using System; 

// https://www.beecrowd.com.br/judge/en/problems/view/1002
class URI {

    static void Main(string[] args) { 

        double radius = double.Parse(Console.ReadLine()),
        pi = 3.14159,
        circumferenceArea = pi * Math.Pow(radius, 2);

        Console.WriteLine($"A={circumferenceArea.ToString("0.0000")}");

    }

}