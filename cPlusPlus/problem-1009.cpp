#include <iostream>

using namespace std;

int main()
{
    string name;
    double fixedSalary, sale, total;

    cin >> name >> fixedSalary >> sale;

    total = fixedSalary + (sale * 0.15);
    cout.precision(2);
    cout.setf(ios::fixed);
    cout << "TOTAL = R$ " << total << "\n";
    return 0;
}
