


let red = document.querySelector('.circle1')
let yellow = document.querySelector('.circle2')
let green = document.querySelector('.circle3')
let timer = document.querySelector('.circle4')
let l1 =10
let l2 = 5
let l3 = 10
let b = 0
let sec = 11


setInterval(start,1000)


function start(){
  sec--
  
    if(sec==10 || sec==-1 && red.className != 'circle1 red' && yellow.className != 'circle2 yellow' || green.className == 'circle2 green' ){
      sec=10
      red.classList.add('red')
      green.classList.remove('green')

    }
 
  else if(sec==-1 &&  red.className == 'circle1 red' ){
      sec = 5
      red.classList.remove('red')
      yellow.classList.add('yellow')
  }else if(sec==-1 && yellow.className == 'circle2 yellow'  ){
    sec = 10
     yellow.classList.remove('yellow')
     green.classList.add('green')
  }

  timer.innerHTML = sec

}