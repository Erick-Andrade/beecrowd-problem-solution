#include <stdio.h>

int main() {

    int code1, code2, units1, units2;
    double unit_price1, unit_price2, total;

    scanf("%d %d %lf", &code1, &units1, &unit_price1);
    scanf("%d %d %lf", &code2, &units2, &unit_price2);
    total = units1 * unit_price1 + units2 * unit_price2;
    printf("VALOR A PAGAR: R$ %.2lf\n", total);

    return 0;
}
