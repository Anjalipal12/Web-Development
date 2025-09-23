let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// Start game on any key press
document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

// Button flash
function flash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}

// Check answer
function checkAnswer(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        // Game Over
        h2.innerText = "Game Over! Press any key to restart.";
        document.body.classList.add("game-over");
        setTimeout(() => {
            document.body.classList.remove("game-over");
        }, 200);
        resetGame();
    }
}

// Level Up logic
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.getElementById(randColor);

    gameSeq.push(randColor);
    flash(randBtn);
}

// Button click handler
function btnPress() {
    let btn = this;
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    flash(btn);
    checkAnswer(userSeq.length - 1);
}

// Add event listeners to all buttons
let allBtns = document.querySelectorAll(".btn");
allBtns.forEach((btn) => {
    btn.addEventListener("click", btnPress);
});

// Reset the game
function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
