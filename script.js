let moves = 0;
let firstCard;
let secondCard;
let secondCardFlipped;
let userScore;
let matchesToWin = 8;
let started = false;
 

function initialize() {
    userScore = document.getElementById("scoreValue");  //how do i run this i don't have the option :(  like i want to see what it does as a webpage
    resetGame();  //do we need this here? i think? idk but the damn reset button dont work 
    document.getElementById("resetButton").addEventListener("click", resetGame); // Always call resetGame when the button is clicked
}

function resetGame() {
    started = false;
    userScore.innerHTML = "0";
    moves = 0;
    matchesToWin = 8;
    resetCardImages();
    shuffleCards();
}



function shuffleCards() {
    const container = document.getElementById("cardContainer");
    const cards = container.getElementsByTagName("img");

    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        container.appendChild(cards[j]);
    }
}

function resetCardImages() {
    const cards = document.querySelectorAll(".container img");
    cards.forEach((card) => {
        card.src = "blank.jpg";
    });
}

function startGame() {
    started = true;
    document.getElementById("resetButton").disabled = true;
    secondCardFlipped = false;
}

function flipCard(newPic, frontID) {
    if (!started) {
        startGame();
    }

    moves++;
    userScore.innerHTML = moves;

    const currCard = document.getElementById(frontID);

    if (secondCardFlipped) {
        secondCard = document.getElementById(frontID);
        secondCard.src = `${newPic}`;
        if (!(firstCard.src === secondCard.src)) {
            setTimeout(() => {
                firstCard.src = "blank.jpg";
                secondCard.src = "blank.jpg";
            }, 700);
            secondCardFlipped = false;
        } else {
            matchesToWin -= 2;
            secondCardFlipped = false;
            if (matchesToWin == 0) {
                // print some kind of result.
            }
        }
    } else if (!secondCardFlipped) {
        firstCard = currCard;
        firstCard.src = `${newPic}`;
        secondCardFlipped = true;
    }
}

function shuffleCards() {
    const container = document.getElementById("cardContainer");
    const cards = Array.from(container.getElementsByTagName("img"));

    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        container.appendChild(cards[j]);
    }
}


// Call initialize() to set up the initial game state when the page loads.
initialize();
