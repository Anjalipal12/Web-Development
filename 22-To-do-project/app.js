//access button
let btn = document.querySelector("button");
//select the unorder list
let ul = document.querySelector("ul");
//access the input
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li"); //create a new li
    //add in the list
    item.innerText = inp.value;  //sets its text from input

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn)
    ul.appendChild(item);        // Add <li> to <ul>
    inp.value ="";               // clear the input box
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         console.log("element deleted ");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();

//     });
// }
ul.addEventListener("click", function (event){
    if(event.target.nodename == "BUTTON"){
        let listitem = event.target.parentElement;
        console.log("listitem");
        console.log("delete");
    }
});