#include <stdio.h>

// https://www.beecrowd.com.br/judge/en/problems/view/1002

int main() {
    double radius, circumferenceArea, PI = 3.14159;
    scanf("%lf", &radius);
    circumferenceArea = PI * (radius * radius);
    printf("A=%.4lf\n",circumferenceArea);

    return 0;
}