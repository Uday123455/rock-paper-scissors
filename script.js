// this is the js script file linked to rock paper scissors project in top course

// function to take the input from user

function user(){
    let uday = prompt("Enter either rock, paper or scissors");
    console.log(uday);
    return uday;
}

// function to return the rock paper scissors

function opp(){
    let n=Math.floor(Math.random()*3);
    if(n==0){
        console.log("rock");
        return "rock";
    }
    else if(n==1){
        console.log("paper");
        return "paper";
    }
    else if(n==2){
        console.log("scissors");
        return "scissors";
    }
}

// variables to manage the points and responses
let u_point=0;
let c_point=0;

function points (user,comp){

    if(user[0]==comp[0])console.log("tie");
    else if(user[0]=='r'){
        if(comp[0]=='p'){
            console.log("comp wins");
            c_point++;
        }
        else if(comp[0]=='s'){
            console.log("user wins");
            u_point++;
        }
    }
    else if(user[0]=='p'){
        if(comp[0]=='r'){
            console.log("user wins");
            u_point++;
        }
        else if(comp[0]=='s'){
            console.log("comp wins");
            c_point;
        }
    }
    else if(user[0]=='s'){
        if(comp[0]=='r'){
            console.log("comp wins");
            c_point++;
        }
        else if(comp[0]=='p'){
            console.log("user wins");
            u_point++;
        }
    }

    console.log(`user: ${u_point}`);
    console.log(`comp: ${c_point}`);
}

// code that runs all the function in the loop
for(let i=0;i<3;i++){
    points(user(),opp());
}


// wins decider

if(c_points=u_point)console.log("game is tie");

else if(c_points>u_point)console.log("comp wins");

else console.log("user wins");