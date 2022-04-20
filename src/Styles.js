import styled from 'styled-components';

export const Backinterface = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;

export const Board = styled.div`
  height: 400px;
  border-radius: 5px;
  box-shadow: 3px 3px blue;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

export default styled.button`
    display: flex;
    flex: 1;
`;

export const Square = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: 3em;
  flex: 1;
  height: 100%;
`;

export const StatePad = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResetButton = styled.button`
  border: 1px solid cadetblue;
  font-size: 1.5em;
  color: cadetblue;
  &:hover{
    border: 1px solid blue;
    font-size: 1.5em;
    color: blue;
  }
  width: 100%;
  max-width: inherit;
`;
