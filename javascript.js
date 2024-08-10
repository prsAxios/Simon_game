let gameSeq = [];
let userSeq = [];

let btns=["red","yellow","green","blue"];

let para=document.querySelector('p');

let started = false;
let level=0;

document.addEventListener('keypress',function(){
   if(started==false){
      console.log("Game has Started");
       started=true;
       levelUp();

      }

});


function gameFlash(btn){
  btn.classList.add("flash"); 
  setTimeout(function(){
   btn.classList.remove("flash");
  },250);
}

function userFlash(btn){
   btn.classList.add("userFlash"); 
   setTimeout(function(){
    btn.classList.remove("userFlash");
   },250);
 }


function levelUp(){
   userSeq=[];
   level++;
   para.innerText=`Level ${level}`;

   let randindx =Math.floor(Math.random()*3);
   let randomColor =btns[randindx];
   let randBtn =document.querySelector(`.${randomColor}`);
   gameSeq.push(randomColor); 
   console.log(gameSeq);
   gameFlash(randBtn);
}



function checkAns(indx){

   // console.log(`current Level = ${level}`);
   if(userSeq[indx] === gameSeq[indx]){
      if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
      }
   }else{
      let currScore=level;
      let newScore=level;
      if (newScore > currScore){
         newScore=level;
      }
      para.innerHTML=`Game Over!<br> <b> Your Score is ${level}</b> <br>Press Any Key to Start<br>
      Highest Score until Now ${newScore}`;
      document.querySelector('body').style.backgroundColor="red";
      setTimeout(function(){
         document.querySelector('body').style.backgroundColor="white";
      },150)
      reset();
   }
}

  
function btnPress(){
let btn = this;
userFlash(btn);
userColor =btn.getAttribute("id");
userSeq.push(userColor);
checkAns(userSeq.length-1);
}



let allBtns =document.querySelectorAll('.btn');
for(btn of allBtns){
  btn.addEventListener('click',btnPress)
}

let reset=()=>{
   started=false;
   gameSeq=[];
   userSeq=[];
   level=0;
}



