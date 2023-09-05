





const result =  document.createElement("div"); 
const resultScore =  document.createElement("div"); 
let computerScore = 0;
let playerScore = 0;
let round =0 ;


function startGame(playerSelection, computerSelection){
    result.textContent = "Round "+ round+++":" 
    if(playerSelection!="rock" && playerSelection!="paper" && playerSelection!="scissors"){
        const content = document.createTextNode(" You need to choose between rock , paper and scissors")
        result.appendChild(content)
        
    }else{
        if (computerSelection == 'scissors' && playerSelection =='rock' ){ 

            const content = document.createTextNode(' You win ! Rock beat sicssors')  
            result.appendChild(content)
            playerScore++;
            
        
        }
        else if(computerSelection == 'rock' && playerSelection =='paper'){
            const content = document.createTextNode (' You win ! Paper beat rock ')
            result.appendChild(content)
            playerScore++;
        }
    
        else if(computerSelection == 'rock' && playerSelection =='scissors'){
            const content = document.createTextNode (' You lose ! Rock beat sicssors ')
            result.appendChild(content)
            computerScore++;
        }
    
        else if(computerSelection == 'paper' && playerSelection =='scissors'){
            const content = document.createTextNode (' You win ! Scissors beat paper ')
            result.appendChild(content)
            playerScore++;
        }
    
        else if(computerSelection == 'paper' && playerSelection =='rock'){
            const content = document.createTextNode(' You lose ! Paper beat rock ')
            result.appendChild(content)
            computerScore++;
        }
        
        else if (computerSelection == 'scissors' && playerSelection =='paper'){
            const content = document.createTextNode (' You lose ! Scissors beat paper ')
            result.appendChild(content)
            computerScore++;
        }
        else{
            const content = document.createTextNode (' It\'s a draw , '+computerSelection+' and '+playerSelection+' don\'t beat each other')
            result.appendChild(content)
        }
    
    };
    

}


const button = document.querySelectorAll(".btn")


const btnArray = Array.from(button)

function getComputerChoice(){
    
    let choice = ['rock','paper','scissors'];
const content = document.createTextNode(" You need to choose between rock , paper and scissors")
    let computerChoice = choice[Math.floor(Math.random() * choice.length)] ;

    return computerChoice

};



btnArray.forEach(e => {

    const value = e.value;

    
    e.addEventListener("click",()=>{
        
        const computerSelect = getComputerChoice();
        
        console.log(computerSelect)
        const currentDiv = document.getElementById("resultDiv");
        
        document.body.insertBefore(result, currentDiv);
        
        startGame(value,computerSelect)
        console.log(playerScore)
        console.log(computerScore)
        if(playerScore===5){
            const contentScore = document.createTextNode("You win with a  score of You : " + playerScore + " against Computer : " + computerScore )
            
            resultScore.appendChild(contentScore)
            document.body.insertBefore(resultScore, currentDiv);
            document.querySelectorAll(".btn").forEach(elem =>{
                elem.disabled = true;
            })
        }
        if(computerScore===5){
            const contentScore = document.createTextNode("You lose with a  score of You : " + playerScore + " against Computer : " + computerScore )
            
            resultScore.appendChild(contentScore)
            document.body.insertBefore(resultScore, currentDiv);
            document.querySelectorAll(".btn").forEach(elem =>{
                elem.disabled = true;
            })
        }

        
    })
    


});





