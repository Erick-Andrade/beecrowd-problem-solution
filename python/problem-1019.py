# https://www.beecrowd.com.br/judge/en/problems/view/1019

n = int(input())

hours = n // 3600
n %= 3600
minutes = n // 60
n %= 60
seconds = n

print(f"{hours}:{minutes}:{seconds}")