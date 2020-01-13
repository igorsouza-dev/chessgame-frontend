import React from 'react';
import { Container, MoveList, Move } from './styles';

export default function Moves({ moves }) {
  return (
    <Container>
      <MoveList>
        {moves.map((move) => (
          <Move key={move.id}>
            <span>{move.move_number}</span>
            <img src={`pieces/${move.player}${move.piece}.svg`} />
            <span>
              {move.from} {'->'} {move.to} {move.flag === 'x' && '(attack)'}
            </span>
          </Move>
        ))}
      </MoveList>
    </Container>
  );
}
