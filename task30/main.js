const btns = document.querySelectorAll("button")

btns.forEach((btn, i) => btn.addEventListener("click", () => {
    btns.forEach(item => item.style.background = "white")
    if (i === 0) {
        setInterval(()=>{
btn.style.background = "red"
        },1000)
        
    } else if (i === 1) {
        btn.style.background = "yellow"
    } else {
        btn.style.background = "green"
    }
}))

