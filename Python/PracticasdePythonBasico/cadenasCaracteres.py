str4 = "Pedro pica piedras"
#str2 = "Que tal estas"
#str3 = str1 + str2
#print(str3)

str1 = 1
str2 = '123'
str3 = int(str2) + str1
print(str3)

#nombre = input("Escribe tu nombre")
#print(nombre)

#apple = input("Dame el numero de manzanas")
#print("Te las voy a multiplicar por 10")
#print(type(apple))
#total_manzanas = int(apple)*10
#print(total_manzanas)

segundo_numero = str2[1]
print("El largo del arreglo es:")
print(len(str2))
print(segundo_numero)

for str in str4:
    print(str)

str5 = "Pedro pica piedras"
str5 = str5 + "Bienvenidos"
indice=0
while indice<len(str5):
    print(indice, str5[indice])
    indice = indice + 1

for str in str5:
    print()

palabra1 = "Banana"
palabra2 = "Manzana"

contador = 0
indice = 0
while indice<len(palabra1):
    print(indice, palabra1[indice])
    if palabra1[indice] == "a":
        contador = contador +1
        print(indice)
    indice = indice + 1
    print("La cuenta fue:", contador)

for palabra in palabra1:
    if palabra == "a":
        contador = contador +1
print(contador)

contador = 0
indice = 0
while indice<len(palabra2):
    print(indice, palabra2[indice])
    if palabra2[indice] == "a":
        contador = contador +1
        print(indice)
    indice = indice + 1
    print("La cuenta fue: ", contador)

for palabra in palabra2:
    if palabra == "a":
        contador = contador + 1
print(contador)

palabra3 = "guanabana"
contadorPalabra3 = 0
for palabra in palabra3:
    if palabra == "a":
        contadorPalabra3=contadorPalabra3+1
print("La guanabana tina a: ", contadorPalabra3)

