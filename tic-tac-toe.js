document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const squares = board.getElementsByTagName('div');
    const status = document.getElementById('status');
    const newGameBtn = document.querySelector('.btn');

    let currentPlayer = 'X';
    let gameState = new Array(9).fill('');

    const INITIAL_STATUS_MESSAGE = "Move your mouse over a square and click to play an X or an O.";

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWinner() {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] &&
                gameState[a] === gameState[b] &&
                gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    function resetGame() {
        gameState = new Array(9).fill('');

        for (let square of squares) {
            square.textContent = '';
            square.classList.remove('X', 'O');
        }

        status.textContent = INITIAL_STATUS_MESSAGE;
        status.classList.remove('you-won');

        currentPlayer = 'X';
    }

    newGameBtn.addEventListener('click', resetGame);

    for (let i = 0; i < squares.length; i++) {
        const square = squares[i];
        square.classList.add('square');

        square.addEventListener('mouseover', function() {
            square.classList.add('hover');
        });

        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });

        square.addEventListener('click', function() {
            if (square.textContent === '' && !checkWinner()) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[i] = currentPlayer;

                const winner = checkWinner();
                if (winner) {
                    status.textContent = `Congratulations! ${winner} is the Winner!`;
                    status.classList.add('you-won');
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    }
});