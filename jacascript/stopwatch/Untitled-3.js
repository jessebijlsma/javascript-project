//base 
let ms = 0;
let seconds = 0;
let mins = 0; 

//stopt interval op load page

let interval = null;

//tijd logica

function stopWatch () {

    ms++

    if (ms /100 === 1){
        ms = 0
        seconds ++;
    }
        if (seconds / 60 === 1) {
            seconds = 0
            mins++
        }

let minss = mins
let secss = seconds
let mss = ms

if (minss <10) {
    minss = "0" + minss 
    
}

if (secss <10) {
    secss = "0" + secss 
    
}
if (mss <10) {
    mss = "0" + mss 
    
}
//display (updated) tijd naar gebruiker
document.getElementById("timer").innerHTML = minss + ":" + secss + ":" + mss;
}

function startTimer () {
    if (interval !=null) {
        return;
    }
    interval = setInterval(stopWatch, 10)
    document.getElementById("startTimer").innerHTML = "start"
}

//functie voor timer stop

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

// functie voor reset

function resetTimer () {

    clearInterval(interval)
    interval = null;
    ms = 0;
    seconds = 0;
    mins = 0;
    document.getElementById("timer").innerHTML = "00:00:00"

}
