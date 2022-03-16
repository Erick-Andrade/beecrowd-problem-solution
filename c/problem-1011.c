#include <stdio.h>
#include <math.h>

int main() {

    int radius;
    scanf("%d", &radius);
    double PI = 3.14159, sphere_volume = (4 / 3.0) * PI * pow(radius, 3);

    printf("VOLUME = %.3lf\n", sphere_volume);
    return 0;
}
