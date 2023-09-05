


let computerScore = 0;
let playerScore = 0;



const result =  document.createElement("div"); 




function startGame(playerSelection, computerSelection){
    result.textContent = ""
    if(playerSelection!="rock" && playerSelection!="paper" && playerSelection!="scissors"){
        const content = document.createTextNode("You need to choose between rock , paper and scissors")
        result.appendChild(content)
        
    }else{
        if (computerSelection == 'scissors' && playerSelection =='rock' ){ 

            const content = document.createTextNode('You Win ! Rock beat sicssors')  
            result.appendChild(content)
            playerScore++;
            
        
        }
        else if(computerSelection == 'rock' && playerSelection =='paper'){
            const content = document.createTextNode ('You Win ! Paper beat rock ')
            result.appendChild(content)
            playerScore++;
        }
    
        else if(computerSelection == 'rock' && playerSelection =='scissors'){
            const content = document.createTextNode ('You Lose ! Rock beat sicssors ')
            result.appendChild(content)
            computerScore++;
        }
    
        else if(computerSelection == 'paper' && playerSelection =='scissors'){
            const content = document.createTextNode ('You Win ! Scissors beat paper ')
            result.appendChild(content)
            playerScore++;
        }
    
        else if(computerSelection == 'paper' && playerSelection =='rock'){
            const content = document.createTextNode('You Lose ! Paper beat rock ')
            result.appendChild(content)
            computerScore++;
        }
        
        else if (computerSelection == 'scissors' && playerSelection =='paper'){
            const content = document.createTextNode ('You Lose ! Scissors beat paper ')
            result.appendChild(content)
            computerScore++;
        }
        else{
            const content = document.createTextNode ('It\'s a draw , '+computerSelection+' and '+playerSelection+' don\'t beat each other')
            result.appendChild(content)
        }
    
    };

}


const button = document.querySelectorAll(".btn")


const btnArray = Array.from(button)

function getComputerChoice(){
    
    let choice = ['rock','paper','scissors'];

    let computerChoice = choice[Math.floor(Math.random() * choice.length)] ;

    return computerChoice

};







btnArray.forEach(e => {

    const value = e.value;
    
    
    e.addEventListener("click",(e)=>{
        const computerSelect = getComputerChoice();
        
        console.log(computerSelect)
        const currentDiv = document.getElementById("resultDiv");
        
        document.body.insertBefore(result, currentDiv);
        
        startGame(value,computerSelect)

        

        
    })
});
