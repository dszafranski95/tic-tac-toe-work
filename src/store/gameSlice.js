import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  board: Array(16).fill(null), // Zmienione na siatkę 4x4
  xIsNext: true,
  winner: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    makeMove: (state, action) => {
      const { index } = action.payload;
      if (state.board[index] || state.winner) return;

      state.board[index] = state.xIsNext ? 'X' : 'O';
      state.xIsNext = !state.xIsNext;
      state.winner = calculateWinner(state.board);
    },
    makeAiMove: (state) => {
      if (state.winner) return;

      const emptyIndices = state.board
        .map((value, index) => (value === null ? index : null))
        .filter((val) => val !== null);

      if (emptyIndices.length > 0) {
        const randomIndex =
          emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        state.board[randomIndex] = state.xIsNext ? 'X' : 'O';
        state.xIsNext = !state.xIsNext;
        state.winner = calculateWinner(state.board);
      }
    },
    resetGame: (state) => {
      state.board = Array(16).fill(null); // Zmienione na siatkę 4x4
      state.xIsNext = true;
      state.winner = null;
    },
  },
});

export const { makeMove, makeAiMove, resetGame } = gameSlice.actions;

export default gameSlice.reducer;

// Helper function to calculate the winner
function calculateWinner(board) {
  const lines = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c] && board[a] === board[d]) {
      return board[a];
    }
  }

  return null;
}
