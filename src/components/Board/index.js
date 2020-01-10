import React from 'react';

import { Container } from './styles';
import Square from '../Square';

const Board = ({ board, getPossibleMoves }) => {
  function renderBoard() {
    const squares = Object.keys(board).map((square, index) => {
      let isBlack = index % 2;
      if (
        (index >= 8 && index < 16) ||
        (index >= 24 && index < 32) ||
        (index >= 40 && index < 48) ||
        (index >= 56 && index < 64)
      ) {
        isBlack = !isBlack;
      }
      const clickable = board[square].piece;
      return (
        <Square
          key={square}
          square={board[square]}
          position={square}
          isBlack={isBlack}
          clickable={clickable}
          getPossibleMoves={clickable && getPossibleMoves}
        />
      );
    });
    return squares;
  }
  return <Container>{renderBoard()}</Container>;
};

export default Board;
