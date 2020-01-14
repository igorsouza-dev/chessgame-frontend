import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import Main from './pages/Main';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
      <ToastContainer autoClose={3000} />
    </>
  );
}
