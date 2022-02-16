// vier kleuren worden uigezocht in de array
const colors = ["blue","red","rgba(137, 98, 118, 0.8)","#330F09"];


const btn = document.getElementById("btn");
const color = document.querySelector(".span");

    //haalt 4 kleuren op uit colors 
btn.addEventListener("click",function(){
    const randomNumber = randomNumberGen();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors [randomNumber];
    color.textContent = colors [randomNumber];
});
//math random kiest een random nummer van maar, dit is nooit exact 0 en 1 
// daarom heb ik math floor er op aangezeloten want, math floor rond het af tot exact 0 en 1
// (* colors. length); houd in dat het nummers uit de array boven aan haalt en dit x de lengthe van de array is.
//in dit geval is dit een nummer van 0 tot 3 
function randomNumberGen() {
    return Math.floor(Math.random() * colors. length);
}
