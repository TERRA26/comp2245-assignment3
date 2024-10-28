document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const squares = board.getElementsByTagName('div');

    let currentPlayer = 'X';
    let gameState = new Array(9).fill('');

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
            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[i] = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    }

});