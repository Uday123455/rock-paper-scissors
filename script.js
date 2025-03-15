// this is the js script file linked to rock paper scissors project in top course

// on 15 mar 2025

// to take input from user

// function user(){
   
//     console.log(uday);
//     return uday;
// }
const brock=document.querySelector("#rock");
const bpaper=document.querySelector("#paper");
const bsci=document.querySelector("#sci");
const usCh=document.querySelector(".usCh");
const usco=document.querySelector(".usco");


// function to return the rock paper scissors

function opp(){
    let n=Math.floor(Math.random()*3);
    if(n==0){
        return "rock";
    }
    else if(n==1){

        return "paper";
    }
    else if(n==2){
        return "scissors";
    }
}

// variables to manage the points and responses
let u_point=0;
let c_point=0;
const u_score=document.querySelector(".u_score");
const btns=document.querySelector(".btns");
const c_score=document.querySelector(".c_score");
const win=document.querySelector(".win");
const r1=document.querySelector(".r1");

function points (user,comp){

    if(user[0]==comp[0]){
        console.log("tie");
        r1.textContent="tied";
    }
    else if(user[0]=='r'){
        if(comp[0]=='p'){
            console.log("comp wins");
            r1.textContent="you lose";
            c_point++;
        }
        else if(comp[0]=='s'){
            console.log("user wins");
            r1.textContent="you win";
            u_point++;
        }
    }
    else if(user[0]=='p'){
        if(comp[0]=='r'){
            console.log("user wins");
            r1.textContent="you win";
            u_point++;
        }
        else if(comp[0]=='s'){
            console.log("comp wins");
            r1.textContent="you lose";
            c_point++;
        }
    }
    else if(user[0]=='s'){
        if(comp[0]=='r'){
            console.log("comp wins");
            r1.textContent="you lose";
            c_point++;
        }
        else if(comp[0]=='p'){
            console.log("user wins");
            r1.textContent="you win";
            u_point++;
        }
    }

    console.log(`user: ${u_point}`);
    u_score.textContent=`score: ${u_point}`;
    console.log(`comp: ${c_point}`);
    c_score.textContent=`score: ${c_point}`;
    

    if(u_point==5||c_point==5){
        console.log("gameover");
        btns.removeChild(brock);
        btns.removeChild(bpaper);
        btns.removeChild(bsci);
        if(u_point==5){
            win.textContent="winner: user";
            r1.textContent="";
        }
        else{
            win.textContent="winner: computer"
            r1.textContent="";
        }
    }
}

// code that runs all the function in the loop
// for(let i=0;i<3;i++){
//     points(user(),opp());
// }



brock.addEventListener("click",()=>{
    console.log("rock");
    let oppi=opp();
    console.log(oppi);
    points("rock",oppi);
    usCh.textContent="you choosed:rock";
    usco.textContent=`comp choose: ${oppi}`;
});

bpaper.addEventListener("click",()=>{
    console.log("paper");
    let oppi=opp();
    console.log(oppi);
    points("paper",oppi);
    usCh.textContent="you choosed:paper";
    usco.textContent=`comp choose: ${oppi}`;
});

bsci.addEventListener("click",()=>{
    console.log("scissors");
    let oppi=opp();
    console.log(oppi);
    points("scissors",oppi);
    usCh.textContent="you choosed:scissors";
    usco.textContent=`comp choose: ${oppi}`;
});

// wins decider

// if(c_point==u_point){
//     console.log("game is tie");
// }
// else if(c_point>u_point){
//     console.log("comp wins");
// }
// else {
//     console.log("user wins");
// }





