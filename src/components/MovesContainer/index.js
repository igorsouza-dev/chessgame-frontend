import React from 'react';
import PropTypes from 'prop-types';

// prettier-ignore
import {
  Container, MoveList, Move, InfoText,
} from './styles';

function Moves({ moves }) {
  return (
    <Container>
      <h1>Moves History</h1>
      <MoveList>
        {moves.length === 0 && <InfoText>No moves yet</InfoText>}
        {moves.map((move) => (
          <Move key={move.id}>
            <span>{`${move.move_number}:`}</span>
            <img
              src={`pieces/${move.player}${move.piece}.svg`}
              alt={move.piece}
            />
            <span>
              {`${move.from} -> ${move.to} ${
                move.flag === 'x' ? '(attack)' : ''
              } `}
            </span>
          </Move>
        ))}
      </MoveList>
    </Container>
  );
}
// prettier-ignore
Moves.propTypes = {
  moves: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      piece: PropTypes.string,
      player: PropTypes.string,
      flag: PropTypes.string,
      to: PropTypes.string,
      from: PropTypes.string,
      move_number: PropTypes.number,
    }),
  ).isRequired,
};

export default Moves;
