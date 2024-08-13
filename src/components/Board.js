import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Square from './Square';
import { resetGame, makeAiMove } from '../store/gameSlice';

const Board = () => {
  const dispatch = useDispatch();
  const { board, winner, xIsNext } = useSelector((state) => state.game);

  useEffect(() => {
    if (!xIsNext && !winner) {
      const aiMoveTimeout = setTimeout(() => {
        dispatch(makeAiMove());
      }, 500);

      return () => clearTimeout(aiMoveTimeout);
    }
  }, [xIsNext, winner, dispatch]);

  const renderSquare = (index) => {
    return <Square value={board[index]} index={index} />;
  };

  return (
    <StyledBoard>
      <Title>Tic-Tac-Toe</Title>
      <Status>
        {winner
          ? `Winner: ${winner}`
          : board.every((square) => square)
          ? 'Draw!'
          : `Next Player: ${xIsNext ? 'X' : 'O'}`}
      </Status>
      <Grid>
        {Array.from({ length: 16 }).map((_, index) => renderSquare(index))} {/* Zmienione na siatkę 4x4 */}
      </Grid>
      <ResetButton onClick={() => dispatch(resetGame())}>Reset</ResetButton>
    </StyledBoard>
  );
};

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #0ff; /* Neon blue */
  text-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
  margin-bottom: 20px;
`;

const Status = styled.div`
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #0ff; /* Neon blue */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px); // Zmienione na siatkę 4x4
  grid-template-rows: repeat(4, 100px);
  gap: 10px;
`;

const ResetButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  background: #0ff; /* Neon blue */
  color: #000;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px #0ff, 0 0 20px #0ff;

  transition: background 0.3s, box-shadow 0.3s, transform 0.3s;

  &:hover {
    background: #00f;
    color: #fff;
    box-shadow: 0 0 20px #00f, 0 0 40px #00f;
    transform: translateY(-3px);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default Board;
