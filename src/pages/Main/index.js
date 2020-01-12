import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Board from '../../components/Board';
import Header from '../../components/Header';
import PlayerContainer from '../../components/PlayerContainer';

import { Container, Button, BoardContainer, Loading } from './styles';

export default function App() {
  const [board, setBoard] = useState();
  const [browserId, setBrowserId] = useState();
  const [possibleMoves, setPossibleMoves] = useState();
  const [selected, setSelected] = useState();
  const [turn, setTurn] = useState();
  const [loading, setLoading] = useState(false);
  async function newGame() {
    setLoading(true);
    setBoard(null);
    try {
      const response = await api.post('/new-game');
      const { data } = response;
      setBoard(JSON.parse(data.board.board));
      setTurn(data.board.turn_player === 'W' ? 'B' : 'W');
      setBrowserId(data.game.browser_id);
      localStorage.setItem('browser_id', data.game.browser_id);
    } catch (e) {}
    setLoading(false);
  }
  useEffect(() => {
    async function loadGame(browserIdStorage) {
      setLoading(true);
      try {
        const response = await api.get('/load-game', {
          headers: {
            browser_id: browserIdStorage,
          },
        });
        const { data } = response;
        setBoard(JSON.parse(data.board));
        setTurn(data.board.turn_player === 'W' ? 'B' : 'W');
      } catch (e) {}
      setLoading(false);
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
        setTurn(turn === 'W' ? 'B' : 'W');
        setPossibleMoves([]);
      } catch (e) {}
    }
  }
  return (
    <Container>
      <Header>
        <Button onClick={newGame}>New Game</Button>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {board && (
        <BoardContainer>
          <PlayerContainer
            player="W"
            pieces={[{ symbol: 'N', amount: 1, name: 'Knight' }]}
            turn={turn}
          />
          <Board
            board={board}
            getPossibleMoves={getPossibleMoves}
            makeMove={handleMakeMove}
            highlights={possibleMoves}
            clearHighlights={clearHighlights}
            turn={turn}
          />
          <PlayerContainer
            player="B"
            pieces={[{ symbol: 'N', amount: 1, name: 'Knight' }]}
            turn={turn}
          />
        </BoardContainer>
      )}
    </Container>
  );
}
