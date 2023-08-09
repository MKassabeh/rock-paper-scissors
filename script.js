function getComputerChoice(){
    
    let choice = ['rock','paper','scissors'];

    let computerChoice = choice[Math.floor(Math.random() * choice.length)] ;

    console.log(computerChoice)

};

getComputerChoice();