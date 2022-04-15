const hex = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

const btn = document.getElementById("btn");
const color = document.querySelector(".span");

btn.addEventListener("click", function () {
    let hexcolor = "#"
    for (i = 0; i < 6; i++)
        hexcolor += hex[randomNumberGen()];

    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
    console.log(hexcolor)
});

btn.addEventListener("click", function () {
    let hexcolor = "#"
    for (i = 0; i < 6; i++)
        hexcolor += hex[randomNumberGen()];

    color.textContent = hexcolor;
    document.querySelector(".madness").style.color = hexcolor;
    console.log(hexcolor)
});

btn.addEventListener("click", function () {
    let hexcolor = "#"
    for (i = 0; i < 6; i++)
        hexcolor += hex[randomNumberGen()];

    color.textContent = hexcolor;
    document.querySelector(".span").style.color = hexcolor
    console.log(hexcolor)
});

btn.addEventListener("click", function () {
    let hexcolor = "#"
    for (i = 0; i < 6; i++)
        hexcolor += hex[randomNumberGen()];

    color.textContent = hexcolor;
    document.querySelector(".container").style.backgroundColor = hexcolor
    console.log(hexcolor)
});

btn.addEventListener("click", function () {
    let hexcolor = "#"
    for (i = 0; i < 6; i++)
        hexcolor += hex[randomNumberGen()];

    color.textContent = hexcolor;
    document.querySelector(".btn").style.backgroundColor = hexcolor
    console.log(hexcolor)
});

function randomNumberGen() {
    return Math.floor(Math.random() * hex.length);
}