import React from 'react';

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
    return () => {};
  }
  return (
    <Container
      isBlack={isBlack}
      onClick={handleClick}
      onBlur={handleLostFocus}
      clickable={clickable}
      highlighted={highlighted}
    >
      {square.piece && (
        <img src={`pieces/${square.color}${square.piece}.svg`} alt="" />
      )}
    </Container>
  );
};

export default Square;
