using System; 

class URI {

    static void Main(string[] args) { 


            uint number = uint.Parse(Console.ReadLine()),
            workedHours = uint.Parse(Console.ReadLine());

            double receivePerHour = double.Parse(Console.ReadLine()),
            salary = workedHours * receivePerHour;

            Console.WriteLine($"NUMBER = {number}");
            Console.WriteLine($"SALARY = U$ {salary.ToString("0.00")}");
    }

}