#include <iostream>

using namespace std;


int main()
{
    double a, b, average;
    cin >> a >> b;
    average = (a * 3.5 + b * 7.5) / 11;
    cout.precision(5);
    cout.setf(ios::fixed);
    cout << "MEDIA = " << average << "\n";
    return 0;
}
