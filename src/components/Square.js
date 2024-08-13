import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { makeMove } from '../store/gameSlice';

const Square = ({ value, index }) => {
  const dispatch = useDispatch();

  return (
    <StyledSquare onClick={() => dispatch(makeMove({ index }))}>
      {value}
    </StyledSquare>
  );
};

const StyledSquare = styled.button`
  width: 100px;
  height: 100px;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  background: #333;
  border: 2px solid #444;
  color: #0ff; /* Neon blue */
  box-shadow: 0 0 15px #0ff, 0 0 30px #0ff;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, box-shadow 0.3s, transform 0.3s;

  &:hover {
    background: #444;
    box-shadow: 0 0 20px #0ff, 0 0 40px #0ff;
  }

  &:active {
    transform: scale(0.95);
  }
`;


export default Square;
