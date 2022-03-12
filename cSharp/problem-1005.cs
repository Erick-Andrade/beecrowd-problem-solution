using System; 

class URI {

    static void Main(string[] args) { 

        double a = double.Parse(Console.ReadLine()),
        b = double.Parse(Console.ReadLine()),
        average = (a * 3.5 + b * 7.5) / 11;
        
        Console.WriteLine($"MEDIA = {average.ToString("0.00000")}");

    }

}