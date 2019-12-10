#!/usr/bin/env python
# coding: utf-8
import math
#FUNCIONES DE LA CALCULADORA, TODAS LAS OPERACIONES SE REALIZAN CON MAXIMO 4 VARIABLES (SUPONGO QUE ES ALGO ACEPTABLE)
#FUNCION QUE SUMA HASTA 4 VALORES
def sumar(valor1=0,valor2=0,valor3=0,valor4=0):
    return valor1 + valor2 + valor3 + valor4
#FUNCION QUE RESTA TRES VALORES DEL PRIMERO
def restar(valor1=0,valor2=0,valor3=0,valor4=0):
    return valor1 - valor2 - valor3 - valor4 
#FUNCION QUE MULTIPLICA VARIOS VALORES
def multiplicar(valor1=0,valor2=0,valor3=0,valor4=0):
    return valor1 * valor2 * valor3 *valor4 
#FUNCION QUE DIVIDE EL PRIMER VALOR PARA VARIOS VALORES
def dividir(valor1=0,valor2=0,valor3=0,valor4=0):
    return valor1 / valor2 / valor3 / valor4
#FUNCION QUE ELEVA EL PRIMERO VALOR A VARIAS POTENCIAS
def potencia(valor1=0, valor2=0, valor3=0,valor4=0):
    return valor1 ** valor2 ** valor3 ** valor4
#FUNCION QUE MUESTRA LAS RAICES CUADRADAS DE TODOS LOS VALORES INGRESADOS
def raizCuadrada(valor1=0,valor2=0,valor3=0,valor4=0):
    return valor1**(1/2),valor2**(1/2),valor3**(1/2),valor4**(1/2)
#FUNCION QUE MUESTRA LOS COSENOS DE LOS VALORES INDICADO (EN RADIANES)
def coseno(valor1=0,valor2=0,valor3=0,valor4=0):
    return math.cos(valor1), math.cos(valor2),  math.cos(valor3), math.cos(valor4)
#FUNCION QUE MUESTRA LOS COSENOS DE LOS VALORES INDICADO (EN RADIANES)
def seno(valor1=0,valor2=0,valor3=0,valor4=0):
    return math.sin(valor1), math.cos(valor2),  math.sin(valor3), math.sin(valor4)
#FUNCION QUE MUESTRA LOS COSENOS DE LOS VALORES INDICADO (EN RADIANES)
def tangente(valor1=0,valor2=0,valor3=0,valor4=0):
    return math.tan(valor1), math.tan(valor2),  math.tan(valor3), math.tan(valor4)
#FUNCION QUE CALCULA EL NUMERO DE COMBINACIONES DE 2 NUMEROS
def combinatorio(valor1=0,valor2=0):
    return math.factorial(valor1) /(math.factorial(valor2) * math.factorial(valor1-valor2))
#OPERACIONES QUE PUEDE REALIZAR. MENU DE OPERACIONES
def menu():
    print("..............................")
    print(".Seleccione la op. a realizar.")
    print("..............................")
    print("|Suma:               ->  1   |")
    print("|Resta:              ->  2   |")
    print("|Multiplicacion:     ->  3   |")
    print("|Division:           ->  4   |")
    print("|Potencia:           ->  5   |")
    print("|Raiz cuadrada:      ->  6   |")
    print("|Coseno(radianes):   ->  7   |")
    print("|Seno(radianes):     ->  8   |")
    print("|Tangente(radianes): ->  9   |")
    print("|Combinatorio:       ->  0   |")
    print("|Borrar:             ->  b   |")
    print("|Salir:              ->  s   |")
    print("..............................")
    print("\n")

#OPCIÓN DEL MENU
def opciones(opc=0):
    opcion = int(input("Selecione una operacion con el numero que indica el menu... "))
    return opcion

def valores(valor1=0,valor2=0,valor3=0,valor4=0):
    valor1 = float(input("Ingrese el primer valor: "))
    valor2 = float(input("Ingr4ese el segundo valor: "))
    valor3 = float(input("Ingrese el tercer valor: "))
    valor4 = float(input("ingrese el cuarto valor: "))
    return (valor1,valor2,valor3,valor4)

def errorOperacion(opcionError=0):
    regresar = input("¿Quiere realizar una nueva operación [S/N]? ")
    return (regresar)

menuPrincipal = menu()
opc = opciones()

