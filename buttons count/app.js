const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const buttons = document.querySelectorAll(".btn")
const result = document.getElementById("res")
const container = document.getElementById("container")
let count = document.getElementById("count")

// changes color onclick
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        if (buttons[i].classList.contains("btn")) {
            buttons[i].classList.remove("btn");
            buttons[i].classList.add("yellow");
        } else if (buttons[i].classList.contains("yellow")) {
            buttons[i].classList.remove("yellow");
            buttons[i].classList.add("red");

        }

    })

};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () { 

        let randomNumber = getRandomNumber()
        buttons[i].innerText = numbersArray[randomNumber]
        
        function totalCount() {
            
        }
        totalCount()
    })

};

function getRandomNumber() {

    return Math.floor(Math.random() * numbersArray.length);
}


//reset
count.addEventListener("click", function () {
    for (let i = 0; i < buttons.length; i++) {
        count.innerHTML = 0
        buttons[i].innerHTML = null
        buttons[i].classList.remove("red")
        buttons[i].classList.remove("yellow")
        buttons[i].classList.add("btn")
    }
})


function e() {
    buttons.forEach((button) => {
        // button.style.fontSize = "50px"
        console.log();
    })
}
e();