let random = Math.floor(Math.random() * 100) + 1;



let submit = document.querySelector('#submit');
let userInput = document.querySelector('#guess');
let guessSlot = document.querySelector('.guesses');
let remainings = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.results-paras');

let restartGameBtn = document.querySelector('#restart-game');




let prevGuess = [];

let numGuess = 1;

let playGame = true;


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault(e);

        const guess = userInput.value;

        validateGuess(guess)


    })
}



function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`please enter a number ${guess} is not a number`)
    } else if (guess > 100 || guess < 1) {
        alert(`please enter a number between 1 and 100. ${guess} ${guess > 100 ? ' is greater than 100' : ' is less then 1'} `)
    } else {
        prevGuess.push(guess);
        displayGuess(guess);

        if (numGuess === 11) {
            displayMessage(`Game over. Random number was ${random}`);
            endGame();
        } else {
            checkGuess(guess)
        }
    }
}



function checkGuess(guess) {
    if (guess == random) {
        displayMessage('you guessed it right ' + random);
        endGame();
    } else if (guess < random) {
        displayMessage('try bigger than ' + guess);
    } else if (guess > random) {
        displayMessage('try smaller than ' + guess);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += guess + ' ';
    numGuess++;
    remainings.innerHTML = `${11 - numGuess}`;

}


function displayMessage(message) {
    lowOrHi.innerHTML = message;
}



function newGame() {

    random = Math.floor(Math.random() * 100) + 1;

    prevGuess = [];
    numGuess = 1;
    playGame = true;
    
    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    userInput.value = '';

    guessSlot.innerHTML = '';

    remainings.innerHTML = `${11-numGuess}`;

    restartGameBtn.style.display = 'none';

    displayMessage('')

}





function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', 'true');
    submit.setAttribute('disabled', 'true');
    restartGameBtn.style.display = 'block';
    playGame = false;
}


restartGameBtn.addEventListener('click', newGame)
