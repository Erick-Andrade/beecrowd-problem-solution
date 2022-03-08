using System;

// https://www.beecrowd.com.br/judge/en/problems/view/1019

class URI {

    static void Main(string[] args) { 

        int n = int.Parse(Console.ReadLine());
        int hours = n / 3600;
        n -= (hours * 3600);
        int minutes = n / 60;
        n -= (minutes * 60);
        int seconds = n;
        
        Console.WriteLine($"{hours}:{minutes}:{seconds}");
        
        

    }

}