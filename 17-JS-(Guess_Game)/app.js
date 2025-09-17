const max = prompt("Enter the max number"); // user enter a max number
const random = Math.floor(Math.random() * max)+1;  // Random number between 1 and max
let guess = prompt("guess the number");
while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }
    if(guess == random){
        console.log("You are right ! Congrats !! random number was ", random);
        break;
    }else if(guess < random){
        guess = prompt("Hint: Your guess was too small Please try again");
    }else {
        guess = prompt("Hint: Your guess was too large . Please try again.")
    }
}