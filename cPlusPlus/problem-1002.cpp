#include <iostream>

using namespace std;


int main()
{
    double area, PI = 3.14159, radius;
    cin >> radius;
    area = PI * (radius * radius);
    cout.precision(4);
    cout.setf(ios::fixed);
    cout << "A=" << area << "\n";
    return 0;
}
