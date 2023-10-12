const cells = document.querySelectorAll('.cell')
const stat = document.getElementById('win-status')
let currentPlayer = 'X'

// handle clicks
for(let cell of cells){
    cell.addEventListener('click',()=> {
    if(cell.innerText === ''){
    cell.innerText = currentPlayer;
    if (currentPlayer === 'X') { currentPlayer = 'O'}
    else { currentPlayer = 'X'}}
// handle wins
    if(XWins()) {
      stat.innerText = 'X wins! Good game! Restart to play again.'
      currentPlayer = ''
    } else if(OWins()) {
        stat.innerText = 'O wins!! Good game! Restart to play again.'
        currentPlayer = ''
      }
   })
}




function restartGame() {
let button = document.querySelector('button')
check = button.addEventListener('click', ()=> {

for(let cell of cells) {
    cell.innerText = ''
    stat.innerText = ''
}   XWins() = false
    OWins() = false
})
} restartGame()

















// for(let cell of cells){board.push(cell)}
// let board = [];
// const wins = [
//     [0,1,2], [3,4,5], [6,7,8],
//     [0,3,6], [1,4,7], [2,5,8],
//     [0,4,8], [2,4,6]];



// function tester(){
//     if(currentPlayer === 'X'){
//         return true
//     } else {return false}
// }
// console.log(tester())

// if(tester() === true) {
//     console.log('HI!')
// }

// let i = 0;
// while(i < cells.length){board.push((cells[i].innerText))
// i++}
