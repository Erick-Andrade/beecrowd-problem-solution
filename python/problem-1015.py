# https://www.beecrowd.com.br/judge/en/problems/view/1015

import math

x1, y1 = map(lambda inp: float(inp), input().split())
x2, y2 = map(lambda inp: float(inp), input().split())

distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
print(round(distance, 4))