#PRIMERA OPCION SUMA
if(opc == 1):
    print("\n")
    print ("** Entrando al modulo de Suma **")
    valoresTeclado = valores()
    valor1 = valoresTeclado[0]
    valor2 = valoresTeclado[1]
    valor3 = valoresTeclado[2]
    valor4 = valoresTeclado[3]
    resultadoSuma = sumar(valor1, valor2,valor3,valor4)
    print("El resultado de la suma es: " + str(resultadoSuma))
    print("Quiere realizar otra operación?..")
    nuevaOperacion = errorOperacion()
    #regresar = raw_input("¿Quiere realizar una nueva operanción [Si/No]? ")
    if(nuevaOperacion == "S" and "s"):
        print ("Se vuelve a mostrar el menu")
        menuNuevo = menu()
        opc = opciones()
        if(opc == 1):
            valorTecladoNuevo = valores()
            val1Ope = valorTecladoNuevo[0]
            val2Ope = valorTecladoNuevo[1]
            val3Ope = valorTecladoNuevo[2]
            val4Ope = valorTecladoNuevo[3]
            sumarNuevo = sumar(val1Ope,val2Ope,val3Ope,val4Ope)
            print("El resultado de la suma es: " + str(sumarNuevo))
        elif(opc == 2):
            restarNuevo = restar(valor1,valor2,valor3,valor4)
        elif(opc == 3):
            multiplicacionNuevo = multiplicar(valor1,valor2,valor3,valor4)
        elif(opc == 4):
            divisionNuevo = dividir(valor1,valor2,valor3,valor4)
        elif(opc == 5):
            potenciaNuevo = potencia(valor1,valor2,valor3,valor4)
        elif(opc == 6):
            raizCuadradaNuevo = raizCuadrada(valor1,valor2,valor3,valor4)
        elif(opc == 7):
            cosenoNuevo = coseno(valor1,valor2,valor3,valor4)
        elif(opc == 8):
            senoNuevo = seno(valor1,valor2,valor3,valor4)
        elif(opc == 9):
            tangenteNuevo = tangente(valor1,valor2,valor3,valor4)
        elif(opc == 0):
            combinatorioNuevo = combinatorio(valor1,valor2)
        else:
            menuPrincipal()


    #PROBLEMA QUE LA LETRA SEA DISTINTA A S Y A N	
    # if(nuevaOperacion != "S" and "s" and "N" and "n"):
    # 	print "Seleccione una opción valida"

#SEGUNDA OPERACION RESTA
if(opc == 2):
    print("\n")
    print ("** Entrando al modulo de Resta **")
    valoresTeclado = valores()
    valor1 = valoresTeclado[0]
    valor2 = valoresTeclado[1]
    valor3 = valoresTeclado[2]
    valor4 = valoresTeclado[3]
    resultadoResta = restar(valor1, valor2,valor3,valor4)
    print ("El resultado de la resta es: " + str(resultadoResta))
    print("Quiere realizar otra operación?..")
    nuevaOperacion = errorOperacion()
    #regresar = raw_input("¿Quiere realizar una nueva operanción [Si/No]? ")
    if(nuevaOperacion == "S" and "s"):
        print ("Se vuelve a mostrar el menu")
        menuNuevo = menu()
        opc = opciones()
        if(opc == 2):
            valorTecladoNuevo = valores()
            val1Ope = valorTecladoNuevo[0]
            val2Ope = valorTecladoNuevo[1]
            val3Ope = valorTecladoNuevo[2]
            val4Ope = valorTecladoNuevo[3]
            restarNuevo = restar(val1Ope,val2Ope,val3Ope,val4Ope)
            print("El resultado de la resta es: " + str(restarNuevo))
        elif(opc == 1):
            sumarNuevo = sumar(valor1,valor2,valor3,valor4)
        elif(opc == 3):
            multiplicacionNuevo = multiplicar(valor1,valor2,valor3,valor4)
        elif(opc == 4):
            divisionNuevo = dividir(valor1,valor2,valor3,valor4)
        elif(opc == 5):
            potenciaNuevo = potencia(valor1,valor2,valor3,valor4)
        elif(opc == 6):
            raizCuadradaNuevo = raizCuadrada(valor1,valor2,valor3,valor4)
        elif(opc == 7):
            cosenoNuevo = coseno(valor1,valor2,valor3,valor4)
        elif(opc == 8):
            senoNuevo = seno(valor1,valor2,valor3,valor4)
        elif(opc == 9):
            tangenteNuevo = tangente(valor1,valor2,valor3,valor4)
        elif(opc == 0):
            combinatorioNuevo = combinatorio(valor1,valor2)
        else:
            menuPrincipal()

