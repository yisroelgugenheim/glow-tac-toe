const cells = document.querySelectorAll('.cell')
const stat = document.getElementById('win-status')
const startButton = document.getElementById('start-game')
const audio = new Audio('./assets/creativeminds.mp3')
const pause = document.getElementById('pause')
let currentPlayer = 'X'
let otherPlayer = ''
let gameStarted = false
let pauseMusic = false
audio.volume = 0.08
stat.innerText = 'have fun playing!'

function newGame() {
startButton.addEventListener('click', ()=> {
    gameStarted = true
    for(let cell of cells) {
        cell.innerText = ''
         stat.innerText = 'have fun playing!'
        stat.style.color = '#014359'
        currentPlayer = 'X'
        if(pauseMusic !== true) {
         audio.play()
        }
     }
  })
}
newGame()

pause.addEventListener('click', ()=> {
    if(audio.paused) {
        audio.play()
        pauseMusic = false
    } else {
      audio.pause()
      pauseMusic = true
    }
})

function clickHandle() {
for(let cell of cells){
    cell.addEventListener('click',()=> {
        if(gameStarted){
        if(wins() !== true){
        if(cell.innerText === ''){
    cell.innerText = currentPlayer;
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
        cell.style.color = '#0FFF90'
        stat.style.color = 'white'
        otherPlayer = 'X'
    }   else {
         currentPlayer = 'X'
        cell.style.color = 'white'
        stat.style.color = '#0FFF90'
        otherPlayer = 'O'
        }
        stat.innerText = `${currentPlayer}, it's your turn!`
     }
    }
    }
  })
}
} clickHandle()

function gameOver() {
for (let cell of cells) {
    cell.addEventListener('click', ()=> {
     if(wins() && currentPlayer === 'X') {
          stat.style.color = 'white'
          stat.innerText = `O wins! Good game!`
          currentPlayer = ''
        } else if(wins() && currentPlayer === 'O') {
            stat.style.color = '#0FFF90'
            stat.innerText = `'X' wins! Good game! `
            currentPlayer = ''
        } else if (wins !== true && draw() === true){
            stat.style.color = 'gold'
            stat.innerText = 'Its a draw! Good game!'}
    })
  }
}  gameOver()

function wins() {

    function XWins(){

        return (cells[0].innerText === 'X' && cells[1].innerText === 'X' && cells[2].innerText === 'X'
        || cells[3].innerText === 'X' && cells[4].innerText === 'X' && cells[5].innerText === 'X'
        || cells[6].innerText === 'X' && cells[7].innerText === 'X' && cells[8].innerText === 'X'
        || cells[0].innerText === 'X' && cells[3].innerText === 'X' && cells[6].innerText === 'X'
        || cells[1].innerText === 'X' && cells[4].innerText === 'X' && cells[7].innerText === 'X'
        || cells[2].innerText === 'X' && cells[5].innerText === 'X' && cells[8].innerText === 'X'
        || cells[0].innerText === 'X' && cells[4].innerText === 'X' && cells[8].innerText === 'X'
        || cells[2].innerText === 'X' && cells[4].innerText === 'X' && cells[6].innerText ==='X')
    }
    if(XWins()){
        return true
    }

    function OWins(){
    return (cells[0].innerText === 'O' && cells[1].innerText === 'O' && cells[2].innerText === 'O'
    || cells[3].innerText === 'O' && cells[4].innerText === 'O' && cells[5].innerText === 'O'
    || cells[6].innerText === 'O' && cells[7].innerText === 'O' && cells[8].innerText === 'O'
    || cells[0].innerText === 'O' && cells[3].innerText === 'O' && cells[6].innerText === 'O'
    || cells[1].innerText === 'O' && cells[4].innerText === 'O' && cells[7].innerText === 'O'
    || cells[2].innerText === 'O' && cells[5].innerText === 'O' && cells[8].innerText === 'O'
    || cells[0].innerText === 'O' && cells[4].innerText === 'O' && cells[8].innerText === 'O'
    || cells[2].innerText === 'O' && cells[4].innerText === 'O' && cells[6].innerText === 'O')
    }

    if (OWins()){return true}
 }

function draw() {
    for(let cell of cells) {
        if(cell.innerText === '') {
            return false
        }
    } return true
    }
draw()


