using System; 

// https://www.beecrowd.com.br/judge/en/problems/view/1011
class URI {

    static void Main(string[] args) { 

        double pi = 3.14159;
        int radius = int.Parse(Console.ReadLine());
        double sphereVolume = (4.0 / 3) * pi * Math.Pow(radius, 3);
        Console.WriteLine($"VOLUME = {sphereVolume.ToString("0.000")}");
    }

}