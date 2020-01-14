import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Indicator = styled.button`
  background: ${(props) => (props.isSelected ? '#fff' : colors.lightTile)};
  height: 10px;
  width: 10px;
  border: 0;
  cursor: ${(props) => (props.isClickable ? 'pointer' : 'default')};
  border-radius: 50%;
  margin: 2px;
`;
