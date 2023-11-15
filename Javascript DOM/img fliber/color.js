var img = document.createElement("img")
var arr = ["avathar 6.jpeg","avathar 1.jpeg","avathar 2.jpeg","avathar 3.jpeg","avathar 4.jpeg","avathar 7.jpeg"]
img.src =  "avathar 8.jpeg"
var btn = document.createElement("button")
btn.innerHTML = "NEXT"
var btn2 = document.createElement("button")
btn2.innerHTML = "PREVIEW"
document.body.append(btn2)
document.body.append(btn)
document.body.append(img)




btn.addEventListener("click",colorplus)
var c = 0
function colorplus(){  
    if(c > arr.length-1){
        c=0
        img.src=arr[c]
    }else{
        img.src = arr[c]
        c++
    }
    
}



btn2.addEventListener("click",colorminize)
function colorminize(){
    if(c < 0){
        c = arr.length-1
    img.src =arr[c]
    }
    else{
    img.src = arr[c]
    c--
    }
}

