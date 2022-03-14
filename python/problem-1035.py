a, b, c, d = map(lambda inp: int(inp), input().split())

conditionalA = b > c and d > a
conditionalB = c + d > a + b
conditionalC = c > 0 and d > 0
conditionalD = a % 2 == 0
conditional = conditionalA and conditionalB and conditionalC and conditionalD

if conditional:
    print("Valores aceitos")
else:
    print("Valores nao aceitos")