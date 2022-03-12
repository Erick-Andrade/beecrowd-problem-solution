#include <stdio.h>

// https://www.beecrowd.com.br/judge/en/problems/view/1005

int main() {

    double a, b, average;
    scanf("%lf%lf", &a, &b);
    average = (a * 3.5 + b * 7.5) / 11;
    printf("MEDIA = %.5lf\n", average);

    return 0;
}
