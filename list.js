const dino = document.getElementById("dino");
const cactus =  document.getElementById("cactus");
const score =  document.querySelector("#score");


let interval = null;
let playerScore = 0;

//function for score
let scoreCounter = ()=>{
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;

}
interval = setInterval(scoreCounter,200)


document.addEventListener("keydown", function (event){
     jump();
})

function jump() {
    if (dino.classList != "jump") {
     dino.classList.add("jump")
    }
    setTimeout(function (){
     dino.classList.remove("jump")
 }, 300)

}



let isAlive = setInterval (function (){

   let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
   let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
     if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >=140) {
             alert( score.innerText + "\n\nPlay again?");
        location.reload()
     }

} , 10)




