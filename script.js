const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const bgSet = document.querySelector(".bgSet")

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    console.log(getRandomNumber())
    bgSet.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length + 2);
}

function getCompNumber() {

}

// btn.addEventListener(click(e) {

// })