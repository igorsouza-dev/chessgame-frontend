import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: ${colors.darkTile};
`;
export const Button = styled.button`
  background: #fff;
  height: 46px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border: 0;
  padding: 0 12px;
  color: ${colors.highlighted};
  width: 100%;
  transition: all 0.5s ease-out;
  &:hover {
    background: ${colors.highlighted};
    color: #fff;
  }
`;
export const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${colors.darkTile};
  height: 100%;
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  padding: 10px;
  border: dashed 5px ${colors.lightTile};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const InfoText = styled.h1`
  flex: 1;
  font-size: 48px;
  height: 100%;
  width: 100%;
  color: ${colors.lightTile};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lobster', recursive;
`;
