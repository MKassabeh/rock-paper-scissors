function getComputerChoice(){
    
    let choice = ['rock','paper','scissors'];

    let computerChoice = choice[Math.floor(Math.random() * choice.length)] ;

    return computerChoice

};







let computerScore = 0;
let playerScore = 0;

let computerSelection = getComputerChoice();

function startGame(playerSelection, computerSelection){

    if(playerSelection!="rock" && playerSelection!="paper" && playerSelection!="scissors"){
        console.log("You need to choose between rock , paper and scissors")
        
    }else{
        if (computerSelection == 'scissors' && playerSelection =='rock' ){ 

            console.log('You Win ! Rock beat sicssors ')   
            playerScore++;
            
        
        }
        else if(computerSelection == 'rock' && playerSelection =='paper'){
            console.log('You Win ! Paper beat rock ')
            playerScore++;
        }
    
        else if(computerSelection == 'rock' && playerSelection =='scissors'){
            console.log('You Lose ! Rock beat sicssors ')
            computerScore++;
        }
    
        else if(computerSelection == 'paper' && playerSelection =='scissors'){
            console.log('You Win ! Scissors beat paper ')
            playerScore++;
        }
    
        else if(computerSelection == 'paper' && playerSelection =='rock'){
            console.log('You Lose ! Paper beat rock ')
            computerScore++;
        }
        
        else if (computerSelection == 'scissors' && playerSelection =='paper'){
            console.log('You Lose ! Scissors beat paper ')
            computerScore++;
        }
        else{
            console.log('It\'a draw , '+computerSelection+' and '+playerSelection+' don\'t beat each other')
        }
    
    };

}


const button = document.querySelectorAll(".btn")



const btnArray = Array.from(button)



btnArray.forEach(e => {

    const value = e.value;
    e.addEventListener("click",(e)=>{

        startGame(value, computerSelection)
        console.log('me'+value)
        console.log("comp"+computerSelection)
        
    })
});

console.log(btnArray)