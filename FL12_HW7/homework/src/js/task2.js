let confirmation;
let randomNumber;
const zero = 0;
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const eight = 8;
const hundred = 100;
const minNum = zero;
const maxNum = eight;
let chosenNumber;
let prize;
let prizeTotal = zero;
let newGame;
let wantsContinue;
let possiblePrize = hundred;


confirmation = confirm('Do you want to play a game?');
if (confirmation === false) {
    alert('You did not become a billionaire, but can.');
} else {
        while (confirmation === true) {
        randomNumber = Math.floor(Math.random() * maxNum + minNum);
        console.log(randomNumber);

        for (let i = one; i <= three; i++) {
            chosenNumber = Number(prompt(' Choose a roulette pocket number from ' + minNum + ' to ' + maxNum +
             '\n Attempts left: ' + (four - i) + 
             '\n Total prize: ' + prizeTotal + 
             '$ \n Possible prize on current attempt: ' + possiblePrize + '$'));
            console.log(chosenNumber);

            if (chosenNumber === randomNumber) {
                prize = possiblePrize;
                prizeTotal += prize;
                alert('Congratulation, you won!   Your prize is: ' + prize + '$.');
            } else {
                alert('Thank you for your participation. Your prize is: ' + prizeTotal + '$.');
            }

            possiblePrize/=two;

            wantsContinue = confirm('Do you want to continue?');
            if (!wantsContinue) {
                alert('Thank you for your participation. Your prize is: ' + prizeTotal + '$.');
                confirmation = confirm('Do you want to play again?');
                if (!confirmation) {
                    break;
                }
            }
        }
    }
}