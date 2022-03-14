#include <stdio.h>

int main() {

    char name;
    double fixed_salary, sale, total;

    scanf("%s%lf%lf", &name, &fixed_salary, &sale);
    total = fixed_salary + (sale * 0.15);
    printf("TOTAL = R$ %.2lf\n", total);

    return 0;
}
