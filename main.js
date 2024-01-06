let score = JSON.parse(localStorage.getItem('score'));
if(score === null){
    score ={
        Wins:0,
        lost:0,
        Tie:0
    }
}
UpdateScore();

function PlayGame(PlayerMove){
    const computerMove = ComputersMove();
    let result = '';

    if(PlayerMove === "👊"){
        
        if (computerMove === '👊'){
            result = 'Tie';
        } else if (computerMove === '🖐'){
            result = 'You lose';
        }else if (computerMove === '✌️'){
            result = 'You win';
        }
    }
    if(PlayerMove === "🖐"){
        
        if (computerMove === '👊'){
            result = 'You win';
        } else if (computerMove === '🖐'){
            result = 'Tie';
        }else if (computerMove === '✌️'){
            result = 'You lose';
        }
     }
     if(PlayerMove === "✌️"){
        
        if (computerMove === '👊'){
            result = 'You lose';
        } else if (computerMove === '🖐'){
            result = 'You win';
        }else if (computerMove === '✌️'){
            result = 'Tie';
        }
      }
      if(result === 'You win'){
        score.Wins += 1;
      }
      if(result === 'You lose'){
        score.lost += 1;
      }
      if(result === 'Tie'){
        score.Tie += 1;
      }
      
      UpdateScore();

      localStorage.setItem('score',JSON.stringify(score))

      document.querySelector('.Winner')
      .innerHTML = result;

      document.querySelector('.PlayerComputerMove')
      .innerHTML = 'You'+ PlayerMove + computerMove+ ' Computer';

} 
function UpdateScore(){
    document.querySelector('.score_board')
    .innerHTML = " Wins: " +score.Wins+' Lost: '+score.lost+' Ties: '+score.Tie;
}

function ComputersMove(){

    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = '👊';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = '🖐';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = '✌️';
    }
    console.log(computerMove)
    return computerMove;
}
function ResetGame (){
        localStorage.removeItem('score');
        score.Wins = 0;
        score.lost = 0;
        score.Tie = 0;
}
function StartGame (){
    for(let i=0;i<4;i++){
        const show = document.querySelector('.hidden');
        show.classList.remove('hidden');
    }
    const hide = document.querySelector('.StartButton');
    hide.classList.add('hidden');
    document.querySelector('.heading').style.fontSize = '40px';
    document.querySelector('.heading').style.marginTop = '30px';
}
