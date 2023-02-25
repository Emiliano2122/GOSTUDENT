carro = str(input("Tu carro favorito "))
print(carro)

if carro=="audi":
    print("No es posible repararlo")
    carro=input("Deseas cambiar la marca")
    print(carro)
elif carro== "ford":
    print("Vamos a reparalo!!!")
    print(carro)
elif carro=="mazda":
    print("somos expertos en mazda")
    print("Claro que los reparamos")
else:
    print("Vale la pena el servicio")