addEventListener("load", () => {
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d");
    console.log("hello world")

    // canvas.height = innerHeight
    // canvas.width = innerWidth

    // ctx.strokeStyle = "red";
    // ctx.strokeRect(50,50,200,200,);
    // ctx.strokeStyle = "blue";
    // ctx.strokeRect(150,150,300,300,);
    // ctx.strokeStyle = "purple";
    // ctx.strokeRect(250,250,400,400,);
    // ctx.strokeStyle = "green";
    // ctx.strokeRect(350,350,500,500,);

    // ctx.beginPath()
    // ctx.strokeStyle = "black";
    // ctx.lineWidth = 6
    // ctx.moveTo(0,0)
    // ctx.lineTo(250,300)
    // ctx.lineTo(500,400)
    // ctx.lineTo(400,700)
    // ctx.lineTo(250,300)
    // ctx.lineTo(800,300)
    // ctx.lineTo(400,700)
    // ctx.lineTo(900,700)
    // ctx.lineTo(800,300)
    // ctx.lineTo(500,400)
    // ctx.lineTo(900,700)
    // ctx.stroke()

    let painting = false

    function startposition (){
        painting = true
    }

    function finishedposition (){
        painting = false
        ctx.beginPath()
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 20
        ctx.lineCap = "round"
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY);
    
    }
    canvas.addEventListener("mousedown",startposition)
    canvas.addEventListener("mouseup",finishedposition)
    canvas.addEventListener("mousemove",draw)
    
})

addEventListener("resize",() => {
    canvas.height = innerHeight
    canvas.width = innerWidth
})

