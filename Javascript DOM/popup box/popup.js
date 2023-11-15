var btn = document.getElementById("btn")
var div = document.getElementById("container")
var span = document.getElementById("span")
var h1 = document.getElementById("h1")
btn.addEventListener("click",change)

function change(){
span.style.display ="block"
h1.innerHTML = "MODEL CONTENT"
h1.style.textAlign = "center"
div.style.backgroundColor = "skyblue"
div.style.opacity = 0.9
btn.style.display = "none"
}
span.addEventListener("click",nonvisible)
function nonvisible(){
div.style.background = "none"
span.style.display= "none"
h1.innerHTML = "MODEL PROJECT"
btn.style.display = "inline-block"
}