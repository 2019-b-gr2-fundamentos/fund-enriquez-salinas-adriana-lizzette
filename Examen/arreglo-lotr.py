#EL ARREGLO ES LA COMUNIDAD DEL ANILLO, QUE SE CONFORMO EN LA PRIMERA PELICULA, CON LOS SIGUIENTES PERSONAJES
comAnillo = ["Frodo","Sam","Pippin","Merry","Gandalf","Gimli","Aragorn","Boromir","Legolas"]
print("Los miembros actuales de la comunidad del anillo son: ") 
print(comAnillo[:])
#COMO AQUI PUEDES SIMULAR SER TOLKIEN HACE 65 ANIOS, PUEDES HACERLE ESTO A LOS MIEMBROS:

def menu ():
    print("..................................................")
    print(".......Que quiere realizar con la comunidad?......")
    print("|Crear un nuevo miembro             ->1          |")
    print("|Cambiar un miembro (Actualizar)    ->2          |")
    print("|Eliminar a un miembro              ->3          |")
    print("|Salir                              ->4          |")
    print("..................................................")
    print("\n")

def opciones(opc=0):
    opcion = int(input("Selecione lo que quiere realizar de acuerdo al numero mostrado en el Menu: "))
    return opcion
def errorOperacion(opcionError=0):
    regresar = input("¿Quiere realizar una nueva operación [S/N]? ")
    return regresar    

menuPrincipal = Menu
opc = opciones()

if(opc == 1):
    print("\n")
    print("Se agregara un miembro nuevo a la Comunidad, como es nuevo va al final")
    miembrosAdd = str(input("Separados con comas, los nuevos miembros"))
    comAnillo.extend([miembrosAdd])
    print("La nuev comunidad es:") 
    print(comAnillo[:])
    print("Quiere realizar otra cosa?")
    nuevaOperacion = errorOperacion()
    if(nuevaOperacion == "S" and "s"):
        print ("Se vuelve a mostrar el menu")
        menuNuevo = menu()
        opc = opciones()
        if(opc == 1):
            print("Se agregaran mas miembros a la Comunidad")
            comAnilloNueva = comAnillo
            masMiembros = str(input("Separados con comas, los nuevos mmiembros"))
            comAnilloNueva.extend(masMiembros)
            print("La nuev comunidad es:")  
            print (comAnilloNueva[:])
        elif(opc == 2):
            print("Se cambiara un miembro por otro")
            print("La comunidad actual es:")
            print(comAnillo[:])
            cualMiembro = int(input("Posicion del miembro que se quiere cambiar"))
            indiceMiembro = cualMiembro-1 
            reemplazo = str(input("Ingrese el nombre del miembro que quiere sustituir (uno solo)"))
            comAnillo[indiceMiembro] = reemplazo
            print("La nueva comunidad es: ")
            print(comAnillo[:])
        elif(opc == 3):
            print("Se eliminara un miembro de la comunidad")
            print("La comunidad actual es:")
            print(comAnillo[:])
            cualMiembro = int(input("Posicion del miembro que se quiere eliminar"))
            indiceMiembro = cualMiembro-1 
            comAnillo.pop(indiceMiembro)
            print("La nueva comunidad es: ")
            print(comAnillo[:])
        elif(opc == 4):
            print("Ya no se puede editar el programa. Gracias por participar")
        else:
            menu()

if(opc == 2):
    print("\n")
    print("Se cambiara uno de los miembros ya existentes")
    print("La comunidad actual es:")
    print(comAnillo[:])
    cualMiembro = int(input("Posicion del miembro que se quiere cambiar"))
    indiceMiembro = cualMiembro-1 
    reemplazo = str(input("Ingrese el nombre del miembro que quiere sustituir (uno solo)"))
    comAnillo[indiceMiembro] = reemplazo
    print("La nueva comunidad es: ")
    print(comAnillo[:])
    print("Quiere realizar otra cosa?")
    nuevaOperacion = errorOperacion()
    if(nuevaOperacion == "S" and "s"):
        print ("Se vuelve a mostrar el menu")
        menuNuevo = menu()
        opc = opciones()
        if(opc == 1):
            print("Se agregaran mas miembros a la Comunidad")
            comAnilloNueva = comAnillo
            masMiembros = str(input("Separados con comas, los nuevos miembros"))
            comAnilloNueva.extend(masMiembros)
            print("La nuev comunidad es:")  
            print (comAnilloNueva[:])
        elif(opc == 2):
            print("Se cambiara otro miembro mas por otro")
            print("La comunidad actual es:")
            print(comAnillo[:])
            cualMiembro = int(input("Posicion del miembro que se quiere cambiar"))
            indiceMiembro = cualMiembro-1 
            reemplazo = str(input("Ingrese el nombre del miembro que quiere sustituir (uno solo)"))
            comAnillo[indiceMiembro] = reemplazo
            print("La nueva comunidad es: ")
            print(comAnillo[:])
        elif(opc == 3):
            print("Se eliminara un miembro de la comunidad")
            print("La comunidad actual es:")
            print(comAnillo[:])
            cualMiembro = int(input("Posicion del miembro que se quiere eliminar"))
            indiceMiembro = cualMiembro-1 
            comAnillo.pop(indiceMiembro)
            print("La nueva comunidad es: ")
            print(comAnillo[:])
        elif(opc == 4):
            print("Ya no se puede editar el programa. Gracias por participar")
        else:
            menu()

if(opc == 3):
    print("\n")
    print("Se eliminara un miembro de la comunidad")
    print("La comunidad actual es:")
    print(comAnillo[:])
    cualMiembro = int(input("Posicion del miembro que se quiere eliminar"))
    indiceMiembro = cualMiembro-1 
    comAnillo.pop(indiceMiembro)
    print("La nueva comunidad es: ")
    print(comAnillo[:])
    print("Quiere realizar otra cosa?")
    nuevaOperacion = errorOperacion()
    if(nuevaOperacion == "S" and "s"):
        print ("Se vuelve a mostrar el menu")
        menuNuevo = menu()
        opc = opciones()
        if(opc == 1):
            print("Se agregaran mas miembros a la Comunidad")
            comAnilloNueva = comAnillo
            masMiembros = str(input("Separados con comas, los nuevos mmiembros"))
            comAnilloNueva.extend(masMiembros)
            print("La nuev comunidad es:")  
            print (comAnilloNueva[:])
        elif(opc == 2):
            print("Se cambiara un miembro por otro")
            print("La comunidad actual es:")
            print(comAnillo[:])
            cualMiembro = int(input("Posicion del miembro que se quiere cambiar"))
            indiceMiembro = cualMiembro-1 
            reemplazo = str(input("Ingrese el nombre del miembro que quiere sustituir (uno solo)"))
            comAnillo[indiceMiembro] = reemplazo
            print("La nueva comunidad es: ")
            print(comAnillo[:])
        elif(opc == 3):
            print("Se eliminara un miembro de la comunidad")
            print("La comunidad actual es:")
            print(comAnillo[:])
            cualMiembro = int(input("Posicion del miembro que se quiere eliminar"))
            indiceMiembro = cualMiembro-1 
            comAnillo.pop(indiceMiembro)
            print("La nueva comunidad es: ")
            print(comAnillo[:])
        elif(opc == 4):
            print("Ya no se puede editar el programa. Gracias por participar")
        else:
            menu()

if(opc == 4):
    print("Ya no se puede editar el programa. Gracias por participar")
if(opc != 1 & 2 & 3 & 4):
    print("Escoja una opcion correcta, Vuelva a intentarlo")
    menu()