let score=JSON.parse(localStorage.getItem('score'))
if(score===null){
  score={
    wins:0,
    losses:0,
    ties:0,
  }
}


let result='';

function playgame(playerMove){
  
  
  if(playerMove==='scissors'){
      if(computerMove==='rock'){
    result='You Lose';
  }else if(computerMove==='paper'){
    result='You Win';
  }else if(computerMove==='scissors'){
    result='Tie';
  }
  }else if(playerMove==='paper'){
      if(computerMove==='rock'){
    result='You Win';
  }else if(computerMove==='paper'){
    result='Tie';
  }else if(computerMove==='scissors'){
    result='You Lose';
  }
  }else if(playerMove==='rock'){
      if(computerMove==='rock'){
    result='Tie';
  }else if(computerMove==='paper'){
    result='You Lose';
  }else if(computerMove==='scissors'){
    result='You Win';
  }
  }

  if(result==='You Win'){
    score.wins +=1;
}else if(result==='You Lose'){
    score.losses +=1;
}else if(result==='Tie'){
    score.ties +=1;
}

localStorage.setItem('score',JSON.stringify(score));

//document line(inculde img concept).......................................................................................
updatescore()
document.querySelector('.js-result').innerHTML=result
document.querySelector('.js-moves').innerHTML=`      You
<img src="img/${playerMove}-emoji.png">
<img src="img/${computerMove}-emoji.png">
Computer`

// alert(`You picked ${playerMove}.Computer picked ${computerMove}.${result}
//  Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`);
} 





//----------------------------------------------------------------- 
  let computerMove='';
  function pick(){
  
    const random = Math.random();

  if(random>=0 && random<=1/3){
    computerMove='rock';
  } else if(random >= 1/3 && random< 2/3){
    computerMove='paper';
  } else if( random >= 2/3 && random < 1){
    computerMove='scissors';
  }
  console.log(computerMove);
    }

//document line..    
    
  function updatescore(){
    document.querySelector('.score-board')
 .innerHTML=`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`
  }  

  updatescore()