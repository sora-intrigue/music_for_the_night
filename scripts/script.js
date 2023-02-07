let time = document.querySelector("#time");
let time_start = document.querySelector("#time-start")
let buttonStart = document.querySelector("#btnStart");
let buttonStop = document.querySelector("#btnStop")
let music = document.querySelector("#music");


let start = false;

buttonStart.addEventListener("click", () => {
    let userHours = document.querySelector("#h").textContent;
    let userMinutes = document.querySelector("#m").textContent;
    let userSeconds = document.querySelector("#s").textContent;
    start = true;

    
    time.style.display = "none";
    time_start.style.display = "block";
    buttonStop.style.display = "block";
    buttonStart.style.display = "none";
    music.play();


    
});

buttonStop.addEventListener("click", () => {
    time.style.display = "flex";
    time_start.style.display = "none";
    buttonStart.style.display = "block";
    buttonStop.style.display = "none";
    music.pause();
});
