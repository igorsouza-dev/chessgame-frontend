import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Square = ({
  square,
  position,
  isBlack,
  clickable,
  handleLostFocus,
  getPossibleMoves,
  highlighted,
  makeMove,
}) => {
  function handleClick() {
    if (highlighted) return makeMove({ position });
    if (clickable) return getPossibleMoves({ position });
    return handleLostFocus();
  }
  return (
    <Container
      isBlack={isBlack}
      onClick={handleClick}
      clickable={clickable}
      highlighted={highlighted}
    >
      {square.piece && (
        <img src={`pieces/${square.color}${square.piece}.svg`} alt="" />
      )}
    </Container>
  );
};
Square.propTypes = {
  square: PropTypes.shape({
    piece: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
  position: PropTypes.string.isRequired,
  isBlack: PropTypes.bool.isRequired,
  clickable: PropTypes.bool,
  handleLostFocus: PropTypes.func.isRequired,
  getPossibleMoves: PropTypes.func,
  highlighted: PropTypes.bool,
  makeMove: PropTypes.func,
};
Square.defaultProps = {
  highlighted: false,
  clickable: false,
  getPossibleMoves: null,
  makeMove: null,
};
export default Square;
