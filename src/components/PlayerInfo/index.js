import React from 'react';

import { Container, ScoreContainer, PieceScoreContainer } from './styles';

export default function PlayerContainer({ player, turn, pieces }) {
  const otherPlayer = player === 'B' ? 'W' : 'B';
  return (
    <Container player={player}>
      <h1>{player === 'B' ? 'Black' : 'White'} pieces</h1>
      {turn === player && <span>Your Turn</span>}
      <ScoreContainer>
        <PieceScoreContainer>
          {pieces.map((piece) => (
            <div key={`${otherPlayer}${piece.symbol}`}>
              <img
                src={`/pieces/${otherPlayer}${piece.symbol}.svg`}
                alt={piece.name}
              />
              <span>{`x${piece.amount}`}</span>
            </div>
          ))}
        </PieceScoreContainer>
      </ScoreContainer>
    </Container>
  );
}
