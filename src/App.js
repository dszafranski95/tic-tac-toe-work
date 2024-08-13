import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Board from './components/Board';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Board />
    </Provider>
  );
}

export default App;
