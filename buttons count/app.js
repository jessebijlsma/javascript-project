const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const buttons = document.querySelectorAll(".btn")
const result = document.getElementById("res")
const container = document.getElementById("container")
let count = document.getElementById("count")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        if (buttons[i].classList.contains("btn")) {
            buttons[i].classList.remove("btn");
            buttons[i].classList.add("yellow");
        }
        else if (buttons[i].classList.contains("yellow")) {
            buttons[i].classList.remove("yellow");
            buttons[i].classList.add("red");
        }
    })
};


// container.textContent = numbers


// function randomNumberReset() {
//     return Math.floor(Math.random() *numbers. length);
// console.log(randomNumberReset)
// }


// if (count === 100){
//     let reset = 0;
// }