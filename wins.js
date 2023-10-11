cells = document.querySelectorAll('.cell')
function XWins(){
   return (cells[0].innerText === 'X' && cells[1].innerText === 'X' && cells[2].innerText === 'X'
|| cells[3].innerText === 'X' && cells[4].innerText === 'X' && cells[5].innerText === 'X'
|| cells[6].innerText === 'X' && cells[7].innerText === 'X' && cells[8].innerText === 'X'
|| cells[0].innerText === 'X' && cells[3].innerText === 'X' && cells[6].innerText === 'X'
|| cells[1].innerText === 'X' && cells[4].innerText === 'X' && cells[7].innerText === 'X'
|| cells[2].innerText === 'X' && cells[5].innerText === 'X' && cells[8].innerText === 'X'
|| cells[0].innerText === 'X' && cells[4].innerText === 'X' && cells[8].innerText === 'X'
|| cells[2].innerText === 'X' && cells[4].innerText === 'X' && cells[6].innerText === 'X')
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


