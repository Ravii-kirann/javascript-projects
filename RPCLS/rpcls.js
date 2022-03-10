let images =document.querySelectorAll('.img1')
for(let x of images){
    x.addEventListener('click',function(){
        document.querySelector('.player').innerHTML = this.alt 
        this.style.transform = 'scale(1.3)'
        computer()
        let gamer =this.alt
         
        if(gamer == robot){
            document.querySelector('#score').innerHTML='DRAW !!!'
            document.querySelector('#score').style.bacground='white'
            document.querySelector('#score').style.opacity = 1
        }else if(gamer =='rock' && (robot =='scissors'||robot =='lizard')){
             document.querySelector('#score').innerHTML='YOU WON'
            document.querySelector('#score').style.bacground='green'
            document.querySelector('#score').style.opacity = 1
        }else if(gamer =='paper' && (robot =='robot'||robot =='spock')){
            document.querySelector('#score').innerHTML='YOU WON'
            document.querySelector('#score').style.bacground='green'
            document.querySelector('#score').style.opacity = 1
        }else if(gamer =='scissor' && (robot =='paper'||robot =='lizard')){
            document.querySelector('#score').innerHTML='YOU WON'
            document.querySelector('#score').style.bacground='green'
            document.querySelector('#score').style.opacity = 1
        }else if(gamer =='lizard' && (robot =='spock'||robot =='paper')){
            document.querySelector('#score').innerHTML='YOU WON'
            document.querySelector('#score').style.bacground='green'
            document.querySelector('#score').style.opacity = 1
        }else if(gamer =='spock' && (robot =='rock'||robot =='scissor')){
            document.querySelector('#score').innerHTML='YOU WON'
            document.querySelector('#score').style.bacground='green'
            document.querySelector('#score').style.opacity = 1
        }else{
            document.querySelector('#score').innerHTML='YOU LOOSE'
            document.querySelector('#score').style.bacground='red'
            document.querySelector('#score').style.opacity = 1

        }
        document.querySelector('.cover').style.display = 'block'
       

     })
}
let arr =['lizard','paper','rock','scissor','spock'];
let random = Math.trunc(Math.random()*5)
let secondplayer = document.querySelectorAll('.img')
let robot = arr[random]
function computer(){
    document.querySelector('.player2').innerHTML =robot
   
    for(let y of secondplayer){
        if (robot==y.getAttribute('alt')){
            y.style.transform = 'scale(1.3)'

        }
    }
}