#TERCERA OPERACION MULTIPLICACION
if(opc == 3):
    print("\n")
    print ("** Entrando al modulo de Multiplicacion **")
    valoresTeclado = valores()
    valor1 = valoresTeclado[0]
    valor2 = valoresTeclado[1]
    valor3 = valoresTeclado[2]
    valor4 = valoresTeclado[3]
    resultadoMult = multiplicar(valor1, valor2,valor3,valor4)
    print ("El resultado de su multiplicacion es: " + str(resultadoMult))
    print("Quiere realizar otra operación?..")
    nuevaOperacion = errorOperacion()
    #regresar = raw_input("¿Quiere realizar una nueva operanción [Si/No]? ")
    if(nuevaOperacion == "S" and "s"):
        print ("Se vuelve a mostrar el menu")
        menuNuevo = menu()
        opc = opciones()
        if(opc == 3):
            valorTecladoNuevo = valores()
            val1Ope = valorTecladoNuevo[0]
            val2Ope = valorTecladoNuevo[1]
            val3Ope = valorTecladoNuevo[2]
            val4Ope = valorTecladoNuevo[3]
            multNuevo = multiplicar(val1Ope,val2Ope,val3Ope,val4Ope)
            print("El resultado de su multiplicacion es: " + str(multNuevo))
        elif(opc == 2):
            restarNuevo = restar(valor1,valor2,valor3,valor4)
        elif(opc == 1):
            sumarNuevo = sumar(valor1,valor2,valor3,valor4)
        elif(opc == 4):
            divisionNuevo = dividir(valor1,valor2,valor3,valor4)
        elif(opc == 5):
            potenciaNuevo = potencia(valor1,valor2,valor3,valor4)
        elif(opc == 6):
            raizCuadradaNuevo = raizCuadrada(valor1,valor2,valor3,valor4)
        elif(opc == 7):
            cosenoNuevo = coseno(valor1,valor2,valor3,valor4)
        elif(opc == 8):
            senoNuevo = seno(valor1,valor2,valor3,valor4)
        elif(opc == 9):
            tangenteNuevo = tangente(valor1,valor2,valor3,valor4)
        elif(opc == 0):
            combinatorioNuevo = combinatorio(valor1,valor2)
        else:
            menuPrincipal()

#CUARTA OPERACION DIVISION
if(opc == 4):
    print("\n")
    print ("** Entrando al modulo de Division **")
    valoresTeclado = valores()
    valor1 = valoresTeclado[0]
    valor2 = valoresTeclado[1]
    valor3 = valoresTeclado[2]
    valor4 = valoresTeclado[3]
    resultadodiv = dividir(valor1, valor2,valor3,valor4)
    print ("El resultado de la division es: " + str(resultadodiv))
    print("Quiere realizar otra operación?..")
    nuevaOperacion = errorOperacion()
    #regresar = raw_input("¿Quiere realizar una nueva operanción [Si/No]? ")
    if(nuevaOperacion == "S" and "s"):
        print ("Se vuelve a mostrar el menu")
        menuNuevo = menu()
        opc = opciones()
        if(opc == 4):
            valorTecladoNuevo = valores()
            val1Ope = valorTecladoNuevo[0]
            val2Ope = valorTecladoNuevo[1]
            val3Ope = valorTecladoNuevo[2]
            val4Ope = valorTecladoNuevo[3]
            divNuevo = dividir(val1Ope,val2Ope,val3Ope,val4Ope)
            print("El resultado de la division es: " + str(divNuevo))
        elif(opc == 2):
            restarNuevo = restar(valor1,valor2,valor3,valor4)
        elif(opc == 3):
            multiplicacionNuevo = multiplicar(valor1,valor2,valor3,valor4)
        elif(opc == 1):
            sumaNuevo = sumar(valor1,valor2,valor3,valor4)
        elif(opc == 5):
            potenciaNuevo = potencia(valor1,valor2,valor3,valor4)
        elif(opc == 6):
            raizCuadradaNuevo = raizCuadrada(valor1,valor2,valor3,valor4)
        elif(opc == 7):
            cosenoNuevo = coseno(valor1,valor2,valor3,valor4)
        elif(opc == 8):
            senoNuevo = seno(valor1,valor2,valor3,valor4)
        elif(opc == 9):
            tangenteNuevo = tangente(valor1,valor2,valor3,valor4)
        elif(opc == 0):
            combinatorioNuevo = combinatorio(valor1,valor2)
        else:
            menuPrincipal()

