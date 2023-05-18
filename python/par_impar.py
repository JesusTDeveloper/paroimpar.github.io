def ingresar_numero():
    numero = int(input("ingrese un numero entre 1 y 1000: \n >"))
    validar_numero(numero)

def validar_numero(numero):
    if numero >= 1 and numero <= 1000:
        detectar_par_o_impar(numero)
    else:
        print("El numero no se encuentra dentro del rango")
        ingresar_numero()

def detectar_par_o_impar(numero):
    if not numero % 2 == 0:
        print("El numero es impar")
    else:
        print("El numero es par")

ingresar_numero()