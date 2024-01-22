let randomNumber = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSolt = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrhigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevguess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    window.onload = function () {
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            const guess = parseInt(userInput.value);
            validateGuess(guess);
            // console.log(guess);
        })
    }
}

function validateGuess(guess) {
    // is not a number
    if (isNaN(guess)) {
        alert("Enter a valid number");
    } else if (guess < 1) {
        alert("Enter a valid number");
    } else if (guess > 100) {
        alert("Enter a number less than hundred")
    } else {
        prevguess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over : Random number was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // 
    if (guess === randomNumber) {
        displayMessage('Congratulations! You guest it right');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("Number is too... low");
    } else if (guess > randomNumber) {
        displayMessage("Number is too.. high");
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSolt.innerHTML += ` ${guess} , `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    // 
    lowOrhigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(params) {
    //  userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="NG">Start New Game</h2>`;

    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    // 
    const newGameButton = document.getElementById('NG')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = Math.floor(Math.random() * 100 + 1);
        prevguess = [];
        numGuess = 1;
        guessSolt.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}