import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Board from '../../components/Board';
import Header from '../../components/Header';
import PlayerInfo from '../../components/PlayerInfo';
import MovesContainer from '../../components/MovesContainer';

import {
  Container,
  Button,
  BoardContainer,
  Loading,
  PlayersContainer,
} from './styles';

export default function App() {
  const [board, setBoard] = useState();
  const [moves, setMoves] = useState([]);
  const [browserId, setBrowserId] = useState();
  const [possibleMoves, setPossibleMoves] = useState();
  const [selected, setSelected] = useState();
  const [turn, setTurn] = useState();
  const [loading, setLoading] = useState(false);
  async function newGame() {
    setLoading(true);
    setBoard(null);
    setMoves([]);
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
        setBoard(JSON.parse(data.board.board));
        setTurn(data.board.turn_player === 'W' ? 'B' : 'W');
        setMoves(data.moves);
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
        setBoard(JSON.parse(data.board.board));
        setTurn(turn === 'W' ? 'B' : 'W');
        setMoves([data.move, ...moves]);
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
          <PlayersContainer>
            <PlayerInfo
              player="B"
              pieces={[{ symbol: 'N', amount: 1, name: 'Knight' }]}
              turn={turn}
            />
            <PlayerInfo
              player="W"
              pieces={[{ symbol: 'N', amount: 1, name: 'Knight' }]}
              turn={turn}
            />
          </PlayersContainer>
          <Board
            board={board}
            getPossibleMoves={getPossibleMoves}
            makeMove={handleMakeMove}
            highlights={possibleMoves}
            clearHighlights={clearHighlights}
            turn={turn}
          />
          <MovesContainer moves={moves} />
        </BoardContainer>
      )}
    </Container>
  );
}
