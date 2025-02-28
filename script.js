gsap.from('.header',{
    opacity:0,
    y:-25,
    delay:0.5,
    duration:0.5
})
gsap.from('.header h2',{
    opacity:0,
    x:-120,
    delay:1,
    duration:0.5

})
gsap.from('.header .links a',{
    opacity:0,
    y:-20,
    delay:1.5,
    duration:0.5,
    stagger:0.6

})
gsap.from('.container .main-container .info h3, h1',{
    opacity:0,
    x:-20,
    delay:1.5,
    duration:0.5,
    stagger:0.6

})
gsap.from('.container .main-container .info div,p',{
    opacity:0,
    x:-20 ,
    delay:1.7,
    duration:0.5,
    stagger:0.6
    
})
gsap.from('.container .main-container img',{
    opacity:0,
    y:-20,
    delay:1.2,
    duration:0.5,
    stagger:0.6

})
gsap.from('.container .main-container2 .box h1',{
    opacity:0,
    y:-20,
    delay:1.2,
    duration:0.5,
    stagger:0.6

})

window.addEventListener('scroll',()=>{
    if(window.scrollY>=450){
        tl1.restart()
    }
})

var tl1=gsap.timeline()

tl1.from('.container .main-container2 h6',{
    opacity:0,
    x:100,
    scrollTrigger:{
        trigger:'.container .main-container2 h6',
        scroller:'body',
        start:'top 50%',
        end:'top 50%',
        scrub:5
    }
})


const texts = [
    "WEB DEVELOPER",
    "FRONTEND DEVELOPER"
    
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter

$(document).ready(function() {
    $(`.skill-per`).each(function() {
      var $this = $(this);
      var percentage = $this.attr('percentage');
      $this.css("width", percentage + "%");
      $({
        animatedValue: 0
      }).animate({
        animatedValue: percentage
      }, {
        duration: 1300,
        step: function() {
          $this.attr("percentage", Math.floor(this.animatedValue));
        }
      });
    });
  });
