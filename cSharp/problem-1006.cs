using System; 

class URI {

    static void Main(string[] args) { 

        double a = double.Parse(Console.ReadLine()),
        b = double.Parse(Console.ReadLine()),
        c = double.Parse(Console.ReadLine()),
        average = (a * 2 + b * 3 + c * 5) / 10;
        Console.WriteLine($"MEDIA = {average.ToString("0.0")}");

    }

}