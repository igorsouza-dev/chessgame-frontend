import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Board from '../../components/Board';
import { Container, Button } from './styles';

export default function App() {
  const [board, setBoard] = useState();
  const [browserId, setBrowserId] = useState();
  async function newGame() {
    try {
      const response = await api.post('/games');
      const { data } = response;
      setBoard(JSON.parse(data.board.board));
      setBrowserId(data.game.browser_id);
      localStorage.setItem('browser_id', data.game.browser_id);
    } catch (e) {}
  }
  useEffect(() => {
    async function loadGame(browserIdStorage) {
      try {
        const response = await api.get('/last-board', {
          headers: {
            browser_id: browserIdStorage,
          },
        });
        const { data } = response;
        setBoard(JSON.parse(data.board));
      } catch (e) {}
    }
    const browserIdStorage = localStorage.getItem('browser_id');
    if (browserIdStorage) {
      setBrowserId(browserIdStorage);
      loadGame(browserIdStorage);
    } else {
      newGame();
    }
  }, []);
  function getPossibleMoves({ position, square }) {
    try {
      const response = await api.get(`/moves/${position}`);
    } catch (e) {}
  }
  return (
    <Container>
      {board && <Board board={board} getPossibleMoves={getPossibleMoves} />}

      <Button onClick={newGame}>New Game</Button>
    </Container>
  );
}
