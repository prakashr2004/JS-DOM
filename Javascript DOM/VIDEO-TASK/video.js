var video = document.getElementById("video")

var pause = document.getElementById("pauseBtn")
var start = document.getElementById("start")
pause.addEventListener("click",pauseBTN)

function pauseBTN(){
    pause.classList.add("pause")
    start.classList.remove("start")
    video.pause()
}

start.addEventListener("click", videoPlay)

function videoPlay(){
    pause.classList.remove("pause")
    start.classList.add("start")
    video.play()
}