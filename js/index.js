// Your code goes here
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function dryEvent(element,event,styleToChange,styleIs){
    let item = document.querySelectorAll(element);
    item.forEach(x =>{x.addEventListener(event, function() {
         x.style[styleToChange] = styleIs;   
    })})
}

dryEvent('.nav a','mouseover','color','red')
dryEvent('p','dblclick','color','purple')
dryEvent('img','mousemove','opacity','0.5')
dryEvent('html','auxclick','backgroundColor',getRandomColor())
dryEvent('html p','mouseup','opacity','1')
dryEvent('html p','mousedown','opacity','0')
dryEvent('html p','copy','color','red')

let signUp = document.querySelectorAll('img')
signUp.forEach( x =>{
    x.addEventListener(
        'click' ,
        () => {
            x.style.width ='115%'
            x.style.height = '115%'
          }
    )
})

let x = document.querySelectorAll('html')
x.forEach( y => {
    y.addEventListener(
        'keydown',
        () => {
            y.style.color = 'white'
            y.style.background = 'black'
        }
    )
})

let xa = document.querySelectorAll('html')
xa.forEach( ya => {
    ya.addEventListener(
        'keyup',
        () => {
            ya.style.color = 'black'
            ya.style.background = 'white'
        }
    )
})

let divSel = document.querySelectorAll('.destination')
    divSel.forEach(db => {
        db.addEventListener(
            'click',
            () =>{
            db.style.backgroundColor ='black'
        }
        )
    })

let noPropogate =document.querySelectorAll('.btn')
    noPropogate.forEach(dk => {
        dk.addEventListener(
            'click',
            () =>{
            dk.style.backgroundColor ='black'
            event.stopPropagation()
        }
        )
    })

let xm = document.querySelectorAll('.nav-link')
xm.forEach( sd => {
    sd.addEventListener(
        'click',
        () => {
           event.preventDefault()
        }
    )
})



