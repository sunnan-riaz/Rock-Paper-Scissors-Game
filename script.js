let userScore  = 0
let aiScore = 0

// Access Our Choices
const choices = document.querySelectorAll(".choice");

// Access our Msg Box
const msg = document.querySelector("#msg");

// Access user and ai Score Paragraph
const userScorePara = document.querySelector("#user-score");
const aiScorePara = document.querySelector("#ai-score");


// Function to Generate ai Choice
const genAiChoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return option[randIdx];
}
// Function to Call Draw Game 
const drowGame = () => {
    msg.innerText = "Game Was Draw, Play Again."
    msg.style.backgroundColor = "#081b31";

}

// Function to display result
const showWiner = (userWin, userChoice, aiChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You Win! Your ${userChoice} beats ${aiChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        aiScore++;
        aiScorePara.innerText = aiScore;
        msg.innerText = `You Lose. ${aiChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// Call for User Choice
const playGame = (userChoice) => {

 //Call for ai Choice
 const aiChoice = genAiChoice();

    // Full Game Process 
    if (userChoice === aiChoice) {
        drowGame();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors, paper
            userWin =  aiChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = aiChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = aiChoice === "rock" ? false : true;
        }
        showWiner(userWin, userChoice, aiChoice)

    }
        

}
// Access event Listener for User Choices and Call Play Game Function
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})