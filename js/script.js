container = document.querySelector("#container")
dino = document.querySelector("#dino")
block = document.querySelector("#block")
road = document.querySelector("#road")
score = document.querySelector("#score")
gameOver = document.querySelector("#gameOver")
cloud = document.querySelector("#cloud")

let playerScore =0;
// function scoreCounter(){
//     playerScore++;
//     score.innerHTML = `Score <b>${playerScore}</b>`
// }

let scoreCounter = ()=>{
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`
}

window.addEventListener("keydown", (e)=>{
    // console.log(e)
    if(e.code==="Space"){
        // console.log("start the game")
        block.classList.add("blockActive")
        road.firstElementChild.style.animation = "roadAnimate 1s linear infinite"
        cloud.firstElementChild.style.animation = "cloudAnimate 1s linear infinite"

        setInterval(scoreCounter, 10)
    }
})

window.addEventListener("keydown", (e)=>{
    // console.log(e)
    if(e.key==="ArrowUp"){
        dino.classList.add("dinoActive")
        setTimeout(()=>{
            dino.classList.remove("dinoActive")
        }, 500)
    }

})

let result = setInterval(()=>{

    let dinoBottom = getComputedStyle(dino).getPropertyValue("bottom")
    let blockLeft = getComputedStyle(block).getPropertyValue("left")
    let blockBottom = getComputedStyle(block).getPropertyValue("bottom")

    // let dinoHeight = getComputedStyle(dino).getPropertyValue("height")
    let blockHeight = getComputedStyle(block).getPropertyValue("height")
    let dinoLeft = getComputedStyle(dino).getPropertyValue("left")

    let blockWidth = getComputedStyle(block).getPropertyValue("width")
    let dinoWidth = getComputedStyle(dino).getPropertyValue("width")

    
    let dinoRight = dinoLeft+dinoWidth
    let blockRight = blockLeft+blockWidth

    let verticalCollide = dinoBottom <= blockHeight + blockBottom;
    let leftBoundaryCond = blockLeft<=dinoRight
    let rightBoundaryCond =blockRight>=dinoLeft
    
    if(verticalCollide && leftBoundaryCond && rightBoundaryCond){
        console.log("oops")

    }


}, 10)