numero = 0
while numero<50:
    print("el numero es: ")
    print(numero)
    numero=numero+5
    if (numero==10):
        print("Vamos a continuar")
        continue
    if (numero==15):
        break
print("Llegamos a la parte final de la cadena.")
print("el numero final es")
print(numero)