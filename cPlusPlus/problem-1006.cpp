#include <iostream>

using namespace std;

int main()
{
    double a, b, c, average;
    cin >> a >> b >> c;
    average = (a * 2 + b * 3 + c * 5) / 10;
    cout.precision(1);
    cout.setf(ios::fixed);
    cout << "MEDIA = " << average << "\n";
    return 0;
}
