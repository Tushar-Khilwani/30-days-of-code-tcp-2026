const cells = document.querySelectorAll('.cell')
const statusText = document.getElementById('status')
const restartBtn = document.getElementById('restart')
const overlay = document.getElementById('overlay')
const resultText = document.getElementById('resultText')
const resultIcon = document.getElementById('resultIcon')

let currentPlayer = 'X'
let board = Array(9).fill(null)
let gameActive = true

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleMove(cell, index))
})

restartBtn.addEventListener('click', resetGame)

function handleMove(cell, index) {
    if (!gameActive || board[index]) return

    board[index] = currentPlayer
    cell.textContent = currentPlayer
    cell.classList.add(currentPlayer.toLowerCase())

    if (checkWin()) {
        endGame(`${currentPlayer} Wins`, currentPlayer)
        return
    }

    if (board.every(Boolean)) {
        endGame('Draw', 'draw')
        return
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    statusText.textContent = `Player ${currentPlayer} Turn`
}

function checkWin() {
    return winPatterns.some(pattern =>
        pattern.every(i => board[i] === currentPlayer)
    )
}

function endGame(message, type) {
    gameActive = false
    statusText.textContent = message
    overlay.classList.add('show')
    resultText.textContent = message

    if (type === 'X') {
        resultIcon.setAttribute('d', 'M6 6 L18 18 M18 6 L6 18')
    } else if (type === 'O') {
        resultIcon.setAttribute('d', 'M12 4 A8 8 0 1 0 12 20 A8 8 0 1 0 12 4')
    } else {
        resultIcon.setAttribute('d', 'M4 12 H20')
    }
}

function resetGame() {
    board.fill(null)
    cells.forEach(cell => {
        cell.textContent = ''
        cell.className = 'cell'
    })
    overlay.classList.remove('show')
    currentPlayer = 'X'
    gameActive = true
    statusText.textContent = 'Player X Turn'
}
