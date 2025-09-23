let btn = document.queryselector("button");
let p = document.queryselector("p");
let h1 = document.queryselector("h1");
let h3 = document.queryselector("h3");


function changecolour() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
};

btn.addEventListener("click", changecolour);
p.addEventListener("click", changecolour);

h1.addEventListener("click", changecolour);

h3.addEventListener("click", changecolour);