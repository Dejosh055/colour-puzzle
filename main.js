 
const gameStatus = document.querySelector('#gameStatus');
const userScore = document.querySelector('#score');
const newGame    = document.querySelector('#newGameButton')
const box        = document.querySelector('#ColorBox')
 


// function Hint(){
//      gameStatus.textContent=`Guess the correct color! (Hint:${correctColor})`;
// }
function getRandomColor(){
    const colors =['red','blue', 'lightgreen', 'yellow', 'orange' ,'purple']
    return colors[Math.floor(Math.random()*colors.length)];
}

let correctColor = getRandomColor()
let score = 0;
function checkGuessColor( color,button){
    box.style.background = getRandomColor()
if(color === correctColor){
score += 5;
 gameStatus.textContent =`correct! the color was ${correctColor}.Generating a new color...`;
 gameStatus.style.color = 'lightgreen';
 button.classList.add("correct")
 correctColor = getRandomColor();

//  setTimeout(()=>{
//     correctColor = getRandomColor();
//     Hint()
// //    gameStatus.textContent = `New color generated! (Hint:${correctColor})`;
//    gameStatus.style.color = "black";
//  }, 1000)

}
else{
    score -= 5;
    gameStatus.textContent = 'wrong guess! Try agin';
    gameStatus.style.color = 'red'
    button.classList.add("wrong") 


}
setTimeout(()=>{
    button.classList.remove("correct","wrong")
}, 500)
userScore.textContent = `Score: ${score}`;

}
newGame.addEventListener('click',()=>{
    score = 0
    userScore.textContent = 'Score : 0'
    gameStatus.textContent = ''

  
})