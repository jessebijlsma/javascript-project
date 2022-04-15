let text = document.getElementById('text')
const btn = document.getElementById('click');
const node = document.createElement("div");
const objTo = document.getElementById('container');

btn.addEventListener('click', updateButton);

function updateButton() {
    let inputText = text.value
    inputText = inputText.toUpperCase()
        .split(" ")
        .filter(word => word.length >= 4)
        // .flatMap(i => [i,i,i,i,i])
        // .map(composting => composting.repeat(5))
        .map(i => [i, i, i, i, i].join("-"));
    console.log(inputText)

    // text.value.toUpperCase()
    // console.log(text.value.toUpperCase().split(" ").filter(word => word.length >= 4))

    // console.log(text.value.repeat(5));

}

function addDiv() {
    let divtest = document.createElement("div");
    divtest.innerHTML = "The feasting and revelry would last for weeks at a time. Great stone tables were set with such an abundance of rare delicacies that we would stuff ourselves until the exotic became mundane. When the lavish spread began to spoil, a ravenous gourmand gleefully proposed that we sample from the fetid pile of composting refuse ! The notion was dismissed as decidedly unhealthy. But days later, he was found cackling madly atop a heap of rancid comestibles, licking his fingers in delight.";
    objTo.appendChild(divtest);
}