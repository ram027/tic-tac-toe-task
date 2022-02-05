const playerX = document.getElementById('player-x');
const playerO = document.getElementById('player-y');
const allCells = Array.from(document.getElementsByClassName('cell'));
const allCellsValues = [];

//  PlayerTurnFlag true for player X and false for player O
let playerTurnFLag = true;
let tie = false;

const setCellContent = (cell,playerSymbol,addClass,removeClass,toggleFlagForAddAndRemoveClass=true) => {
    cell.innerText = playerSymbol;
    playerTurnFLag = !playerTurnFLag;
    cell.classList.add('disable-cell-click');
    if (toggleFlagForAddAndRemoveClass) {
        playerO.classList.add(addClass);
        playerX.classList.remove(removeClass);
    } else {
        playerX.classList.add(addClass);
        playerO.classList.remove(removeClass);
    }
    
}

const handleCellClick = (e) => {
    const cell = document.getElementById(e);
    if (playerTurnFLag) {
        setCellContent(cell, 'X', 'blue-bg','red-bg', );
    } else {
        setCellContent(cell, 'O', 'red-bg', 'blue-bg', false);
    };
};

const handleReset = () => { window.location.reload(); };

const checkXWinAndYWin = (playerSymbol) => {
    if(allCellsValues[0]===playerSymbol && allCellsValues[1]===playerSymbol && allCellsValues[2]===playerSymbol)     {return true;}
    else if(allCellsValues[3]===playerSymbol && allCellsValues[4]===playerSymbol && allCellsValues[5]===playerSymbol){return true;}
    else if(allCellsValues[6]===playerSymbol && allCellsValues[7]===playerSymbol && allCellsValues[8]===playerSymbol){return true;}
    else if(allCellsValues[0]===playerSymbol && allCellsValues[3]===playerSymbol && allCellsValues[6]===playerSymbol){return true;}
    else if(allCellsValues[1]===playerSymbol && allCellsValues[4]===playerSymbol && allCellsValues[7]===playerSymbol){return true;}
    else if(allCellsValues[2]===playerSymbol && allCellsValues[5]===playerSymbol && allCellsValues[8]===playerSymbol){return true;}
    else if(allCellsValues[0]===playerSymbol && allCellsValues[4]===playerSymbol && allCellsValues[8]===playerSymbol){return true;}
    else if (allCellsValues[2] === playerSymbol && allCellsValues[4] === playerSymbol && allCellsValues[6] === playerSymbol) { return true; }
    return false;
}

const disableALlDiv = () => { allCells.map(cell => cell.classList.add('disable-cell-click')) };

const checkWin = () => {
    allCells.map(cell => allCellsValues[cell.id] = cell.innerText);
    const result = document.getElementById('result');
    if (checkXWinAndYWin('X')) {
        result.innerText = 'Player X win';
        disableALlDiv();
    } else if (checkXWinAndYWin('O')) {
        result.innerText = 'Player O win';
        disableALlDiv();
    }else {
        tie = allCellsValues.every(cell => cell !== '');
        if (tie) {
            result.innerText = 'Tie';
            disableALlDiv();
        }
     }
   
};
