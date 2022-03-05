# https://www.beecrowd.com.br/judge/en/problems/view/1012

a, b, c = map(lambda item: float(item), input().split())

right_triangle = (a * c) / 2
circle = 3.14159 * c ** 2
trapezium = ((a + b) * c) / 2
square = b * b
rectangle = a * b

areas = [right_triangle, circle, trapezium, square, rectangle] 
geometric_shapes = ["TRIANGULO", "CIRCULO", "TRAPEZIO", "QUADRADO", "RETANGULO"]


for geometric_shape, area in zip(geometric_shapes, areas):
    print(f"{geometric_shape}: {area:.3f}")