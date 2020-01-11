import React from 'react';

import { Container, Outline } from './styles';
import Square from '../Square';

const Board = ({
  board,
  getPossibleMoves,
  highlights,
  makeMove,
  clearHighlights,
}) => {
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
      const highlighted = highlights && highlights.find((h) => h === square);

      return (
        <Square
          key={square}
          square={board[square]}
          position={square}
          isBlack={isBlack}
          clickable={clickable || highlighted}
          highlighted={highlighted}
          getPossibleMoves={clickable && getPossibleMoves}
          handleLostFocus={clearHighlights}
          makeMove={highlighted && makeMove}
        />
      );
    });
    return squares;
  }
  return (
    <Outline>
      <Container>{renderBoard()}</Container>
    </Outline>
  );
};

export default Board;
