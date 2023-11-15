var hide = document.querySelector(".hide") 
var nohide = document.querySelector(".nohide")
var btn = document.getElementById("btn1")
var span = document.getElementById("btn2")
var container = document.getElementById("container")
var h1 = document.getElementById("h1")

btn.addEventListener("click",change)
function change(){
nohide.classList.remove("visible")
hide.classList.add("visible")
container.classList.add("visiblehi")
   
}
span.addEventListener("click",model)
function model(){
  nohide.classList.add("visible")
  hide.classList.remove("visible")
  container.classList.remove("visiblehi")
}
