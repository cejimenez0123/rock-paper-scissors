let computerScore = 0;
let userScore = 0;
const options = {rock:"ROCK",
                paper:"PAPER",
                scissors:"SCISSORS"}
const arr = [options.paper,options.rock,options.scissors]
function getUserChoice(){
    let answer = prompt("So Rock,Paper or Scissors")

    return answer.toUpperCase()
}


function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * 3);
    return arr[randomIndex]
}

function compareChoice(userChoice,computerChoice){
   
        if(userChoice==computerChoice){
            alert("Computer also chose "+userChoice.toLowerCase());
            return
        }else if(userChoice==options.paper){
            if(computerChoice==options.rock){
                alert("Computer chose rock")
                userScore+=1
        }else{
                alert("Computer chose Scissors")
                computerScore+=1
     }
        }else if(userChoice==options.rock){
            if(computerChoice==options.paper){
                alert("Computer chose paper")
                computerScore+=1
        }else{
                alert("Computer chose Scissors")
                userScore+=1
        }
        }else if(userChoice==options.scissors){
            if(computerChoice==options.rock){
                alert("Computer chose rock")
                computerScore+=1
        }else{
                alert("Computer chose paper")
                userScore+=1
       }
        }
}


function playGame(){
    let round = 1
    while(userScore<2 && computerScore<2){
        round+=1
        
        let userChoice =getUserChoice()
        let computerChoice = getComputerChoice()
        compareChoice(userChoice,computerChoice)
        alert(`User Score: ${userScore}-Computer Score: ${computerScore}`)
       
    }
    if(userScore>computerScore){
        alert("You Win")
    }else{
        alert("You lose")
    }
}
playGame()
//counts round number
//run a while loop as long as computer and user's score are < 2(best 2/3)
//inside the while loop:
//increment round counter
//give an alert with the round # and user and computer's current scores
//run compare choice, passing it user's choice and computer's choice. compareChoice(getUserChoice(), getComputerChoice())