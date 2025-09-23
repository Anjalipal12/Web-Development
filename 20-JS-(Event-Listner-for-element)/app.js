//paragraph ko access karna ki koshish kar rahe ha
let p = document.querySelector("p");
p.addEventlistner("click" , function() {
    console.log("paagraph was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function(){
    console.log("mouse inside div/box");
});