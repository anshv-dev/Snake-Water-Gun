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
  
  
  if(playerMove==='gun'){
      if(computerMove==='snake'){
    result='You Win';
  }else if(computerMove==='water'){
    result='You Lose';
  }else if(computerMove==='gun'){
    result='Tie';
  }
  }else if(playerMove==='water'){
      if(computerMove==='snake'){
    result='You Lose';
  }else if(computerMove==='water'){
    result='Tie';
  }else if(computerMove==='gun'){
    result='You Win';
  }
  }else if(playerMove==='snake'){
      if(computerMove==='snake'){
    result='Tie';
  }else if(computerMove==='water'){
    result='You Win';
  }else if(computerMove==='gun'){
    result='You Lose';
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
<img src="img/${playerMove}.png">
<img src="img/${computerMove}.png">

Computer`

// alert(`You picked ${playerMove}.Computer picked ${computerMove}.${result}
//  Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`);
} 





//----------------------------------------------------------------- 
  let computerMove='';
  function pick(){
  
    const random = Math.random();

  if(random>=0 && random<=1/3){
    computerMove='snake';
  } else if(random >= 1/3 && random< 2/3){
    computerMove='water';
  } else if( random >= 2/3 && random < 1){
    computerMove='gun';
  }
  console.log(computerMove);
    }

//document line..    
    
  function updatescore(){
    document.querySelector('.score-board')
 .innerHTML=`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`
  }  

  updatescore();

  //snake sound.
  const audio1=new Audio();
  audio1.src="sounds/snake.mp3"

  //water sound.
  const audio2=new Audio();
  audio2.src="sounds/water.mp3"
  
  //gun sound.
  const audio3=new Audio();
  audio3.src="sounds/gun.mp3"

  //restart sound.
  const audio4=new Audio();
  audio4.src="sounds/restart.wav"