#include <iostream>

using namespace std;

int main()
{
    int number, worked_hour;
    double received_per_hour, salary;

    cin >> number >> worked_hour >> received_per_hour;
    salary = worked_hour * received_per_hour;
    cout << "NUMBER = " << number << "\n";

    cout.precision(2);
    cout.setf(ios::fixed);
    cout << "SALARY = U$ " << salary << "\n";
    return 0;
}
