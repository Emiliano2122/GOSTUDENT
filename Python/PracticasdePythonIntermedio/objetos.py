from datetime import datetime
from turtle import color

class Coche:
    ruedas = 4

    def __init__(self,color, aceleracion):
        self.color=color
        self.aceleracion=aceleracion
    
    def aceleracion(self):
        self.velocidad = self.velocidad + 100
    
    def cambiar_color(self):
        print("El color actual es: ", self.color)
        print("Escribe el color:")
        self.color=input()
        print("El color cambio a:", self.color)

coche1 = Coche('Rojo', 20)

print(coche1.color)
coche1.cambiar_color()

class Pelota:
    Pelota = 5

    def __init__(self,color, bote):
        self.color=color
        self.bote=bote
    
    def bote(self):
        self.bote=self.bote+20
    
    def cambio_color(self):
        print("El color es:", self.color)
        print("Escribe el color:")
        self.color=input()
        print("El color cambio a: ", self.color)

pelota1=Pelota("verde",20)

print(pelota1.color)
pelota1.cambio_color()

class SmartPhone:
    color="negro"
    camara="100 MPX"
    funda=True
    puerto_audifonos=True
    memoria=100
    numero_telefono="5554679012"
    nivel_de_carga="80%"

    def __init__(self, color, memoria, numero_telefonico, nivel_de_carga, marca):
        self.color=color 
        self.memoria=memoria
        self.numero_telefono=numero_telefonico 
        self.nivel_de_carga=nivel_de_carga
        self.marca=marca
    
    def llamada(numero_de_contacto):
        print("vamos a llamar al numero", numero_de_contacto)
    
    def nivel_de_memoria(self):
        print("El nivel es:", self.memoria)
    
    def indicador_de_carga(self):
        print("El nivel de carga es:",self.nivel_de_carga)
    
    def indicador_de_color(self):
        print("El color es:", self.color)
    
    def mandar_mensaje(self, numero_de_contacto, mensaje):
        print("Mandamo mensaje")
        print("Se mando el mensaje con el siguiente text", mensaje)
        print("Al contacto:", numero_de_contacto)
    
    def dime_la_hora(self):
        hora= datetime.now()
        print("la hora es:", hora)
    
    def musica(self):
        print("Vamos a poner la cancion de foo fighters")

A6Plus = SmartPhone("Gris",128,"55349624","100%","Samsung")

A6Plus.funda=False

if A6Plus.funda==False:
    print("no tine fundo")
else:
    print("si tiene fundo")

A6Plus.dime_la_hora()
A6Plus.musica()
texto="Lorem ipsum"
A6Plus.mandar_mensaje("5555555",texto)

