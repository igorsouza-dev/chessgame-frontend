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
    <Container>
      <TitleContainer player={player}>
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
  score: PropTypes.shape({
    P: 0,
    N: 0,
    B: 0,
    Q: 0,
    K: 0,
  }),
};
PlayerInfo.defaultProps = {
  turn: 'W',
  score: {},
};

export default PlayerInfo;
