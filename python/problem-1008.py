# https://www.beecrowd.com.br/judge/en/problems/view/1008

number = int(input())
worked_hours = int(input())
receveid_per_hour = float(input())
salary = worked_hours * receveid_per_hour
print(f"NUMBER = {number}")
print(f"SALARY = U$ {salary:.2f}")