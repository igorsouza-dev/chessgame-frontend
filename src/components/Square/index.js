import React from 'react';

import { Container } from './styles';

const Square = ({ square, position, isBlack, clickable, getPossibleMoves }) => {
  function handleClick() {
    if (clickable) return getPossibleMoves({ position, square });
    return () => {};
  }
  return (
    <Container isBlack={isBlack} onClick={handleClick}>
      {position}
    </Container>
  );
};

export default Square;
