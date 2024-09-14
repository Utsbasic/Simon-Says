let started= false;
let level=0;
let color= ["red","green","yellow", "blue"];
let h3 = document.querySelector("h3");
let userseq=[];
let gameseq=[];

document.addEventListener("keypress",function(){

  if(started==false){
    started=true;
    levelup();
    document.querySelector("body").style.backgroundColor="white";
         
}

}) ;
function flash(btn){
    btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
        
    },250);
}

function levelup(){
    userseq=[];
   level++;
   h3.innerText=`Level ${level}`;
   let randidx= Math.floor(Math.random()*3);
   let randclr= color[randidx];
   let randbtn= document.querySelector(`.${randclr}`);
   flash(randbtn);
   gameseq.push(randclr);
}
function reset(){
    h3.innerHTML=`Game Over,Your Score was <b>${level}</b> Press any key to start the game`;
    
   document.querySelector("body").style.backgroundColor="grey";
        level=0;
        started=false;
        gameseq=[];
        userseq=[];
}
function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
      setTimeout(levelup,1000);  }
    }else{
        reset();
        
    }
}
function btnpress(){
    let btn = this;
    flash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}

let btns= document.querySelectorAll(".btn");
for(let btn of btns){
    btn.addEventListener("click",btnpress);
}