#QUINTA OP POTENCIA
if(opc == 5):
    print("\n")
    print ("** Entrando al modulo de Potencia **")
    valoresTeclado = valores()
    valor1 = valoresTeclado[0]
    valor2 = valoresTeclado[1]
    valor3 = valoresTeclado[2]
    valor4 = valoresTeclado[3]
    resultadoPot = potencia(valor1, valor2,valor3,valor4)
    print ("El resultado de la potencia es: " + str(resultadoPot))
    print("Quiere realizar otra operación?..")
    nuevaOperacion = errorOperacion()
    #regresar = raw_input("¿Quiere realizar una nueva operanción [Si/No]? ")
    if(nuevaOperacion == "S" and "s"):
        print ("Se vuelve a mostrar el menu")
        menuNuevo = menu()
        opc = opciones()
        if(opc == 5):
            valorTecladoNuevo = valores()
            val1Ope = valorTecladoNuevo[0]
            val2Ope = valorTecladoNuevo[1]
            val3Ope = valorTecladoNuevo[2]
            val4Ope = valorTecladoNuevo[3]
            potNuevo = potencia(val1Ope,val2Ope,val3Ope,val4Ope)
            print("El resultado de la potencia es: " + str(potNuevo))
        elif(opc == 2):
            restarNuevo = restar(valor1,valor2,valor3,valor4)
        elif(opc == 3):
            multiplicacionNuevo = multiplicar(valor1,valor2,valor3,valor4)
        elif(opc == 4):
            divisionNuevo = dividir(valor1,valor2,valor3,valor4)
        elif(opc == 1):
            sumarNuevo = sumar(valor1,valor2,valor3,valor4)
        elif(opc == 6):
            raizCuadradaNuevo = raizCuadrada(valor1,valor2,valor3,valor4)
        elif(opc == 7):
            cosenoNuevo = coseno(valor1,valor2,valor3,valor4)
        elif(opc == 8):
            senoNuevo = seno(valor1,valor2,valor3,valor4)
        elif(opc == 9):
            tangenteNuevo = tangente(valor1,valor2,valor3,valor4)
        elif(opc == 0):
            combinatorioNuevo = combinatorio(valor1,valor2)
        else:
            menuPrincipal()

#LA 6, RAIZ
if(opc == 6):
    print("\n")
    print ("** Entrando al modulo de Raiz Cuadrada **")
    valoresTeclado = valores()
    valor1 = valoresTeclado[0]
    valor2 = valoresTeclado[1]
    valor3 = valoresTeclado[2]
    valor4 = valoresTeclado[3]
    resultadoRaiz = raizCuadrada(valor1, valor2,valor3,valor4)
    print ("El resultado de las raices cuadrada es: " + str(resultadoRaiz))
    print("Quiere realizar otra operación?..")
    nuevaOperacion = errorOperacion()
    #regresar = raw_input("¿Quiere realizar una nueva operanción [Si/No]? ")
    if(nuevaOperacion == "S" and "s"):
        print ("Se vuelve a mostrar el menu")
        menuNuevo = menu()
        opc = opciones()
        if(opc == 6):
            valorTecladoNuevo = valores()
            val1Ope = valorTecladoNuevo[0]
            val2Ope = valorTecladoNuevo[1]
            val3Ope = valorTecladoNuevo[2]
            val4Ope = valorTecladoNuevo[3]
            raizNuevo = raizCuadrada(val1Ope,val2Ope,val3Ope,val4Ope)
            print("El resultado de las raices es: " + str(raizNuevo))
        elif(opc == 2):
            restarNuevo = restar(valor1,valor2,valor3,valor4)
        elif(opc == 3):
            multiplicacionNuevo = multiplicar(valor1,valor2,valor3,valor4)
        elif(opc == 4):
            divisionNuevo = dividir(valor1,valor2,valor3,valor4)
        elif(opc == 5):
            potenciaNuevo = potencia(valor1,valor2,valor3,valor4)
        elif(opc == 1):
            sumaNuevo = sumar(valor1,valor2,valor3,valor4)
        elif(opc == 7):
            cosenoNuevo = coseno(valor1,valor2,valor3,valor4)
        elif(opc == 8):
            senoNuevo = seno(valor1,valor2,valor3,valor4)
        elif(opc == 9):
            tangenteNuevo = tangente(valor1,valor2,valor3,valor4)
        elif(opc == 0):
            combinatorioNuevo = combinatorio(valor1,valor2)
        else:
            menuPrincipal()

