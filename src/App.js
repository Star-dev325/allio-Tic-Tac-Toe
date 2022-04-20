import React, { useState } from 'react';

import SquareRow, {
  Backinterface,
  Board,
  StatePad,
  Square,
  ResetButton,
  ButtonContainer
} from './Styles';

const gameOverState = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
  [2, 5, 8]
];

function App() {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [next, setNext] = useState('X');
  const [winner, setWinner] = useState(null);

  const calculatingWinner = (quares) => {
    gameOverState.forEach((gameOver) => {
      if (quares[gameOver[0]] === quares[gameOver[1]]
        && quares[gameOver[1]] === quares[gameOver[2]]
        && quares[gameOver[0]] !== null) {
        setWinner(quares[gameOver[1]]);
      }
    });
  };

  const handleSquareClick = (i) => {
    if (boardState[i] || winner) {
      if (winner) alert('Game Over!\nRestart!');
      return;
    }
    const stateTemp = boardState;
    stateTemp[i] = next;
    calculatingWinner(stateTemp);
    setBoardState(stateTemp);
    setNext(next === 'X' ? 'O' : 'X');
  };

  const renderSquare = (i) => <Square
    key={i}
    onClick={() => handleSquareClick(i)}>
    {boardState[i]}
  </Square>;

  function onReset() {
    setBoardState(Array(9).fill(null));
    setWinner(null);
    setNext('X');
  }

  return (
    <Backinterface>
      <StatePad>
        <h2>Next: {next}</h2>
        <h2>Winner: {winner}</h2>
      </StatePad>
      <Board>
        {[0, 1, 2].map((rIndex) => <SquareRow key={rIndex}>
          {[0, 1, 2].map((index) => renderSquare(rIndex * 3 + index))}
        </SquareRow>)}
      </Board>
      <ButtonContainer>
        <ResetButton onClick={onReset}>Reset Game!</ResetButton>
      </ButtonContainer>
    </Backinterface>
  );
}

export default App;
