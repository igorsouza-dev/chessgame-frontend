import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ScoreContainer,
  PieceScoreContainer,
  TitleContainer,
} from './styles';

function PlayerInfo({ player, turn, score }) {
  const otherPlayer = player === 'B' ? 'W' : 'B';
  const pieces = Object.keys(score);
  return (
    <Container player={player}>
      <TitleContainer>
        <div>&nbsp;</div>
        <h1>{`${player === 'B' ? 'Black' : 'White'} pieces`}</h1>
        <div>{player === turn && <strong>Your Turn</strong>}</div>
      </TitleContainer>
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
PlayerInfo.propTypes = {
  player: PropTypes.string.isRequired,
  turn: PropTypes.string,
  score: PropTypes.shape.isRequired,
};
PlayerInfo.defaultProps = {
  turn: 'W',
};

export default PlayerInfo;
