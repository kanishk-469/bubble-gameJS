let timer = 60;
var hitRn = 0;
let score = 0;


function increaseScore(){
  score += 10;
  document.querySelector('.scoreVal').textContent = score;

}

function getNewHit(){
  hitRn = Math.floor(Math.random()*10);
  document.querySelector('#hitVal').textContent = hitRn;

}

function runTimer(){
  let timeIntv = setInterval(function(){
     if(timer > 0){
      timer--; // post decrement timer value 60 at this line
      document.getElementById("timer").textContent = timer;
     }else{
      clearInterval(timeIntv); // to stop setInterval() execution
      document.querySelector(".pbtm").innerHTML = 
      `<h1 class ="game-over-display">Game Over</h1>`;
     }
  }, 1000);
}

function bubbleGenerate(){
  var clutter = " ";
  for(let i = 1; i <=100;i++){
    // clutter = `<div class="bubble">2</div>`; //overwrite on same variable
    let rn = Math.floor(Math.random()*10);
  
    clutter += `<div class="bubble">${rn}</div>`; // always adding new to the variable
  }
  document.querySelector('.pbtm').innerHTML = clutter;
}

/* Event Bubbling Concept */
document.querySelector(".pbtm")
.addEventListener('click' , function(event){
  // console.log(Number(event.target.textContent));
  let clickedBubble = Number(event.target.textContent);

  if(hitRn === clickedBubble){
    increaseScore();
    bubbleGenerate();
    getNewHit();
  }

})


bubbleGenerate();
runTimer();
getNewHit();
// increaseScore();
// increaseScore();
// increaseScore();
