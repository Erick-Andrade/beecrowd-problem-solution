#include <stdio.h>

int main() {

    int number, worked_hours;
    double received_per_hour, salary;
    scanf("%d%d%lf", &number, &worked_hours, &received_per_hour);
    salary = received_per_hour * worked_hours;
    printf("NUMBER = %d\n", number);
    printf("SALARY = U$ %.2lf\n", salary);
    
    return 0;
}
