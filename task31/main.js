const minute = document.getElementById('minutes')
const second = document.getElementById('seconds')
const ms = document.getElementById('ms')
const btns = document.querySelectorAll('button')
let timeMin = 0;
let timeSec = 0;
let timeMs = 0;

btns[0].addEventListener('click', () => {
    let timer = setInterval(() => {
        if (timeMs < 999) {
            timeMs++;
            ms.innerHTML = timeMs;
        } else {
            timeMs = 0;
            ms.innerHTML = timeMs;
            if (timeSec < 59) {
                timeSec++;
                second.innerHTML = timeSec;
            } else {
                timeSec = 0;
                second.innerHTML = timeSec;
                timeMin++;
                minute.innerHTML = timeMin;
            }
        }
    }, 1);
    btns[1].addEventListener("click",()=>{
    clearInterval(timer);
    })
    btns[2].addEventListener("click",()=>{
        clearInterval(timer)
        timeMin=0
        timeMs=0
        timeSec=0
        second.innerHTML = "00";
        minute.innerHTML = "00";
        ms.innerHTML = "00";
    })//reset niye islemir
})



// setInterval(() => {
//     if (timeMs < 1000) {
//         timeMs++;
//         ms.innerHTML = timeMs
//     } else {
//         timeMs = 0
//         ms.innerHTML = timeMs
//     }
// }, 1)
// setInterval(() => {
//     if (timeSec < 60) {
//         timeSec++;
//         second.innerHTML = timeSec
//     } else {
//         timeSec = 0
//         second.innerHTML = timeSec
//     }
// }, 1000)
// setInterval(() => {

//     timeMin++;
//     minute.innerHTML = timeMin

// }, 60000) bu niye islemir