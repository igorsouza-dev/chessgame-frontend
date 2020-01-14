import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import Game from './pages/Game';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Game />
      <ToastContainer autoClose={3000} />
    </>
  );
}
