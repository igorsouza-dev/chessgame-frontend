import React from 'react';

import { Container, ScoreContainer, PieceScoreContainer } from './styles';

export default function PlayerContainer({ player, turn, score }) {
  const otherPlayer = player === 'B' ? 'W' : 'B';
  const pieces = Object.keys(score);
  return (
    <Container player={player}>
      <h1>{player === 'B' ? 'Black' : 'White'} pieces</h1>
      <ScoreContainer>
        <PieceScoreContainer>
          {pieces.map((piece) => (
            <div key={`${otherPlayer}${piece}`}>
              <img src={`/pieces/${otherPlayer}${piece}.svg`} alt={piece} />
              <span>{`x${score[piece]}`}</span>
            </div>
          ))}
        </PieceScoreContainer>
      </ScoreContainer>
    </Container>
  );
}
