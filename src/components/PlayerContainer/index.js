import React from 'react';

import { Container, ScoreContainer, PieceScoreContainer } from './styles';

export default function PlayerContainer({ player, turn, pieces }) {
  return (
    <Container player={player}>
      <h1>{player === 'B' ? 'Black' : 'White'} pieces</h1>
      {turn === player && <span>Your Turn</span>}
      <ScoreContainer>
        <PieceScoreContainer>
          {pieces.map((piece) => (
            <>
              <img
                src={`/pieces/${player}${piece.symbol}.png`}
                alt={piece.name}
              />
              <span>{`x${piece.amount}`}</span>
            </>
          ))}
        </PieceScoreContainer>
      </ScoreContainer>
    </Container>
  );
}
