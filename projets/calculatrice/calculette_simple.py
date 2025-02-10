# Partie pour enregistrer et convertir les valeurs entrées par l'utilisateur
print("Entrer un nombre :")
num1 = float(input())

print("Entrer un autre nombre :")
num2 = float(input())

# Choix de l'opération
addition = "+"
soustraction = "-"
multiplication = "*"
division = "/"
print(f"Choisir une opération : {addition} {soustraction} {multiplication} {division}")
operation = input()

# Calcul avec gestion des erreurs
if operation == addition:
    result = num1 + num2
    print(f"Le résultat est : {result}")
elif operation == soustraction:
    result = num1 - num2
    print(f"Le résultat est : {result}")
elif operation == multiplication:
    result = num1 * num2
    print(f"Le résultat est : {result}")
elif operation == division:
    if num2 == 0:
        print("Erreur : Division par zéro impossible.")
    else:
        result = num1 / num2
        print(f"Le résultat est : {result}")
else:
    print("Opération non valide.")
