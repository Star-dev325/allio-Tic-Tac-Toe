import React, { useState } from 'react';
import './App.css';

import SquareRow, {
  Backinterface,
  Board,
  StatePad,
  Square,
  ResetButton,
  ButtonContainer
} from './Styles';

function App() {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [next, setNext] = useState('X');
  const [winner, setWinner] = useState(null);
  const renderSquare = (i) => <Square
    key={i}
    onClick={() => {}}>
    {boardState[i]}
  </Square>;

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
        <ResetButton>Reset Game!</ResetButton>
      </ButtonContainer>
    </Backinterface>
  );
}

export default App;
