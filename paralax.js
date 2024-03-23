let paralaxImgOne = document.querySelectorAll('.paralax-1')
let paralaxImgTwo = document.querySelectorAll('.paralax-2')
let paralaxImgThre = document.querySelectorAll('.paralax-3')
function paralaxMove(event){
    let x = event.offsetX
    let y = event.offsetY

    for(let i = 0; i < paralaxImgOne.length; i++){
        let oneElement = paralaxImgOne[i]
        oneElement.style.transform = `translate(${-x/80}px, ${-y/80}px)`
    }

    for(let j = 0 ; j < paralaxImgTwo.length; j++){
        let twoElement = paralaxImgTwo[j]
        twoElement.style.transform = `translate(${x/100}px, ${y/50}px)`
    }
    for(let k = 0 ; k < paralaxImgThre.length; k ++){
        let threElement = paralaxImgThre[k]
        threElement.style.transform = `translate(${x/10}px, ${-y/20}px)`
    }
}

window.addEventListener('mousemove' , paralaxMove)