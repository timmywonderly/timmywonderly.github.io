import random

def start():
    print('''
     ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
    ∞∞The∞game∞has∞started∞∞
         ∞∞∞HANGMAN∞∞∞
     ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞''')

    name=input("Hello challenger, what is your name? ")
    print("Hello, " + name, "Time to play!")



    HANGMANPICS = ['''
      
         +---+
         |   |
             |
             |
             |
             |
      =========''', '''
     
        +---+
        |   |
        O   |
            |
            |
            |
      =========''', '''
     
        +---+
        |   |
        O   |
        |   |
            |
            |
      =========''', '''
     
        +---+
        |   |
        O   |
       /|   |
            |
            |
      =========''', '''
     
        +---+
        |   |
        O   |
       /|\  |
            |
            |
      =========''', '''
     
        +---+
        |   |
        O   |
       /|\  |
       /    |
            |
      =========''', '''
     
        +---+
        |   |
        O   |
       /|\  |
       / \  |
            |
      =========''']
    words = 'ant antelope baboon badger bat bear bird beaver camel cat cobra cougar coyote crow deer dog donkey duck elk eagle ferret fox frog goat goose hawk lion lizard llama mole monkey moose mouse mule newt otter owl panda parrot pigeon python rabbit ram rat raven rhino salmon seal shark sheep shrike skunk sloth snake spider stork swan tiger toad trout turkey turtle viero weasel whale wolf wombat zebra'.split()
     
    def getRandomWord(wordList):
          wordIndex = random.randint(0, len(wordList) - 1)
          return wordList[wordIndex]
     
    def displayBoard(HANGMANPICS, missedLetters, correctLetters, secretWord):
          print(HANGMANPICS[len(missedLetters)])
          print()
     
          print('Missed letters:', end=' ')
          for letter in missedLetters:
              print(letter, end=' ')
          print()
     
          blanks = '_' * len(secretWord)
     
          for i in range(len(secretWord)):
              if secretWord[i] in correctLetters:
                  blanks = blanks[:i] + secretWord[i] + blanks[i+1:]
     
          for letter in blanks:
              print(letter, end=' ')
          print()
     
    def getGuess(alreadyGuessed):
          while True:
              print('Guess a letter.')
              guess = input()
              guess = guess.lower()
              if len(guess) != 1:
                  print('Please enter one letter at a time.')
              elif guess in alreadyGuessed:
                  print('You have already guessed that letter. Choose again.')
              elif guess not in 'abcdefghijklmnopqrstuvwxyz':
                  print('Please enter a LETTER.')
              else:
                  return guess
     
    def playAgain():
         print('Do you want to play again? (yes or no)')
         return input().lower().startswith('y')


    print('H A N G M A N')
    missedLetters = ''
    correctLetters = ''
    secretWord = getRandomWord(words)
    gameIsDone = False

    while True:
        displayBoard(HANGMANPICS, missedLetters, correctLetters, secretWord)

        guess = getGuess(missedLetters + correctLetters)

        if guess in secretWord:
             correctLetters = correctLetters + guess

             foundAllLetters = True
             for i in range(len(secretWord)):
                 if secretWord[i] not in correctLetters:
                     foundAllLetters = False
                     break
             if foundAllLetters:
                 print('Correct, The secret word was "' + secretWord + '"! You are the winner.')
                 gameIsDone = True
        else:
             missedLetters = missedLetters + guess

             if len(missedLetters) == len(HANGMANPICS) - 1:
                 displayBoard(HANGMANPICS, missedLetters, correctLetters, secretWord)
                 print('You have run out of guesses!\nAfter ' + str(len(missedLetters)) + ' missed guesses and ' + str(len(correctLetters)) + ' correct guesses, the word was "' + secretWord + '"')
                 gameIsDone = True

        if gameIsDone:
             if playAgain():
                 missedLetters = ''
                 correctLetters = ''
                 gameIsDone = False
                 secretWord = getRandomWord(words)
             else:
                 break





#menu
def menu():
    command = input('''
:::::HANGIN' WITH THE MAN:::::
        ...hangman...

Press a then enter on keyboard to start the game.
 ''')
    if command == 'a':
        start()

menu()





