# Encontrar y acomodar el numero mas grande en el arreglo

from audioop import reverse

lista_numeros= [25,36,1,4,85,64,74,0,12]
lista_numeros_ordenados = sorted(lista_numeros, reverse=True)
num =-1
for lista_numero in lista_numeros:
    #print(lista_numero)
    if (num>lista_numero):
        lista_numeros_ordenados.append(lista_numero)
    else:
        num=lista_numero
        #lista_numeros_ordenados.append(lista_numero)
        print("Es mayor y lo guardo")
lista_numeros.sort(reverse=True)
print("Lista numeros")
print(lista_numeros)
print("lista numeros ordenados")
print(lista_numeros_ordenados)


lista_nombres=["Pedro", "Ramiro", "Eleazar", "Teodoro"]
lista_nombres_ordenados = sorted(lista_nombres, reverse=True)
print("Se cambio de posision el nombre")
lista_nombres.sort()
print("lista nombres")
print(lista_nombres)
print("lista nombres ordenados")
print(lista_nombres_ordenados)
