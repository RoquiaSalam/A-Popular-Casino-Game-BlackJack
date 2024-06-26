The popular card game “black jack”, for 2 players (a human player and the computer).

![esteban-lopez-OfdFHy1zxjQ-unsplash](https://github.com/RoquiaSalam/A-Popular-Casino-Game-BlackJack/assets/117322569/b50f4ea5-2ca2-43cb-97f3-e52048c05133)



In the first step, the web-based interface allows the player ask for a card from the deck [4 suits, hearts, diamonds, clubs, spades; 13 cards of each suit, from 1 (ace) to 10, plus the jack, queen and king; 52cards in total)]. The goal of the game is to reach a score as close as possible to 21 (but not more!). The score consists of the sum of the values of all cards dealt, whereby the value of the cards is as follows: the ace counts for 1 point1, 2 for 2 points, 3 for 3 points, …, 10 for 10 points, jack for 10 points, queen for 10 points, king for 10 points.

The game is started with a deck of cards, which is first shuffled. The player starts the game, and is dealt card to start with. Subsequently, he can choose between 1/ continue, which means he gets another card, or 2/ stop, which means he finishes his turn and his current score is final. Once the player got a card, two things can happen: 1/ with the additional card, his score is now higher than 21: he’s bust, and immediately loses the game; 2/ with the additional card, he obtains a new score that is not higher than 21. In this case, he can again choose for an additional card, or stop (in which case his current score is final). The player continues until the player is bust or decides to stop.

Each time he/she pushes the button, a new card is dealt (and the previously dealt card is gone). When the player pressed "Stop" button, the player can no longer ask for more cards.

If the player stops (without being bust), it’s the computer’s turn. The same process ensues. The computer can now ask for an additional card or stop. There are two ways for the computer to finish the game: 1/ it's total score is higher than 21, it’s bust and loses; 2/ it's total score is higher or equal than that of the user, and it’s not bust. It's won. At the end, all the card that were played (both the player’s and computer’s cards) are taken, shuffled, and placed at the back of the deck.

When the player is bust, he loses (i.e., the player does not need to manually stop his/her turn, and the computer doesn’t need to play – it's won!).
