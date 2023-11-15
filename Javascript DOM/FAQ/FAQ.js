var open1 = document.querySelector(".open1")
var open2 = document.querySelector(".open2")
var open3 = document.querySelector(".open3")
var onecontent = document.querySelector(".onecontent")
var twocontent = document.querySelector(".twocontent")
var threecontent = document.querySelector(".threecontent")



open1.addEventListener("click",view)
function view(){
    if(open1.innerHTML == "+"){
    onecontent.classList.remove("notview")
    threecontent.classList.add("notview")
    twocontent.classList.add("notview")
    open1.innerHTML = "-"
    open2.innerHTML = "+"
    open3.innerHTML = "+"
    }
    else
    {
    onecontent.classList.add("notview")
    open1.innerHTML = "+"

    }
}

open2.addEventListener("click",view2)
function view2(){
    if(open2.innerHTML == "+"){
    onecontent.classList.add("notview")
    threecontent.classList.add("notview")
    twocontent.classList.remove("notview")
    open2.innerHTML = "-"
    open1.innerHTML = "+"
    open3.innerHTML = "+"
    }
    else
    {      
        twocontent.classList.add("notview")
        open2.innerHTML = "+"        
    }
}

open3.addEventListener("click",view3)
function view3(){
    if(open3.innerHTML == "+"){
    onecontent.classList.add("notview")
    threecontent.classList.remove("notview")
    twocontent.classList.add("notview")
    open3.innerHTML = "-"
    open1.innerHTML = "+"
    open2.innerHTML = "+"
    }
    else
    {   
        threecontent.classList.add("notview")
        open3.innerHTML = "+"        
    }
}

