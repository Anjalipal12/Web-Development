const favourite = "avatar";
let guess = prompt("my favourite movie");
while(guess != favourite) {
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    guess = prompt("wrong guess . please try again");
}

if(guess == favourite){
    console.log("Congrats!!");
}