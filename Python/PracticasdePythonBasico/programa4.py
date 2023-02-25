
from calcular_pago import *
try:
    horas_de_trabajo = int(input("introduce las horas de trabajo: "))
    precio_por_hora = float(input("introduce el precio por hora: "))    
except:
    print("Recuerda meter numeros")
    quit()

sueldo_calculado = calcular_pago.calcular_pago(horas_de_trabajo, precio_por_hora)




if sueldo_calculado<1000:
    print("Tu sueldo por pagar es: " + str(sueldo_calculado))
    menor_1000()
else:
    print("Tu sueldo por pagar es: " + str(sueldo_calculado))
    mayor_1000()
    sueldo_con_bono = calcular_pago.calcular_pago(horas_de_trabajo, precio_por_hora*2)
    print("Ganaste un bono y tu salario será multiplicado, ganaste: $" + str(sueldo_con_bono))

