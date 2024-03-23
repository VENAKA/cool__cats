let slider = document.querySelector('.slaider')

let slidersSlide = document.querySelectorAll('.slaider__slaid')

let cuerrentIndex = 0

let links = document.querySelectorAll('.slider-menu__nav_li')

function showTheslide(index){
    slider.style.transform = `translateX(-${index * 100}%)`
}
let colors = ["#f3a358e1", "#5c5a5a", "#424862b9", "#927852"]

function colorChange() {
    document.body.style.backgroundColor = colors[cuerrentIndex]
}

function askTheslide(slide){
    cuerrentIndex = slide
    showTheslide(cuerrentIndex)
    colorChange()
}
function backSlide(){
    cuerrentIndex = (cuerrentIndex - 1 + slidersSlide.length) % slidersSlide.length
    showTheslide(cuerrentIndex)
}
function nextSlide(){
    cuerrentIndex = (cuerrentIndex + 1) % slidersSlide.length
    showTheslide(cuerrentIndex)
}


for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click' , function(){
        askTheslide(i)
    })  
}




