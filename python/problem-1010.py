# https://www.beecrowd.com.br/judge/en/problems/view/1010

code1, units1, unit_price1 = input().split()
code2, units2, unit_price2 = input().split()
price = float(unit_price1) * int(units1) + float(unit_price2) + int(units2)
print(f"VALOR A PAGAR: R$ {price:.2f}")