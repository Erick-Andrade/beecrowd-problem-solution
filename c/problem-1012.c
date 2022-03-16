#include <stdio.h>
#include <math.h>

int main()
{
    double a, b, c, right_triangle, circle, trapezium, square, rectangle;

    scanf("%lf%lf%lf", &a, &b, &c);
    right_triangle = (a * c) / 2;
    circle = 3.14159 * pow(c, 2);
    trapezium = ((a + b) * c) / 2;
    square = b * b;
    rectangle = a * b;

    char geometric_shapes[5][10] = {"TRIANGULO", "CIRCULO", "TRAPEZIO", "QUADRADO", "RETANGULO"};
    double areas[5] = {right_triangle, circle, trapezium, square, rectangle};

    for (int i = 0; i < 5; i++)
    {
        printf("%s: %.3lf\n", geometric_shapes[i], areas[i]);
    }


    return 0;
}
