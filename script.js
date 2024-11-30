//----------------------------------------------
let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purple", "green"];

let started = false;
let level = 0;
let highscore =0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        setTimeout(levelup, 1000);
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },300);
}


function levelup(){
    userSeq= [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(highscore < level){
        highscore = level;
    }
if(userSeq[idx] == gameSeq[idx]){
   if(userSeq.length == gameSeq.length){
    levelup();
   }
}else{
    h2.innerHTML = `Game over! your score is <b>${level}<b><br> and high score ${highscore} is press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){    
        document.querySelector("body").style.backgroundColor = "white";
    },200)
    reset();
}
}


function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
   checkAns(userSeq.length-1);
   
}

let allBtn = document.querySelectorAll(".btn");

for(btn  of allBtn) {
    btn.addEventListener("click",btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    user = [];
    level = 0;
}
