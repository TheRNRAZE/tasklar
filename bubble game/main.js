const gameModal = document.querySelector(".game-modal")
const inputUserName = document.querySelector("#userName")
const container = document.querySelector(".container")
const gameContainer = document.querySelector(".game-container")
const ballon = document.querySelector(".ballon");
const userName = document.querySelector(".username");
const scoreElem = document.querySelector(".score");
const easyBtn = document.querySelector('#easy')
const mediumBtn = document.querySelector('#medium')
const hardBtn = document.querySelector('#hard')
let max = 0
let time = 0;
let point = 0
let score = 0
let totalNum = 0;
const audio = document.querySelector("#audio")
const highScoreElem = document.querySelector(".high-score")
const totalNumElem = document.querySelector(".total")
let gameInterval;
const stopBtn = document.querySelector("#stop")
const startBtn = document.querySelector("#start")
const resetBtn = document.querySelector("#reset")
const gameInfoMenu = document.querySelector(".game-info")
const usersList = document.querySelector(".users")


let users = [];
let localData = JSON.parse(localStorage.getItem("usersBubbleGame"));

if (localData) {
    users = localData;
} else {
    users = [];
}

const gameOverMenu = document.querySelector(".gameover")

easyBtn.addEventListener("click", start)
mediumBtn.addEventListener("click", start)
hardBtn.addEventListener("click", start)
startBtn.addEventListener("click", () => {
    startGame(time, point, max)
    const overlay = document.querySelector(".overlay");
    overlay?.remove();
    startBtn.disabled = true;
    resetBtn.disabled = false;
    stopBtn.disabled = false;
})
stopBtn.addEventListener("click", () => {
    clearInterval(gameInterval)
    const overlay = document.createElement("div");
    overlay.classList.add("overlay")
    gameContainer.append(overlay)
    startBtn.disabled = false;
    resetBtn.disabled = false;
    stopBtn.disabled = true;
})
resetBtn.addEventListener("click", () => {
    clearInterval(gameInterval)
    saveScore()
    gameContainer.innerHTML = "";
    score = 0

    scoreElem.innerHTML = score;
    startBtn.disabled = false;
    resetBtn.disabled = true;
    stopBtn.disabled = true;
})


function start(e) {
    if (e.target.id === easyBtn.id) {
        startGame(1500, 1, 50)
    } else if (this === mediumBtn) {
        startGame(1000, 2, 30)

    } else {
        startGame(700, 3, 25)
    }
}



function startGame(t, p, m) {
    if (inputUserName.value.length != 0) {
        userName.innerText = inputUserName.value;
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        gameModal.style.display = "none";
        time = t
        point = p
        max = m
        gameInterval = setInterval(() => {
            const ballon = document.createElement("button")
            ballon.classList.add("ballon")
            gameContainer.append(ballon)
            let leftRandomNumber = Math.floor(Math.random() * 90)
            let topRandomNumber = Math.floor(Math.random() * 90)
            let bgRandomColor = Math.floor(Math.random() * 16777215).toString(16)
            ballon.style.left = `${leftRandomNumber}%`
            ballon.style.top = `${topRandomNumber}%`
            ballon.style.backgroundColor = `#${bgRandomColor}`

            ballon.addEventListener("click", () => {
                audio.play()
                ballon.remove()
                score += point
                scoreElem.innerText = score
            })
            const ballons = document.querySelectorAll(".ballon")
            totalNum = ballons.length
            totalNumElem.innerText = totalNum;
            if (totalNum === max) {
                clearInterval(gameInterval);
                saveScore()
                // alert("uduzduz")
                gameOverMenu.style.display = "flex"
                gameOverMenu.innerHTML = ` <p>Score: ${score}</p>
                <h1>You Lost</h1>
<button onclick="playAgain()">Play Again</button>
                `
                gameContainer.style.display = "none"
                gameInfoMenu.style.display = "none"

            }
        }, time)
        renderUsers()

    } else {
        alert("Enter your username")
    }
}

function saveScore() {

    users.push({
        userName: inputUserName.value,
        score: score
    })
    users.sort((a, b) => {
        return b.score - a.score;
    })
    localStorage.setItem("usersBubbleGame", JSON.stringify(users))
}

function renderUsers() {
    usersList.innerHTML = ""
    let screenUsers = users.slice(0, 5)
    screenUsers.forEach(({ userName, score }) => {
        usersList.innerHTML += `
        <li>
        <span>${userName}</span>
        <span>${score}</span>
        </li>`
    })

}
function playAgain() {
    gameOverMenu.style.display = "none";
    gameContainer.style.display = "block"
    gameInfoMenu.style.display = "block"
    gameContainer.innerHTML=""
    score = 0
    scoreElem.innerHTML=score
    startGame(time, point, max)


}


