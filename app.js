let buttons = document.querySelectorAll(".Box");
let compOptions = ["Rock", "Paper", "Scissor"];
let userScore = document.querySelector(".userScore");
let compScore = document.querySelector(".compScore");
let move = document.querySelector(".move");
let userWonCount = 0;
let compWonCount = 0;
let resetGame = document.querySelector(".resetGame");



const count = (userWonCount, compWonCount) => {
    userScore.innerText = `User score: ${userWonCount}`;
    compScore.innerText = `Comp score: ${compWonCount}`;
    
}


const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * compOptions.length);
    return compOptions[randomIndex];
};

resetGame.addEventListener("click", () => {
    userWonCount = 0;
    compWonCount = 0;
    count(userWonCount, compWonCount);
    move.innerText = "Pick your move";
    move.style.backgroundColor = "#333333";
})

buttons.forEach(button => {
    if (button.innerText === "Rock") {
        button.style.backgroundColor = "#FF7B9C";
    } else if (button.innerText === "Paper") {
        button.style.backgroundColor = "#FFC759";
    } else if (button.innerText === "Scissor") {
        button.style.backgroundColor = "#607196"; 
    } 

    button.addEventListener("click", (e) =>  {
        console.log("clicked");
        let userChoice = e.target.innerText;
        let compChoice = getRandomChoice();
        console.log(userChoice, compChoice);
        checkWinner(userChoice, compChoice);

        
    });

});


const checkWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        move.innerText = `It's a tie! Both chose ${userChoice}.`;
        move.style.backgroundColor = "black";
        return; 
    }
    
    
    if ((userChoice === "Rock" && compChoice === "Scissor") ||
        (userChoice === "Scissor" && compChoice === "Paper") ||
        (userChoice === "Paper" && compChoice === "Rock")) {
        move.innerText = `${userChoice} beats ${compChoice}. User won!`;
        userWonCount ++;
        count(userWonCount, compWonCount);
        
        if (userChoice === "Rock") {
            move.style.backgroundColor = "#FF7B9C";
        } else if (userChoice === "Paper") {
            move.style.backgroundColor = "#FFC759";
        } else if (userChoice === "Scissor") {
            move.style.backgroundColor = "#607196"; 
        } 

    } else {
            compWonCount ++;
            count(userWonCount, compWonCount);
            move.innerText = `${compChoice} beats ${userChoice}. Computer won!`;
            if (compChoice === "Rock") {
                move.style.backgroundColor = "#FF7B9C";
            } else if (compChoice === "Paper") {
                move.style.backgroundColor = "#FFC759";
            } else if (compChoice === "Scissor") {
                move.style.backgroundColor = "#607196"; 
            } 
    }
};

