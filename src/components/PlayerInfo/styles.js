import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  background: ${colors.lightTile};
  border-radius: 3px;
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  h1 {
    font-family: 'Lobster', cursive;
    color: ${(props) => (props.player === 'W' ? '#fff' : '#000')};
    align-items: center;
    justify-content: center;
  }
`;
export const ScoreContainer = styled.div`
  border: dashed 2px #ccc;
  border-radius: 4px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
  padding: 10px;
`;

export const PieceScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  img {
    height: 49px;
    width: 49px;
  }
  span {
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }
`;
