

var button = document.getElementById("result")
var inputbox = document.getElementById("content")
var div = document.createElement("div")
var condiner  = document.querySelector(".hello")
var ul = document.createElement("ul")
div.append(ul)
var inputContent = null
var overbutton = document.createElement("button")
overbutton.innerHTML = "CLEAR ITEM"


button.addEventListener("click",myFunction)
function myFunction()
  {
      
      if(inputContent == null){
        if(inputbox.value.trim() == "")
      {
        console.log(inputContent)
          alert("PLESS ENTER VALID NAME")
      }

      else
      {
          condiner.append(div) 
        var list = document.createElement("li")      
        list.innerHTML ="<span>"+inputbox.value +"</span>"+"<button id ='change'  onclick='delte(this)'>DELETE</button>"+"<button id ='edit' onclick = 'edititem(this)'>EDIT</button>"
        ul.appendChild(list)
        ul.appendChild(overbutton)
        div.appendChild(ul)    
        list.classList.add("content")
        overbutton.classList.add("overbtn")
      }
      }
      else{
           update(inputContent)
      }

      inputbox.value = ""
       
  }

function delte(th){
th.parentElement.remove()

}

overbutton.addEventListener("click",clearItem)
function clearItem(){
   ul.innerHTML = ""
 }

function edititem(edit)
{
  inputContent =  edit.parentElement.firstElementChild
 inputbox.value = inputContent.innerHTML

}

function update(edit){

  edit.innerHTML = inputbox.value
  inputContent=null

}