# 7 OP, COSENO
if(opc == 7):
    print("\n")
    print ("** Entrando al modulo de Coseno **")
    valoresTeclado = valores()
    valor1 = valoresTeclado[0]
    valor2 = valoresTeclado[1]
    valor3 = valoresTeclado[2]
    valor4 = valoresTeclado[3]
    resultadoCos = coseno(valor1, valor2,valor3,valor4)
    print ("El resultado de los coseno es: " + str(resultadoCos))
    print("Quiere realizar otra operación?..")
    nuevaOperacion = errorOperacion()
    #regresar = raw_input("¿Quiere realizar una nueva operanción [Si/No]? ")
    if(nuevaOperacion == "S" and "s"):
        print ("Se vuelve a mostrar el menu")
        menuNuevo = menu()
        opc = opciones()
        if(opc == 7):
            valorTecladoNuevo = valores()
            val1Ope = valorTecladoNuevo[0]
            val2Ope = valorTecladoNuevo[1]
            val3Ope = valorTecladoNuevo[2]
            val4Ope = valorTecladoNuevo[3]
            cosNuevo = coseno(val1Ope,val2Ope,val3Ope,val4Ope)
            print("El resultado de los coseno es: " + str(cosNuevo))
        elif(opc == 2):
            restarNuevo = restar(valor1,valor2,valor3,valor4)
        elif(opc == 3):
            multiplicacionNuevo = multiplicar(valor1,valor2,valor3,valor4)
        elif(opc == 4):
            divisionNuevo = dividir(valor1,valor2,valor3,valor4)
        elif(opc == 5):
            potenciaNuevo = potencia(valor1,valor2,valor3,valor4)
        elif(opc == 6):
            raizCuadradaNuevo = raizCuadrada(valor1,valor2,valor3,valor4)
        elif(opc == 1):
            suamrNuevo = sumar(valor1,valor2,valor3,valor4)
        elif(opc == 8):
            senoNuevo = seno(valor1,valor2,valor3,valor4)
        elif(opc == 9):
            tangenteNuevo = tangente(valor1,valor2,valor3,valor4)
        elif(opc == 0):
            combinatorioNuevo = combinatorio(valor1,valor2)
        else:
            menuPrincipal()

#OCTAVA YAAA, SENO
if(opc == 8):
    print("\n")
    print ("** Entrando al modulo de Seno **")
    valoresTeclado = valores()
    valor1 = valoresTeclado[0]
    valor2 = valoresTeclado[1]
    valor3 = valoresTeclado[2]
    valor4 = valoresTeclado[3]

    resultadoSeno = seno(valor1, valor2,valor3,valor4)
    print ("El resultado de los senos es: " + str(resultadoSeno))
    print("Quiere realizar otra operación?..")
    nuevaOperacion = errorOperacion()
    #regresar = raw_input("¿Quiere realizar una nueva operanción [Si/No]? ")
    if(nuevaOperacion == "S" and "s"):
        print ("Se vuelve a mostrar el menu")
        menuNuevo = menu()
        opc = opciones()
        if(opc == 8):
            valorTecladoNuevo = valores()
            val1Ope = valorTecladoNuevo[0]
            val2Ope = valorTecladoNuevo[1]
            val3Ope = valorTecladoNuevo[2]
            val4Ope = valorTecladoNuevo[3]
            senoNuevo = seno(val1Ope,val2Ope,val3Ope,val4Ope)
            print("El resultado de los senos es: " + str(senoNuevo))
        elif(opc == 2):
            restarNuevo = restar(valor1,valor2,valor3,valor4)
        elif(opc == 3):
            multiplicacionNuevo = multiplicar(valor1,valor2,valor3,valor4)
        elif(opc == 4):
            divisionNuevo = dividir(valor1,valor2,valor3,valor4)
        elif(opc == 5):
            potenciaNuevo = potencia(valor1,valor2,valor3,valor4)
        elif(opc == 6):
            raizCuadradaNuevo = raizCuadrada(valor1,valor2,valor3,valor4)
        elif(opc == 7):
            cosenoNuevo = coseno(valor1,valor2,valor3,valor4)
        elif(opc == 1):
            sumaNuevo = sumar(valor1,valor2,valor3,valor4)
        elif(opc == 9):
            tangenteNuevo = tangente(valor1,valor2,valor3,valor4)
        elif(opc == 0):
            combinatorioNuevo = combinatorio(valor1,valor2)
        else:
            menuPrincipal()

