function getComputerChoice() {
    random = Math.floor(Math.random() * 3)
    if ( random === 0 ) {
        return "rock"
    } else if ( random === 1 ) {
        return "paper"
    } else if ( random === 2 ) {
        return "scissors"
    } else {
        return "Something went wrong"
    }
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "rock") {
            return "A tie? Well I suppose you won't get very far banging two rocks together."
        } else if (computerSelection === "paper") {
            return "You lost. Somehow. No one understands the paper covers rock thing, right?"
        } else if (computerSelection === "scissors") {
            return "You win! Rock beats paper. Destroy the tools of production until your value is recognized and compensated!"
        } else {
            return "Well that wasn't supposed to happen."
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            return "You win this one. Paper covers rock, and that somehow renders it useless"
        } else if (computerSelection === "paper") {
            return "A tie! You both chose paper. One of you should have chosen stapler for all this paper we have now."
        } else if (computerSelection === "scissors") {
            return "You lose. Hope that paper wasn't important."
        } else {
            return "Oh no, something's gone wrong."
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            return "You lose. Hope those weren't your good scissors."
        } else if (computerSelection === "paper") {
            return "You win! Rip and tear!"
        } else if (computerSelection === "scissors") {
            return "A tie. But a win for the LGBTQ community."
        } else {
            return "You broke it."
        }
    } else {
        return "You extra broke it."
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick rock, paper, or scissors.");
        let computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }
}
