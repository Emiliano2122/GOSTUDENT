import numbers
from numpy import number

lista1 = [100,200,300,400,500]

print(lista1)

lista1.reverse()
print(lista1)

lista1 = ["M", "na", "i", "ke"]
lista2 = ["y", "me", "s", "lly"]

lista3=[parte1 + parte2 for parte1, parte2 in zip(lista1,lista2)]

print(lista3)

for parte1 in lista3:
    nombre1 = parte1 + " "
print(nombre1)

contador = 0
nombre=""
while contador<len(lista3):
    nombre=nombre+lista3[contador]+ " "
    contador=contador+1
print(nombre)

numbers = [1, 2, 3, 4, 5, 6, 7]
print(numbers)
res =[]

for number in numbers:
    res.append(number*number)
print(res)

lista1 = ["Hello", "take"]
lista2 = ["Dear", "Sir"]

lista3=[parte1 + parte2 for parte1 in lista1 for parte2 in lista2]
print(lista3)

lista1 = [10, 20, 30, 40]
lista2 = [100, 200, 300, 400]

for parte1, parte2 in zip(lista1, lista2[::-1]):
    print(parte1, parte2)

lista1 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40]
lista2 = [10,[20,30],40]
lista3 = []
lista3=(lista2[1])
lista3=lista1[2][2]
print(lista3)