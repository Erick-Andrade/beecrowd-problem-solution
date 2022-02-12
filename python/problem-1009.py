# https://www.beecrowd.com.br/judge/en/problems/view/1009

name = input()
fixed_salary = float(input())
sale = float(input())
salary = fixed_salary + sale * 0.15
print(f"TOTAL = R$ {salary:.2f}")