let userWin = 0;
let compWin = 0;
let count = 10;

let chooseheading = document.querySelector(".choiceheading");
let PlayerWinCount = document.querySelector(".Player");
let CompWinCount = document.querySelector(".Computer");
let movescount = document.querySelector(".movescount");
let miniwinner = document.querySelector(".winner");
let choices = document.querySelectorAll(".option");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");

compChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

playGame = (userChoice) => {
    let compChoices = compChoice();
    miniwinner.classList.remove("hide");
    count = count - 1;
    movescount.innerText = "Moves Left: "+count;

    if(userChoice === compChoices) {
        miniwinner.innerText=  "Draw";
    }

    else if(userChoice === "rock") {
        if(compChoices === "paper") {
            miniwinner.innerText=  "Computer win";
            compWin = compWin+1;
            CompWinCount.innerText = compWin;
        }

        else{
            miniwinner.innerText=  "User win";
            userWin = userWin+1;
            PlayerWinCount.innerText = userWin;
        }
    }

    else if(userChoice === "paper") {
        if(compChoices === "scissor") {
            miniwinner.innerText=  "Computer win";
            compWin = compWin+1;
            CompWinCount.innerText = compWin;
        }

        else{
            miniwinner.innerText=  "User win";
            userWin = userWin+1;
            PlayerWinCount.innerText = userWin;
        }
    }

    else if(userChoice === "scissor") {
        if(compChoices === "rock") {
            miniwinner.innerText=  "Computer win";
            compWin = compWin+1;
            CompWinCount.innerText = compWin;
        }

        else{
            miniwinner.innerText=  "User win";
            userWin = userWin+1;
            PlayerWinCount.innerText = userWin;
        }
    }


    else{
        miniwinner.innerText=  "User win";
        userWin = userWin+1;
        PlayerWinCount.innerText = userWin;
    }



    if(count === 0) {
        chooseheading.classList.add("hide");
        movescount.classList.add("hide");
        rock.classList.add("hide");
        paper.classList.add("hide");
        scissor.classList.add("hide");
        miniwinner.classList.add("hide");

        if(userWin === compWin) {
            result.innerText = "Draw";
            result.classList.remove("hide");
        }

        else if(userWin > compWin) {
            result.innerText = "You are the winner!";
            result.classList.remove("hide");
        }

        else{
            result.innerText = "Computer is the winner!";
            result.classList.remove("hide");
        }

        reset.classList.remove("hide");
        reset.addEventListener("click", () => {
        chooseheading.classList.remove("hide");
        movescount.classList.remove("hide");
        rock.classList.remove("hide");
        paper.classList.remove("hide");
        scissor.classList.remove("hide");
        miniwinner.classList.add("hide");
        result.classList.add("hide");
        reset.classList.add("hide");
        userWin = 0;
        PlayerWinCount.innerText = 0;
        compWin = 0;
        CompWinCount.innerText = 0;
        count = 10;
        movescount.innerText = "Moves Left: "+count;
        })
    }




} 

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    })
})