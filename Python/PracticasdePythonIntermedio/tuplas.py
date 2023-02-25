from turtle import position

numeros=(10,20,30,70.9)
print(numeros)

tupla = 1,2, "Hola"
i, j, k = tupla
print(i,j)

tupla1 = ("Hola mundo")
print(len(tupla1))

for item in tupla1:
    print(item)

print("ultima letra", tupla1[-1])

print(tupla1[:5])

position = tupla1.index("m")
print(position)
print(tupla1[position])

lista1 = list(tupla1)
print(lista1)
lista1.append("k")

tupla2=tuple(lista1)
print(tupla2)

tupla1 = (10, 20, [25, 75, 85])
tupla1[2][0]=250
print(tupla1)

lista1 = list(tupla1)
lista1.remove([250,75,85])
#lista1.pop(2)
tupla1= tuple(lista1)
print(tupla1)

tupla1 =(10,20,30,40,50)
tupla1 = tupla1[::-1]
print(tupla1)

tupla1 = ("Orange", [10, 20, 30], (5, 15, 25))
print(tupla1[1][1])

tupla1=(10, 20, 30, 40)
valor1, valor2, valor3, valor4 = tupla1
print(valor1)
print(valor2)
print(valor3)
print(valor4)

tupla1 = (11, 12)
tupla2 = (99, 88)

tupla1, tupla2 = tupla2, tupla1
print(tupla1)
print(tupla2)

tupla1 = (11, 22, 33, 44, 55, 66)
tupla2 = tupla1[3:5]
print(tupla2)

tupla1 = (11, [22, 33], 44, 55)
tupla1[1][0]=222
print(tupla1)

tupla1 = (50, 10, 60, 50)
print(tupla1.count(50))