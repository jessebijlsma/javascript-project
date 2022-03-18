const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const buttons = document.querySelectorAll(".btn") 
const result = document.getElementById("res")
const container = document.getElementById("container")
let count = document.getElementById("count")


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        this.style.backgroundColor = "yellow"
    // buttons[i].style.backgroundColor = "yellow";

    // if (this.style.backgroundColor === 'yellow'){
    //     this.style.backgroundColor = 'red'
    //   } 
    console.log("hello world")
        
    })
};
console.log(buttons)


// container.textContent = numbers


// function randomNumberReset() {
//     return Math.floor(Math.random() *numbers. length);
    // console.log(randomNumberReset)
// }


// if (count === 100){
//     let reset = 0;
// }