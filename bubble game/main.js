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
// const pauseBtn = document.querySelector("#pause")
const gameInfoMenu = document.querySelector(".game-info")

const gameOverMenu = document.querySelector(".gameover")

easyBtn.addEventListener("click", start)
mediumBtn.addEventListener("click", start)
hardBtn.addEventListener("click", start)


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
    let scores = [];
    if (inputUserName.value.length != 0) {
        userName.innerText = inputUserName.value;
        container.style.display = "block";
        gameModal.style.display = "none";
        time = t
        point = p
        max = m
        let gameInterval = setInterval(() => {
            const ballon = document.createElement("button")
            ballon.classList.add("ballon")
            gameContainer.append(ballon)
            let leftRandomNumber = Math.floor(Math.random() * 750)
            let topRandomNumber = Math.floor(Math.random() * 550)
            let bgRandomColor = Math.floor(Math.random() * 16777215).toString(16)
            ballon.style.left = `${leftRandomNumber}px`
            ballon.style.top = `${topRandomNumber}px`
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
                // alert("uduzduz")
                gameOverMenu.style.display = "flex"
                gameOverMenu.innerHTML = ` <p>Score: ${score}</p>
                <h1>You Lost</h1>
                <h3>If you want to play again pls refresh the page</h3>`
                gameContainer.style.display = "none"
                gameInfoMenu.style.display = "none"
                console.log(gameInfoMenu)
            }
        }, time)
    } else {
        alert("Enter your username")
    }
}

//game over demek olar duzeltdin biraz seliqeye salarsan
// localstorage  high score
//pause