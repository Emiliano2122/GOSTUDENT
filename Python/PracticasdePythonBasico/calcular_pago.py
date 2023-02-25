def calcular_pago(horas_de_trabajo, precio_por_hora):
    sueld_por_pagar = horas_de_trabajo * precio_por_hora
    return sueld_por_pagar

def mayor_1000():
    print("Como es mayor a $1000 se te deposita en tu cueta bancaria")

def menor_1000():
    print("Como es menor que $1000 pasa a caja por el efectivo")