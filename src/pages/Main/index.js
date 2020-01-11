import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Board from '../../components/Board';
import { Container, Button, BoardContainer, ButtonsContainer } from './styles';

export default function App() {
  const [board, setBoard] = useState();
  const [browserId, setBrowserId] = useState();
  const [possibleMoves, setPossibleMoves] = useState();
  const [selected, setSelected] = useState();

  async function newGame() {
    try {
      const response = await api.post('/new-game');
      const { data } = response;
      setBoard(JSON.parse(data.board.board));
      setBrowserId(data.game.browser_id);
      localStorage.setItem('browser_id', data.game.browser_id);
    } catch (e) {}
  }
  useEffect(() => {
    async function loadGame(browserIdStorage) {
      try {
        const response = await api.get('/load-game', {
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
  async function getPossibleMoves({ position }) {
    setSelected(position);
    try {
      const response = await api.get(`/legal-moves/${position}`, {
        headers: { browser_id: browserId },
      });
      setPossibleMoves(response.data);
    } catch (e) {}
  }
  function clearHighlights() {
    // setPossibleMoves([]);
  }
  async function handleMakeMove({ position }) {
    if (selected) {
      try {
        const response = await api.get(`/make-move/${selected}/${position}`, {
          headers: { browser_id: browserId },
        });
        const { data } = response;
        setBoard(JSON.parse(data.board));
        setPossibleMoves([]);
      } catch (e) {}
    }
  }
  return (
    <Container>
      <Button onClick={newGame}>New Game</Button>

      {board && (
        <BoardContainer>
          <Board
            board={board}
            getPossibleMoves={getPossibleMoves}
            makeMove={handleMakeMove}
            highlights={possibleMoves}
            clearHighlights={clearHighlights}
          />
          <ButtonsContainer>
            <Button onClick={newGame}>Previous</Button>
            <Button onClick={newGame}>Next</Button>
          </ButtonsContainer>
        </BoardContainer>
      )}
    </Container>
  );
}
