const cells = document.querySelectorAll('.cell')
const stat = document.getElementById('win-status')
let currentPlayer = 'X'
let otherPlayer = ''

// handle clicks
function clickHandle() {
for(let cell of cells){
    cell.addEventListener('click',()=> {
        if(wins() !== true){
    if(cell.innerText === ''){
    cell.innerText = currentPlayer;
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
        // otherPlayer = 'X'
 }
    else { currentPlayer = 'X'
        // otherPlayer = 'O'
        }
     }
    }
  })

 }
} clickHandle()

// handle wins and draw
function gameOver() {
for (let cell of cells) {
    cell.addEventListener('click', ()=> {
     if(wins() && currentPlayer === 'X') {
          stat.innerText = `'O' wins! Good game! Restart to play again.`
          currentPlayer = ''
        } else if(wins() && currentPlayer === 'O') {stat.innerText = `'X' wins! Good game! Restart to play again.`
        currentPlayer = ''
        } else if (wins !== true && draw() === true){stat.innerText = 'Its a draw! Restart to play again.'}
    })
  }
}  gameOver()

// restart game
function restartGame() {
let button = document.querySelector('button')
check = button.addEventListener('click', ()=> {
for(let cell of cells) {
    cell.innerText = ''
    stat.innerText = ''
    currentPlayer = 'X'
}
})

} restartGame()

// function checks for winner
function wins() {
function XWins(){
    return (cells[0].innerText === 'X' && cells[1].innerText === 'X' && cells[2].innerText === 'X'
 || cells[3].innerText === 'X' && cells[4].innerText === 'X' && cells[5].innerText === 'X'
 || cells[6].innerText === 'X' && cells[7].innerText === 'X' && cells[8].innerText === 'X'
 || cells[0].innerText === 'X' && cells[3].innerText === 'X' && cells[6].innerText === 'X'
 || cells[1].innerText === 'X' && cells[4].innerText === 'X' && cells[7].innerText === 'X'
 || cells[2].innerText === 'X' && cells[5].innerText === 'X' && cells[8].innerText === 'X'
 || cells[0].innerText === 'X' && cells[4].innerText === 'X' && cells[8].innerText === 'X'
 || cells[2].innerText === 'X' && cells[4].innerText === 'X' && cells[6].innerText === 'X')
 } if(XWins()){return true}
function OWins(){
 return (cells[0].innerText === 'O' && cells[1].innerText === 'O' && cells[2].innerText === 'O'
 || cells[3].innerText === 'O' && cells[4].innerText === 'O' && cells[5].innerText === 'O'
 || cells[6].innerText === 'O' && cells[7].innerText === 'O' && cells[8].innerText === 'O'
 || cells[0].innerText === 'O' && cells[3].innerText === 'O' && cells[6].innerText === 'O'
 || cells[1].innerText === 'O' && cells[4].innerText === 'O' && cells[7].innerText === 'O'
 || cells[2].innerText === 'O' && cells[5].innerText === 'O' && cells[8].innerText === 'O'
 || cells[0].innerText === 'O' && cells[4].innerText === 'O' && cells[8].innerText === 'O'
 || cells[2].innerText === 'O' && cells[4].innerText === 'O' && cells[6].innerText === 'O')
 } if (OWins()){return true}
 }

 // checks for a draw
function draw() {
    for(let cell of cells) {
        if(cell.innerText === '') {
            return false
        }
    } return true
    } draw()





// for referrence only:
// const wins = [
//     [0,1,2], [3,4,5], [6,7,8],
//     [0,3,6], [1,4,7], [2,5,8],
//     [0,4,8], [2,4,6]];



