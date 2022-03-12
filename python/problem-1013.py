# https://www.beecrowd.com.br/judge/en/problems/view/1013

a, b, c = map(lambda inp: int(inp), input().split())
maiorAB = (a + b + abs(a - b)) // 2
maior = (maiorAB + c + abs(maiorAB - c)) // 2

print(f"{maior} eh o maior")