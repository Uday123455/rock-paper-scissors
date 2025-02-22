console.log("hello world");

// function to take the input from user

function user(){
    let uday = prompt("Enter either rock, paper or scissors");
    console.log(uday);
}

// function to return the rock paper scissors

function opp(){
    let n=Math.floor(Math.random()*3);
    if(n===0){
        console.log("rock");
    }
    else if(n===1){
        console.log("paper");
    }
    else{
        console.log("scissors");
    }
}
user();
opp();