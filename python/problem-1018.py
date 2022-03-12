# https://www.beecrowd.com.br/judge/en/problems/view/1018

n = int(input())
banknotes = [100, 50, 20, 10, 5, 2, 1]

print(n)
for banknote in banknotes:
    total = n // banknote
    print(f"{total} nota(s) de R$ {banknote},00")
    n %= banknote
