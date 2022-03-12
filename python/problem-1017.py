# https://www.beecrowd.com.br/judge/en/problems/view/1017

spent_time = int(input())
average_speed = int(input())

distance = average_speed * spent_time
spent_fuel_liters = distance / 12

print(f"{spent_fuel_liters:.3f}")
