let images = ['https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    'https://img.freepik.com/premium-photo/landscape-high-icy-mountains-near-lake-digital-art-generative-ai_665346-37252.jpg',
    'https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg'
]
// const sliderImg = document.querySelector("#sliderImg")
// sliderImg.src = images[0]
const slides = document.querySelectorAll('.slide')
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
let index =0

nextBtn.addEventListener("click",()=>{
    index++;
    if (index===images.length) {
        index=0
    }
    slides.forEach(item => item.classList.remove("active"))
    slides[index].classList.add("active")
    if (index===2) {
    slides[index].classList.remove("de-l")
    slides[index-1].classList.add('de-l')
    slides[index-2].classList.add('de-r')
    
        
    }else if(index === 1){
    slides[index].classList.remove("de-r")
    slides[index-1].classList.add('de-l')
    slides[index-2].classList.add('de-r')
    }else if(index===0){
        slides[index].classList.remove("de-r")
        slides[index-1].classList.add('de-l')
        slides[index-2].classList.add('de-r')
    }
})
prevBtn.addEventListener("click",()=>{
    index--;
    if (index===-1) {
        index=images.length-1
    }
    slides.forEach(item => item.classList.remove("active"))
    slides[index].classList.add("active")
})

// setInterval(() => {
//     index++;
//     if (index===images.length) {
//         index=0
//     }
//     sliderImg.src =images[index]
// }, 1500);