#NOVENA, DORIME, TANGENTE
if(opc == 9):
    print("\n")
    print ("** Entrando al modulo de Tangente **")
    valoresTeclado = valores()
    valor1 = valoresTeclado[0]
    valor2 = valoresTeclado[1]
    valor3 = valoresTeclado[2]
    valor4 = valoresTeclado[3]

    resultadoTan = tangente(valor1, valor2,valor3,valor4)
    print ("El resultado de las tangentes es: " + str(resultadoTan))
    print("Quiere realizar otra operación?..")
    nuevaOperacion = errorOperacion()
    #regresar = raw_input("¿Quiere realizar una nueva operanción [Si/No]? ")
    if(nuevaOperacion == "S" and "s"):
        print ("Se vuelve a mostrar el menu")
        menuNuevo = menu()
        opc = opciones()
        if(opc == 9):
            valorTecladoNuevo = valores()
            val1Ope = valorTecladoNuevo[0]
            val2Ope = valorTecladoNuevo[1]
            val3Ope = valorTecladoNuevo[2]
            val4Ope = valorTecladoNuevo[3]
            tanNuevo = tangente(val1Ope,val2Ope,val3Ope,val4Ope)
            print("El resultado de las tangentes es: " + str(tanNuevo))
        elif(opc == 2):
            restarNuevo = restar(valor1,valor2,valor3,valor4)
        elif(opc == 3):
            multiplicacionNuevo = multiplicar(valor1,valor2,valor3,valor4)
        elif(opc == 4):
            divisionNuevo = dividir(valor1,valor2,valor3,valor4)
        elif(opc == 5):
            potenciaNuevo = potencia(valor1,valor2,valor3,valor4)
        elif(opc == 6):
            raizCuadradaNuevo = raizCuadrada(valor1,valor2,valor3,valor4)
        elif(opc == 7):
            cosenoNuevo = coseno(valor1,valor2,valor3,valor4)
        elif(opc == 8):
            senoNuevo = seno(valor1,valor2,valor3,valor4)
        elif(opc == 1):
            sumaNuevo = sumar(valor1,valor2,valor3,valor4)
        elif(opc == 0):
            combinatorioNuevo = combinatorio(valor1,valor2)
        else:
            menuPrincipal()

#DECIMA OPERACION, COMBINATORIO
if(opc == 0):
    print("\n")
    print ("** Entrando al modulo de Combinatorio **")
    valoresTeclado = valores()
    valor1 = valoresTeclado[0]
    valor2 = valoresTeclado[1]
    resultadoComb = combinatorio(valor1,valor2)
    print ("El resultado del combinatorio es: " + str(resultadoComb))
    print("Quiere realizar otra operación?..")
    nuevaOperacion = errorOperacion()
    #regresar = raw_input("¿Quiere realizar una nueva operanción [Si/No]? ")
    if(nuevaOperacion == "S" and "s"):
        print ("Se vuelve a mostrar el menu")
        menuNuevo = menu()
        opc = opciones()
        if(opc == 0):
            valorTecladoNuevo = valores()
            val1Ope = valorTecladoNuevo[0]
            val2Ope = valorTecladoNuevo[1]
            combNuevo = combinatorio(val1Ope,val2Ope)
            print("El resultado de la suma es: ") + str(combNuevo)
        elif(opc == 2):
            restarNuevo = restar(valor1,valor2,valor3,valor4)
        elif(opc == 3):
            multiplicacionNuevo = multiplicar(valor1,valor2,valor3,valor4)
        elif(opc == 4):
            divisionNuevo = dividir(valor1,valor2,valor3,valor4)
        elif(opc == 5):
            potenciaNuevo = potencia(valor1,valor2,valor3,valor4)
        elif(opc == 6):
            raizCuadradaNuevo = raizCuadrada(valor1,valor2,valor3,valor4)
        elif(opc == 7):
            cosenoNuevo = coseno(valor1,valor2,valor3,valor4)
        elif(opc == 8):
            senoNuevo = seno(valor1,valor2,valor3,valor4)
        elif(opc == 9):
            tangenteNuevo = tangente(valor1,valor2,valor3,valor4)
        elif(opc == 1):
            sumaNuevo = sumar(valor1,valor2,valor3,valor4)
        else:
            menuPrincipal()