using System; 

class URI {

    static void Main(string[] args) { 

            string name = Console.ReadLine();
            double fixedSalary = double.Parse(Console.ReadLine()),
            sale = double.Parse(Console.ReadLine()),
            total = fixedSalary + (sale * 0.15);

            Console.WriteLine($"TOTAL = R$ {total.ToString("n2").Replace(",", "")}");
    }

}