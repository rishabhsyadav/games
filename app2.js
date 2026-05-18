let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const computerScorepara = document.querySelector("#computer-score");

const gencomputerchoice = () => {
    const options = ["paper", "rock", "scissor"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
};

const drawGame = () => {
    console.log("The game was draw");
    msg.innerText = "Game Is Draw ! Play Again";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You won!");
        msg.innerText = "You won !";
        msg.style.backgroundColor = "darkorange";
    } else {
        computerScore++;
        computerScorepara.innerText = computerScore;
        console.log("You lose!");
        msg.innerText = "You lose !";
        msg.style.backgroundColor ="green";
    }
};

// generate user choice
const playgame = (userChoice) => {

    console.log("userChoice =", userChoice);

    const computerchoice = gencomputerchoice();

    console.log("computerchoice =", computerchoice);

    if (userChoice === computerchoice) {

        // draw game
        drawGame();

    } else {

        let userWin = true;

        if (userChoice === "rock") {

            userWin = computerchoice === "paper" ? false : true;

        } else if (userChoice === "paper") {

            userWin = computerchoice === "scissor" ? false : true;

        } else {

            userWin = computerchoice === "rock" ? false : true;
        }

        // moved outside
        showWinner(userWin);
    }
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        console.log("choice was clicked", userChoice);

        playgame(userChoice);
    });

});