from random import randint

def play_rps():
    print ("Time to Play Rock-Paper-Scissors!")

    options = {1:"rock", 2:"paper", 3:"scissors"}
    player_result = ["tie", "win", "lose"]

    user_choice = None

    while user_choice not in options:
        print ("Game options:")
     
        print ("1 Rock")
        print ("2 Paper")
        print ("3 Scissors")

        try:
            user_choice = int(input("Your choice: "))
        except ValueError:
            
            user_choice = None

        if user_choice not in options:
            print ("Pick either 1, 2, or 3!")

    computer_choice = randint(1, 3)

    print ("You chose: " + options[user_choice] + "!")
    print ('Computer chose: ' + options[computer_choice] + "!")

    result = player_result[ (user_choice-computer_choice) % 3]
    print ('You ' + result + '!')

if __name__ == '__main__':
    play_rps()
