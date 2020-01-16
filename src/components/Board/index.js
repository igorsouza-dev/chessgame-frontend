import React from 'react';
import PropTypes from 'prop-types';

import { Container, Outline } from './styles';
import Square from '../Square';

const Board = ({
  board,
  getPossibleMoves,
  highlights,
  makeMove,
  clearHighlights,
  turn,
}) => {
  function renderBoard() {
    const squares = Object.keys(board).map((square, index) => {
      let isBlack = index % 2;
      // prettier-ignore
      if ((index >= 8 && index < 16)
      || (index >= 24 && index < 32)
      || (index >= 40 && index < 48)
      || (index >= 56 && index < 64)
      ) {
        isBlack = !isBlack;
      }
      let clickable = board[square].piece;
      if (clickable) {
        clickable = board[square].color === turn;
      }
      const highlighted = highlights && highlights.find((h) => h === square);

      return (
        <Square
          key={square}
          square={board[square]}
          position={square}
          isBlack={isBlack > 0}
          clickable={clickable || highlighted}
          highlighted={highlighted}
          getPossibleMoves={clickable ? getPossibleMoves : null}
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
Board.propTypes = {
  board: PropTypes.shape().isRequired,
  getPossibleMoves: PropTypes.func,
  highlights: PropTypes.arrayOf(PropTypes.string),
  makeMove: PropTypes.func,
  clearHighlights: PropTypes.func.isRequired,
  turn: PropTypes.string,
};

Board.defaultProps = {
  getPossibleMoves: () => {},
  highlights: [],
  makeMove: () => {},
  turn: 'W',
};
export default Board;
