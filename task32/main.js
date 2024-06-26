let images = [
    'https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg',
    'https://img.freepik.com/free-photo/pine-trees-rock-formation-near-mountains-gray-clouds_395237-198.jpg',
    'https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg',

]
const sliderELem = document.querySelector(".slider")
const sliders = document.querySelectorAll(".slide")
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
let index = 0
nextBtn.addEventListener("click", () => {
    index++
    if (index + 1 === sliders.length) {
        index = 0
    }
    console.log("index", index);
    sliders.forEach(item => {
        item.classList.remove("active")
    })
    sliders[index].classList.add("active")
    let arr = [sliders[index - 1], sliders[index], sliders[index + 1]]
    console.log(arr);
    sliderELem.innerHTML = "";
    arr.forEach(item => sliderELem.append(item))
})


prevBtn.addEventListener("click", () => {
    index--
    if (index === -1) {
        index = sliders.length - 1
    }
    sliders.forEach(item => item.classList.remove("active"))
    sliders[index].classList.add("active")
})


// setInterval(() => {
//     index++
//     if (index === images.length) {
//         index = 0
//     }
//     sliderIMg.src = images[index]
// }, 1500);