import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${colors.lightTile};
  border-radius: 3px;
  padding: 10px;
  min-height: 150px;
  max-height: 200px;
  width: 100%;
  h1 {
    font-family: 'Lobster', cursive;
    color: ${colors.darkTile};
    align-items: center;
    justify-content: center;
  }
`;

export const MoveList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;

  border: dashed 2px #ccc;
  border-radius: 4px;
  height: 100%;

  margin: 10px;
  padding: 10px;
`;
export const Move = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  border-bottom: solid 1px ${colors.darkTile};
  img {
    height: 16px;
    width: 16px;
    margin-right: 10px;
  }
  span {
    font-weight: bold;
  }
  &:last-child {
    border: 0;
  }
`;
export const InfoText = styled.div`
  width: 100%;
  font-weight: bold;
  color: ${colors.sideBar};
  font-size: 14px;
  text-align: center;
  font-family: 'Lobster', cursive;
`;
