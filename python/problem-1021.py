n = float(input())
notes = [100, 50, 20, 10, 5, 2]
coins = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

print("NOTAS:")
for note in notes:
    total = int(n / note)
    n %= note
    print(f"{total} nota(s) de R$ {note:.2f}")

print("MOEDAS:")
for coin in coins:
    total = int(round(n, 2) / coin)
    n %= coin
    print(f"{total} moeda(s) de R$ {coin:.2f}")
