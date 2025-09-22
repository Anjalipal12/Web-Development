let btn = document.querySelectorAll("button");

for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function(){
        console.log("You enter a button");
    }
    console.log(btn);
}

function sayHello(){
    alert("Hello!");
}