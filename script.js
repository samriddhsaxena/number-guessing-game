const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

let att = document.getElementById("att");


while (running){
    guess = window.prompt("Guess a number between 1 and 100");
    attempts++;
    if (guess == answer){
        if(attempts == 1){
            att.innerHTML = "You got it in " + attempts + " attempt!";
        }
        else{
            att.innerHTML = "You got it in " + attempts + " attempts!";
        }
        running = false;
    }
    else if (guess > answer){
        alert("Too high");
    }
    else if (guess < answer){
        alert("Too low");
    }
}